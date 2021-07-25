import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';
import vector from '../../../../images/empty.png';


const useStyles = makeStyles((theme) =>({
  card:{
      width: "100%",
      textAlign: "center"
  },
  img: {
      width: "50%",
      ['@media (max-width:960px)']: {
        width: "70%"
       }
  },
  title: {
      fontFamily: "Open Sans",
      fontSize: "28px",
      fontWeight: "600",
      color: theme.palette.primary.dark,
      ['@media (max-width:960px)']: {
       fontSize: "24px"
      }
  },
}));

export default function NoPostFound() {
  const classes = useStyles();
  return (
      <div className={classes.card}>
        <img src={vector} className={classes.img} />
        <h1 className={classes.title}>Not Found</h1>
      </div>
  );
}