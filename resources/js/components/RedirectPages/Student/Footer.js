import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  foot: {
    width: "100%",
    background: theme.palette.secondary.main,
    color: "#000000",
    textAlign: "center" ,
    padding: "10px",
    height: "55px",
  },
  tag:{
    textDecoration: "none",
    color : theme.palette.primary.main,
   '&:hover':{
      color:"#ffffff",
    },
    
  },

}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
 
  
  var dt=new Date();
 var year = dt.getFullYear();
  return (
    
    <BottomNavigation color="primary">
    
      <div className={classes.foot}>
      <p> Developed with ❤️ by <a className={classes.tag} href="https://gndec.ac.in/">Genconians</a>  | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
      </div>
    </BottomNavigation>
    
  );
}
