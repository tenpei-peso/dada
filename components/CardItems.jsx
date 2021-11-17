import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Link from 'next/link'


const useStyles = makeStyles({
    root: {
        maxWidth: 330,
        minHeight: 262
    },
    media: {
        height: 150,
    },
});

const CardItems = ({description, image, link}) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <Link href={link}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Contemplative Reptile"
                        />
                    </Link>
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardItems