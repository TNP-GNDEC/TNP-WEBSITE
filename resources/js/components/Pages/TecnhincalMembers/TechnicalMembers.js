import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";
import Scroll from "../../HomeComponent/SideComponents/scroll";
import MemberCards22 from "./components/MemberCards22"
import MemberCards21 from "./components/MemberCards21"
import MemberCards20 from "./components/MemberCards20"
import MemberCards19 from "./components/MemberCards19"

import Select from "react-select";

const options = [
  { value: "22", label: "2021-22" },
  { value: "21", label: "2020-21" },
  { value: "20", label: "2019-20" },
  { value: "19", label: "2018-19" }
]

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
  left: {
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
  },
  center: {
    marginTop: "30px",
    ['@media (max-width:960px)']: {
      width: "100%",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  right: {
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
  },
  cardTitle: {
    fontSize: "18px",
    marginTop: "20px",
    width: "100%",
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    }
  },
  memberCards: {
    marginTop: "20px",
    width: "50%",
    padding: "10px",
    margin: "auto",
  },
  rselect: {
    borderRadius: "15px",
    margin: "auto",
  }
}));

export default function TechnicalMembers() {
  const classes = useStyles();
  const [selectValue, setSelectValue] = React.useState();

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Scroll showBelow={250} />
        <Grid container spacing={3}>
          <Grid item md={3} className={classes.left}>
            <Paper className={classes.paper}>
              <LeftBar />
            </Paper>
          </Grid>
          <Grid item spacing={2} container md={6} className={classes.center} >
            <Grid item xs={12}>
              <h3 className={classes.cardTitle}>T&P Office</h3>
              <Select options={options} defaultValue={options[0]} onChange={(val) => setSelectValue(val.value)} />
            </Grid>
            {!selectValue || selectValue === "22" ? <MemberCards22 /> : ""}
            {selectValue === "21" ? <MemberCards21 /> : ""}
            {selectValue === "20" ? <MemberCards20 /> : ""}
            {selectValue === "19" ? <MemberCards19 /> : ""}
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <RightBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}