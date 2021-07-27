import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import whatsapp from "../../../../images/whatsapp.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "20px",
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
      backgroundColor: "#25D366",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ['@media (min-width:1600px)']: {
        height: "70px",
        width: "70px",
    },
  },
  image:{
      width: "30px",
      height: "30px",
      ['@media (min-width:1600px)']: {
        height: "40px",
        width: "40px",
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
    borderRadius: "8px",
    border: "2px solid #1687d9",
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
subheading2:{
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.main,
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
  },
},
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <div className={classes.imageBox}>
            <img src={whatsapp} className={classes.image}/>
        </div>
      </div>
      <h1 className={classes.heading}>
        Connect with the TPO
      </h1>
      <h3 className={classes.subheading}>
        via Whatsapp
      </h3>
      <a href="https://api.whatsapp.com/send?phone=919915794339" target="_blank" rel="noopener"
      style={{ textDecoration: 'none' }}>
      <div className={classes.button}>
        <Typography variant="h6" component="h2" className={classes.subheading2}>
          Send Message
        </Typography>
      </div> 
      </a>  
    </Card>
  );
}
