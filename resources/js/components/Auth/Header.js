import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Back from '@material-ui/icons/KeyboardBackspace';
import About from '@material-ui/icons/Info';

import logo from "../../../images/logo.png";

const useStyle = makeStyles((theme) => ({
    navbar:{
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#038ed4"
    },
    titleBox:{
        width: "400px",
        padding: "10px 0 0 10px",
        ['@media (max-width:715px)']: {
            display: "none",
        },
    },
    brand:{
      margin: "10px 0 10px 40px",
      display: "flex",
  },
  title:{
      fontSize: "20px",
      color: theme.palette.secondary.main,
  },
  navItems:{
      width: "220px",
      margin: "0px 40px 0px 0px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
  },
  back:{
      paddingRight: "20px",
      width: "100px",
      display: "flex",
      justifyContent: "space-evenly",
      color: "#ffffff"
  },
  
  login: {
      background: theme.palette.primary.main,
      borderRadius: "5px",
      width: "100px",
      height: "40px",
      boxShadow: "0px 15px 25px #038ed41a",
      color: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  subheading: {
      fontSize: "16px",
      color: theme.palette.secondary.main,
  },
  subheading2: {
      fontSize: "16px",
      color: theme.palette.secondary.main,
  },
  subheading3: {
      fontSize: "25px",
      color: theme.palette.secondary.contrastText,
  },
  icon:{
      paddingBottom: "2px",
      color: theme.palette.secondary.main
  },
  image:{
    borderRadius:"50%"
  },
}));



export default function header(){
    const classes = useStyle();
    return(
        <div className={classes.navbar}>
            <div className={classes.brand}>
                <div>
                    <Link to ="/">
                        <img src={logo} width="50px" height="50px" className={classes.image}/>
                    </Link>
                </div>
                <div className={classes.titleBox}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Training and Placement Cell
                    </Typography>
                </div>
            </div>
            <div className={classes.navItems}>
                <Link to="/">
                <div className={classes.back}>
                    <Back className={classes.icon}/>
                    <Typography variant="h5" component="h2" className={classes.subheading2}>
                        Back
                    </Typography>
                </div>
                </Link>
            </div>
        </div>
    )
}