import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "10px",
      marginTop: "30px",
      backgroundColor: theme.palette.secondary.light,
      boxShadow: "0px 5px 15px #0000001a",
    },
}));
  
  export default function FooterCard() {
    const classes = useStyles();
    var dt=new Date();
    var year = dt.getFullYear();
  
    return (
      <Card className={classes.root}>
        <p> Developed with ❤️ by <a className={classes.tag} href="#">Genconians </a> | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
      </Card>
    );
  }