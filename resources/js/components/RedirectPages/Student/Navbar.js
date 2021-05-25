import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/KeyboardBackspace';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../../../../images/logo.png";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  imageLogo: {
    width: "50px",
    height: "50px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%"
  },
  profilePic: {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  } ,
  back: {
    '&:hover':{
      color:"#ffffff",
    },
  }
}));

export default function ButtonAppBar() {

  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('useruuid');
    window.location.href = window.origin+ "/login";
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <div className={classes.imageLogo} >
            <Link to ="/">
                <img src={Logo} className={classes.profilePic} />
                </Link>
            </div>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Training & Placement Cell
          </Typography>
          <Back />
          <Button a href="./" className={classes.back} color="inherit">Back</Button>
          < ExitToAppIcon />
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
