import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from "../HomeComponent/SideComponents/Navbar";
import Connect from "../HomeComponent/LeftBar/Connect";
import Records from "../HomeComponent/LeftBar/Records"
import Downloads from "../HomeComponent/LeftBar/Downloads";
import UsefulLinks from "../HomeComponent/LeftBar/Links";
import WebNotify from "../HomeComponent/LeftBar/WebNotify";
import Assistance from "../HomeComponent/LeftBar/Assistance";
import MemberLinks from "../HomeComponent/LeftBar/MemberLinks";
import PlacementLinks from "../HomeComponent/LeftBar/PlacementLinks";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px",
    minHeight: "100vh",
  },
  root: {
    flexGrow: 1,
    margin: "15px 15px 0",
    marginTop: "30px",
    paddingTop: "20px",
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  center:{
    marginBottom: "20px",
    ['@media (min-width:450px) and (max-width:600px)']: {
       marginLeft: "30px",
       marginRight: "30px"
    },
    ['@media (max-width:600px)']: {
      marginTop: "40px"
    },
    ['@media (min-width:600px)']: {
      marginTop: "60px"
    },
  },
  cardTitle:{
    fontSize: "18px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
}));

export default function MoreInfoPage() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2} md={4} />
          <Grid item xs={12} sm={8} md={4} className={classes.center}>
            <Paper className={classes.paper}>
            <h3 className={classes.cardTitle}>Connect</h3>
            <Connect />
            <h3 className={classes.cardTitle}>Alumni</h3>
            <Assistance />
            <h3 className={classes.cardTitle}>Explore</h3>
            <Records />
            <h3 className={classes.cardTitle}>T&P Members</h3>
            <MemberLinks />
            <h3 className={classes.cardTitle}>Downloads</h3>
            <Downloads />
            <h3 className={classes.cardTitle}>Notifications</h3>
            <WebNotify />
            <h3 className={classes.cardTitle}>Placement Resources</h3>
            <PlacementLinks />
            <h3 className={classes.cardTitle}>Useful Links</h3>
            <UsefulLinks />
            </Paper>
          </Grid>
          <Grid item xs={0} sm={2} md={4} />
        </Grid>
      </div>
    </div>
  );
}