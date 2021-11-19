import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from "../HomeComponent/SideComponents/Navbar";
import Office from "../HomeComponent/RightBar/Office";
import Faculty from "../HomeComponent/RightBar/Faculty";
import Academic from "../HomeComponent/RightBar/Academic";
import Student from "../HomeComponent/RightBar/Student";
import Location from "../HomeComponent/RightBar/Location";
import FooterCard from "../HomeComponent/RightBar/FooterCard";

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

export default function ContactDetails() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2} md={3} lg={4} />
          <Grid item xs={12} sm={8} md={6} lg={4} className={classes.center}>
            <Paper className={classes.paper}>
              <h3 className={classes.cardTitle}>T&P Office</h3>
              <Office />
              <h3 className={classes.cardTitle}>Faculty</h3>
              <Faculty />
              <h3 className={classes.cardTitle}>Academic Queries</h3>
              <Academic />
              <h3 className={classes.cardTitle}>Student</h3>
              <Student />
              <h3 className={classes.cardTitle}>Location</h3>
              <Location />
              <FooterCard />
            </Paper>
          </Grid>
          <Grid item xs={0} sm={2} md={3} lg={4} />
        </Grid>
      </div>
    </div>
  );
}