import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from "../HomeComponent/SideComponents/Navbar";
import Posts from "../HomeComponent/PostComponents/Posts";
import RightBar from "../HomeComponent/RightBar/RightBar";
import RightBarSticky from "../HomeComponent/RightBar/RightBarSticky";
import LeftBar from "../HomeComponent/LeftBar/LeftBar";
import Scroll from "../HomeComponent/SideComponents/scroll";
import SearchArea from "../HomeComponent/SideComponents/SearchArea";

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
    top: "60px"
  },
  left:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
   }
  },
  center:{
    marginTop: "40px",
    ['@media (max-width:960px)']: {
      width: "100%",
   }
  },
  right:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
       display: "none",
    }
  },
  cardTitle:{
    fontSize: "18px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    }
  },
}));

export default function Home() {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');

  return (
    <div className={classes.body}>
      <Navbar />
      {/* <SearchArea searchText={searchText} setState={setSearchText} /> */}
      <div className={classes.root}>
        <Scroll showBelow={250} />
        <Grid container spacing={3}>
          <Grid item md={3} className={classes.left}>
            <Paper className={classes.paper}>
              <LeftBar />
            </Paper>
          </Grid>
          <Grid item md={6} className={classes.center}>
            <Paper className={classes.paper}>
              <Posts />
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <RightBar />
            </Paper>
            <Paper className={classes.paper2}>
              <RightBarSticky />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}