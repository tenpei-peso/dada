import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    root: {
        maxWidth: 330,
        minHeight: 262
    },
    media: {
        height: 150,
    },
});

const CardItems = ({description, image}) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Contemplative Reptile"
                        />
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