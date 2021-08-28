import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import bell from "../../../../images/bell.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "34px",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
  },
  },
  media:{
    textAlign: "center"
  },
  icon:{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderRadius: "5px",
      boxShadow: "0px 5px 15px #193b6833",
      marginRight: "10px",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  Icon:{
    fontSize: "18px",
  },
  title:{
      color: theme.palette.primary.dark,
      fontSize: "22px"
  },
  imageBox:{
      marginLeft: "auto",
      marginRight: "auto",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.accent,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ['@media (min-width:1600px)']: {
        height: "70px",
        width: "70px",
    },
  },
  image:{
      height: "30px",
      ['@media (min-width:1600px)']: {
        height: "40px",
    },
  },
  heading:{
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "5px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
      paddingTop: "12px"
  },
  },
  subheading:{
      fontSize: "13px",
      fontFamily: "Open Sans",
      fontWeight: "600",
      color: theme.palette.primary.text,
      ['@media (min-width:1600px)']: {
        fontSize: "16px"
    },
  },
  button:{
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    marginTop: "20px",
    width: "80%",
    height: "40px",
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "0 5px 12px #1687d933",
    },
    "&:focus": {
      outline: "none",
    },
    ['@media (min-width:1600px)']: {
      height: "50px",
  },
},
button2:{
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "20px",
  marginTop: "20px",
  width: "80%",
  height: "40px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#E6E9ED",
  color: "#6F91AA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ['@media (min-width:1600px)']: {
    height: "50px",
},
},
subheading2:{
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.secondary.main,
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
  },
},
subheading3:{
  fontSize: "14px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  color: "",
  ['@media (min-width:1600px)']: {
    fontSize: "16px"
},
},
}));

export default function WebNotify() {
  const classes = useStyles();
  const ButtonClick = () => {
    Notification.requestPermission();
  }

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <div className={classes.imageBox}>
            <img src={bell} className={classes.image}/>
        </div>
      </div>
      <h1 className={classes.heading}>
        Stay Upto Date!!
      </h1>
      <h3 className={classes.subheading}>
      Subscribe for the latest news and updates.
      </h3> 
      <div class='onesignal-customlink-container'></div>
    </Card>
  );
}
