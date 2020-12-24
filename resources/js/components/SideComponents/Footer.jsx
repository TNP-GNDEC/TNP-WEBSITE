import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  foot: {
    
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    background: "#3490dc",
    color: "#ffffff",
    textAlign: "center" ,
    padding: "10px",
    height: "55px",
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
    
    <BottomNavigation color="primary">
    
      <div className={classes.foot}>
      <p> Developed with ❤️ by Genconians  | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
      </div>
    </BottomNavigation>
    
  );
}

