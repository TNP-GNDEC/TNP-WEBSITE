import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px",
  },
  root: {
    flexGrow: 1,
    margin: "15px 15px 0",
    marginTop: "40px",
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
    marginTop: "30px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
   }
  },
  center:{
    marginTop: "30px",
    ['@media (max-width:960px)']: {
      width: "100%",
   }
  },
  right:{
    marginTop: "30px",
    width: "100%",
    ['@media (max-width:960px)']: {
       display: "none",
    }
  },
  greeting:{
    fontSize: "32px",
    color: theme.palette.primary.dark,
    fontFamily: "Quicksand",
    fontWeight: "900",
    padding: "0px",
    marginTop: "0px",
  },
  greeting2:{
    fontSize: "16px",
    color: theme.palette.primary.text,
    fontFamily: "Quicksand",
    fontWeight: "600",
    padding: "0px",
    marginTop: "0px",
    lineHeight: "0px"
  },
  searchDiv: {
    position: "relative"
  },
  icon: {
    position: "absolute",
    top: "15px",
    left: "15px"
  },
  search: {   
      marginTop: "5px",
      width: "100%",
      height: "46px",
      background: theme.palette.primary.accent,
      color: theme.palette.primary.dark,
      fontSize: "16px",
      fontFamily: "Open Sans",
      fontWeight: "500",
      border: "none",
      borderRadius: "12px",
      paddingLeft: "50px",
      "&:placeholder-shown":{
        fontSize: "16px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "500",
    },
    "&:focus":{
      outline: "none",
      border: "1px solid #1687d9",
      backgroundColor: theme.palette.secondary.hover
    },
    "&:hover":{
      backgroundColor: theme.palette.secondary.hover
    },
  },
  filterDiv: {
    marginTop: "5px",
    width: "100%",
    height: "46px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label:{
    paddingTop: "8px",
    fontSize: "16px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  filter: {
    width: "75%",
    height: "46px",
    background: theme.palette.primary.accent,
    color: theme.palette.primary.dark,
    border: "none",
    borderRadius: "12px",
    paddingLeft: "15px",
    fontSize: "16px",
    fontFamily: "Open Sans",
    fontWeight: "500",
    "&:focus":{
      outline: "none",
      border: "1px solid #1687d9",
      backgroundColor: theme.palette.secondary.hover
    },
    "&:hover":{
      backgroundColor: theme.palette.secondary.hover
    },
},
}));

export default function SearchArea() {
  const classes = useStyles();
  const [text, setText] = React.useState('');
  function handleChange(e) {
    setText(e.target.value);
    localStorage.setItem('searchText', text);
  }

  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={3} className={classes.left}>
            <Paper className={classes.paper}>
              <h1 className={classes.greeting}>Good Morning!</h1>
              <p className={classes.greeting2}>Welcome to the T&P Cell</p>
            </Paper>
          </Grid>
          <Grid item md={6} className={classes.center}>
            <Paper className={classes.paper}>
              <div className={classes.searchDiv}>
                <SearchIcon className={classes.icon} />
                <input className={classes.search} onChange={handleChange} 
                placeholder="Search Posts..." />
              </div>
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <div className={classes.filterDiv}>
                <label className={classes.label}>Filter By:</label>
                <select className={classes.filter} disabled>
                    <option>All</option>
                    <option>Announcement</option>
                    <option>Placement</option>
                    <option>Selection</option>
                    <option>Training</option>
                    <option>Internship</option>
                </select>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}