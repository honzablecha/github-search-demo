import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import { Follower } from '../types';

interface FollowersTableProps {
    followerList?: Follower[],
    onSelect: (value: string) => void;
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const FollowersTable: FC<FollowersTableProps> = ({ followerList, onSelect }) => {
    const styles = useStyles();
    const { t } = useTranslation();

    return (
        <TableContainer component={Paper}>
            {followerList && followerList.length > 0 && (
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('userName')}</TableCell>
                            <TableCell align="left">{t("bio")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {followerList.map((follower: Follower) => (
                            <TableRow key={follower.id}>
                                <TableCell component="th" scope="row" onClick={() => onSelect(follower.login)}>
                                    <Link>
                                        {follower.login}
                                    </Link>
                                </TableCell>
                                <TableCell align="left">{follower.bio || ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

        </TableContainer>
    )

}

export default FollowersTable;