import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Posts from "./PostComponents/Posts";
import RightBar from "./RightBar/RightBar";
import LeftBar from "./LeftBar/LeftBar";
import Scroll from "./scroll";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px"
  },
  root: {
    flexGrow: 1,
    margin: "15px",
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    boxShadow: "none"
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <Scroll showBelow={250} />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <LeftBar />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Posts />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <RightBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}