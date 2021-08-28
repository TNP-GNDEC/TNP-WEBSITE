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
      padding: "15px 15px 0px 15px",
      marginTop: "34px",
      borderRadius: "16px",
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 10px 25px #1687d933",
    },
    para: {
      color: theme.palette.secondary.main,
      fontSize: "16px",
      ['@media (min-width:1600px)']: {
        fontSize: "20px"
    },
    },
    tag:{
      color: theme.palette.secondary.main,
      '&:hover':{
        color: theme.palette.secondary.main,
      },
    },
}));
  
  export default function FooterCard() {
    const classes = useStyles();
    var dt=new Date();
    var year = dt.getFullYear();
  
    return (
      <Card className={classes.root}>
        <p className={classes.para}> Developed with ❤️ by <a className={classes.tag} href="https://tnpgndec.com/genconians"><strong><u>Genconians</u></strong></a> | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"><strong><u>GNDEC,ldh</u></strong></a></p>
      </Card>
    );
  }