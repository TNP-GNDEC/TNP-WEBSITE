import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import Link from "./Link";
import MiddleSection from "./MiddleSection";
import RightBar from "./RightBar";
import Footer from "../../HomeComponent/RightBar/FooterCard";


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
  paper2: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "sticky",
    top: "80px"
  },
  left:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
  },
  center:{
    marginTop: "40px",
    ['@media (max-width:960px)']: {
      width: "100%",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
  },
  right:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
  },
  cardTitle:{
    fontSize: "18px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    },
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
    },
  },
}));

export default function executiveMembers() {

  const classes = useStyles();
  return(
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item md={3} className={classes.left} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <h3 className={classes.cardTitle}>Other Members</h3>
              <Link />
              <Footer />
            </Paper>
          </Grid>

          <Grid item md={6} className={classes.center}>
            <Paper className={classes.paper}>
              <MiddleSection/>
            </Paper>
          </Grid>

          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <RightBar />
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}