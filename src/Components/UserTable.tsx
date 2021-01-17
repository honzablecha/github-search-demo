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
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { Repository } from '../types';

interface UserTableProps {
    repositoryList?: Repository[],
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const UserTable: FC<UserTableProps> = ({ repositoryList }) => {
    const styles = useStyles();
    const { t } = useTranslation();

    return (
        <TableContainer component={Paper}>
            {repositoryList && repositoryList.length > 0 && (
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('name')}</TableCell>
                            <TableCell align="center">{t('technology')}</TableCell>
                            <TableCell align="left">{t('description')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repositoryList.map((repository: Repository) => (
                            <TableRow key={repository.id}>
                                <TableCell component="th" scope="row">
                                    <Link href={repository.url} rel="noopener noreferrer" target="_blank">
                                        {repository.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">{repository.primaryLanguage?.name}</TableCell>
                                <TableCell align="left">{repository.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

        </TableContainer>
    )
}

export default UserTable;