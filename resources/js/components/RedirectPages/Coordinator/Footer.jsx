import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  foot: {
    width: "100%",
    height: "35px",
    position: "fixed",
    bottom: "0",
    background: "#038ed4",
    color: "#000000",
    textAlign: "center" ,
    paddingTop: "10px",
    marginLeft: "-80px",
    zIndex: "100"
  },
  tag:{
    textDecoration: "none",
    color : "#ffffff",
   '&:hover':{
      color:"#ffffff",
    },
    
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
 
  
  var dt=new Date();
 var year = dt.getFullYear();
  return (
    
      <div className={classes.foot}>
        <p> Developed with ❤️ by <a className={classes.tag} href="#">Genconians </a>  | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
      </div>
    
  );
}

