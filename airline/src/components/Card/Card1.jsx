import { Button, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import "./Card.css"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

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

const Card1 = ({ data: { from, to, date, time } }) => {
  const history = useHistory()
  const classes = useStyles();
  console.log(from, to, date, time);
  const handleBook = (e) => {
    e.preventDefault();
    // console.log([from, to, date, time]);
    history.push({
      pathname: '/confirm',
      state: [from, to, date, time]
    })
  }
  return (
    <>
      <Card className={classes.root} style={{ marginTop: "10 %" }}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {from}
          </Typography>
          <Typography variant="h5" component="h2">
            {to}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {date}
          </Typography>
          <button className="btn btn-primary float-right" type="button" onClick={(e) => handleBook(e)}>Book Now</button>

          <Typography variant="body2" component="p">
            {time}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Card1
