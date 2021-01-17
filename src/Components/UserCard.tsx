import React, { FC } from 'react';
import { Card, CardMedia, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

interface UserCardProps {
    name?: string;
    login: string;
    bio?: string;
    profile?: string;
    avatarUrl?: string;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '345px',
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
    }),
);

const UserCard: FC<UserCardProps> = ({ name, login, bio, profile, avatarUrl }) => {
    const styles = useStyles();
    const { t } = useTranslation();
    return (
        <Card className={styles.root}>
            <CardHeader title={`${t('userName')}: ${login}`} subheader={`${t('name')}: ${name || ''}`} />
            <CardMedia className={styles.media} image={avatarUrl} />
            <CardContent>
                <Typography>
                    {`${t('profile')}: ${profile || ''}`}
                </Typography>
                <Typography paragraph>
                    {`${t('bio')}: ${bio || ''}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;