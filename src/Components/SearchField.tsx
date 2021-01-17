import React, { FC, ChangeEvent } from 'react';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 600,
            marginBottom: '20px',
        },
        input: {
            marginLeft: '10px',
            flex: 1,
        },
        iconButton: {
            padding: '10px',
        },
    }),
);

interface SearchFieldProps {
    onSubmit: (value: string) => void;
    onChange: (value: string) => void;
    searchString: string;
}

const SearchField: FC<SearchFieldProps> = ({ onSubmit, onChange, searchString }) => {
    const styles = useStyles();
    const { t } = useTranslation();
    const handleOnSubmit = (e: ChangeEvent<{}>, value: string): void => {
        e.preventDefault();
        onSubmit(value);
    }

    return (
        <Paper component="form" className={styles.root} onSubmit={(e) => handleOnSubmit(e, searchString)}>
            <InputBase
                autoFocus
                fullWidth
                className={styles.input}
                placeholder={t('searchPlaceholder')}
                inputProps={{ 'aria-label': 'search Github user' }}
                onChange={(e) => onChange(e.target.value)}
                value={searchString}
            />
            <IconButton type="submit" className={styles.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
};

export default SearchField;