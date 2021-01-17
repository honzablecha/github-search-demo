import React, { useState, FC, useEffect, Suspense, ChangeEvent } from 'react';
import {
    useHistory,
    useLocation,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { History, Location } from 'history';
import { Container, Typography } from '@material-ui/core';
import { CircularProgress, Tabs, Tab } from '@material-ui/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { updateQueries, getQueries } from './Utils/queryUtils';
import SearchField from './Components/SearchField';
import UserCard from './Components/UserCard';
import UserTable from './Components/UserTable';
import FollowersTable from './Components/FollowersTable';

import { indexToTabName, tabList } from './Utils/tabUtils';

import { USER } from './graphql/User';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '20px 4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
);

const SearchPage: FC = () => {
    const history: History = useHistory();
    const location: Location = useLocation();
    const styles = useStyles();
    const { t } = useTranslation();
    const [getUser, { loading, data, error }] = useLazyQuery(USER);
    const { user, tab } = getQueries(location);
    const [searchValue, setSearchValue] = useState(user || '');
    const [selectedTab, setSelectedTab] = useState(tab ? indexToTabName[tab] : 0);

    const handleSubmit = (value: string): void => {
        setSearchValue(value);
        if (value) {
            getUser({
                variables: {
                    name: value,
                }
            })
        }
    };

    useEffect(() => {
        if (data) {
            const newQuery = updateQueries(location, { ...tabList[selectedTab], user: searchValue })
            history.push({ pathname: `/${data.user.url}`, search: newQuery });
        }
        if (error) {
            history.push('/');
        }
    }, [data, selectedTab, error]);

    useEffect(() => {
        const { user } = getQueries(location);
        if (user) {
            handleSubmit(user);
        }
    }, []);

    const handleChangeTab = (e: ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Suspense fallback="loading">
            <Container maxWidth="md" className={styles.root}>
                <SearchField onSubmit={handleSubmit} onChange={setSearchValue} searchString={searchValue} />
                {loading && <CircularProgress color="secondary" />}
                {error && <Typography>{t('error')}</Typography>}
                {data &&
                    <>
                        <UserCard {...data.user} />
                        <Tabs value={selectedTab || 0} onChange={handleChangeTab}>
                            <Tab label={t('repository')} value={0} />
                            <Tab label={t('followers')} value={1} />
                        </Tabs>
                        {selectedTab === 0 && <UserTable repositoryList={data?.user?.repositories?.nodes} />}
                        {selectedTab === 1 && <FollowersTable followerList={data?.user?.followers?.nodes} onSelect={handleSubmit} />}
                        <UserTable />
                    </>
                }
            </Container>
        </Suspense >
    )
}

export default SearchPage;
