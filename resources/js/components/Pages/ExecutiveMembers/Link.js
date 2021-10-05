import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "7px",
    marginBottom: "34px",
    borderRadius: "16px",
    // boxShadow: "0px 15px 30px #8a959e33",
    boxShadow: "0px 10px 25px rgba(48, 48, 48, 0.2)",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
    },
  },
  heading:{
    marginTop: "16px",
    marginBottom: "16px",
    textAlign: "center",
    fontSize: "16px",
    width: "100%",
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
      paddingTop: "12px"
    },
  },
  linkContainer:{
    width: "90%",
    backgroundColor: "#d8dee7",
    borderRadius: "16px",
    marginTop: "7px",
    marginBottom: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "5px",
    paddingRight: "5px",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  linkIcon1:{
    fontSize: "30px",
    marginRight: "10px",
    color: "#1687D9"
  },
  linkIcon2:{
    fontSize: "30px",
    marginRight: "5px",
    color: "#1687D9"
  },
  text:{
    color: "#303030",
    textAlign: "center"
  }
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.linkContainer}>
          <h3 className={classes.heading}>
            <a href="/technicalMembers" target="_blank" rel="noopener" className={classes.text}
            style={{ textDecoration: 'none' }}>
              <ComputerIcon className={classes.linkIcon1}/> 
              Technical Members
            </a>
          </h3>
      </div>

      <div className={classes.linkContainer}>
          <h3 className={classes.heading}>
            <a href="/coreMembers" target="_blank" rel="noopener" className={classes.text}
            style={{ textDecoration: 'none' }}>
              <PersonRoundedIcon className={classes.linkIcon2}/> 
              Core Members
            </a>
          </h3>
      </div>
    </Card>
  );
}
