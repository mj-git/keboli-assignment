import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    //minWidth: 275
    display: 'flex',
    justifyContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  square: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    display: 'inline-block',
    '& p': { margin: '10px 0' }
  },
  pos: {
    marginBottom: 12
  }
});

function Widget({ primaryText, secondaryText, count }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar variant="square" className={classes.square}>
          <Typography component="p">{primaryText[0].toUpperCase()}</Typography>
        </Avatar>

        <Typography className={classes.pos} color="textPrimary">
          {primaryText}
        </Typography>
        <Typography variant="h6" component="p">
          {count}
        </Typography>
        <Typography color="textSecondary">{secondaryText}</Typography>
      </CardContent>
    </Card>
  );
}

Widget.defaultProps = {
  primaryText: 'Total Candidates',
  secondaryText: 'Candidates',
  count: 5
};

Widget.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  count: PropTypes.number
};

export default Widget;
