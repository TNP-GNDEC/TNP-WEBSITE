import React from 'react';
import {Link} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import About from '@material-ui/icons/Info';
import Login from '@material-ui/icons/ExitToApp';

import Logo from "../../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  customColor: {
    background: theme.palette.primary.main,
    width: "100%",
    position: "fixed",
    margin: "0px",
    top: "0"
  },
  grow: {
    flexGrow: 1,
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Open Sans",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  search: {
    position: 'relative',
    borderRadius: "50px",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 15px 25px #ffffff33",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: theme.palette.primary.main,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: '40%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main
  },
  inputRoot: {
    color: theme.palette.primary.main,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  box:{
    width: "100px",
    height: "35px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link:{
    color: theme.palette.secondary.main,
    fontFamily: "Open Sans",
    paddingTop: "8px",
    "&:hover":{
      textDecoration: "none",
      color: theme.palette.secondary.main,
    }
  },
}));



export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent color="secondary">
            <Link to="/about">About</Link>
          </Badge>
        </IconButton>
        
      </MenuItem>
      <MenuItem>
        <IconButton  color="inherit">
          <Badge color="secondary">
            <Link to="/login">Login</Link>
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      
      <AppBar position="static" className={classes.customColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to ="/">
              <div className={classes.imageLogo} >
                  <img src={Logo} className={classes.profilePic} />
              </div>
            </Link>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Training & Placement Cell
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Link to="/about"  style={{textDecoration: 'none', color: '#ffffff'}}>
                <div className={classes.box}>
                  <About />
                  <h5 className={classes.link}>About</h5>
                </div>
                </Link>
            </IconButton>
            <IconButton color="inherit">
              <Link to="/login" style={{textDecoration: 'none', color: '#ffffff'}}>
              <div className={classes.box}>
                <Login />
                <h5 className={classes.link}>Login</h5>
              </div>
              </Link>
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}



            {/* <ul className="nav justify-content-end navUl">
            <ul className="navbar-nav mr-auto"></ul>
                <li class="nav-item active">
                     <a class="nav-link" href="#" >About</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#" >Login</a>
                </li>
            </ul> */}
            

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
