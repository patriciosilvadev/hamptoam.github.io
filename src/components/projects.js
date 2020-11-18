import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Container, Grid, Card, CardMedia, CardActions, CardContent, Typography, Button, CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    title: {
        padding: theme.spacing(8, 0, 6),
    },
    card: {
        textAlign: 'center',
 
        height: 'auto',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        backgroundColor: 'white',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9

    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function Aboutme() {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.title}>
                <Container maxWidth="sm">
                    <Typography color="inherit" component="h1" variant="h2" align="center" gutterBottom>
                        Projects
            </Typography>
                    <Typography variant="h5" align="center" paragraph>
            </Typography>
                </Container>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Projects
                                        </Typography>
                                        <Typography>

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                           </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
}