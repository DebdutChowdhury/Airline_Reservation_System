import React from 'react'
import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        minWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Confirmation = (props) => {
    const classes = useStyles();
    // console.log(props.location.state);
    let [from, to, date, time] = props.location.state;
    return (
        <>
            <div className="container text-center">
                <Card className={classes.root} style={{ marginTop: "10 %" }}>
                    <CardContent>
                        <h2><span>✅</span><br />Booking Confirmed  </h2>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {from}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {to}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {date}
                        </Typography>

                        <Typography variant="body2" component="p">
                            {time}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Confirmation
