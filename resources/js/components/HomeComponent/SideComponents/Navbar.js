import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography"; 
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import About from "@material-ui/icons/Info";
import Login from "@material-ui/icons/ExitToApp";
import "react-spring-bottom-sheet/dist/style.css";
import Logo from "../../../../images/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    customColor: {  
        background: theme.palette.primary.main,
        width: "100%",
        position: "fixed",
        margin: "0px",
        top: "0"
    },
    backColor: {
        background: theme.palette.primary.main,
        width: "100%",
        position: "fixed",
        margin: "0px",
        top: "0",
        zIndex: 2
    },
    grow: {
        flexGrow: 1,
        boxShadow: "none"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        fontFamily: "Open Sans",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        },
         
    },
    imageLogo: {
        width: "50px",
        height: "50px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        ["@media (min-width:1600px)"]: {
            height: "70px",
            width: "70px"
        }
    },
    profilePic: {
        display: "inline",
        margin: "0 auto",
        height: "100%",
        width: "auto"
    },
    search: {
        position: "relative",
        borderRadius: "50px",
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "0px 15px 25px #ffffff33",
        marginRight: theme.spacing(2),
        marginLeft: 0,
        color: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(10),
            width: "40%"
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.primary.main
    },
    inputRoot: {
        color: theme.palette.primary.main
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    box: {
        width: "100px",
        height: "35px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    link: {
        color: theme.palette.secondary.main,
        fontFamily: "Open Sans",
        paddingTop: "8px",
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main
        },
    },
    nav_links: {
        color: "#303030",
        "&:hover": {
            textDecoration: "none",
            color: "#303030"
        },
        width: "100%",
        paddingLeft: "30px",
        fontSize: "18px",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontWeight: "500",
    },
    slider: {
        backgroundColor: "#e9f3fd",
        height: "100%"
    }
    
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    let body;
    if (isMobileMenuOpen) {
        body = classes.backColor;
    } else {
        body = classes.grow;
    }

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    const list = (anchor) => (
        <div
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className={classes.slider}
        >
          <MenuItem>
                <Link to="/login" className={classes.nav_links}>
                    Login
                </Link>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Link to="/about" className={classes.nav_links}>
                    About
                </Link>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Link to="/technicalMembers" className={classes.nav_links}>
                    Genconians
                </Link>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Link to="/contactDetails" className={classes.nav_links}>
                    Contact Details
                </Link>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Link to="/more" className={classes.nav_links}>
                    More
                </Link>
            </MenuItem>
        </div>
      );
    

    return (
        <div className={body}>
            <AppBar className={classes.customColor}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <Link to="/">
                            <div className={classes.imageLogo}>
                                <img
                                    src={Logo}
                                    className={classes.profilePic}
                                />
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
                            <Link
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    color: "#ffffff"
                                }}
                            >
                                <div className={classes.box}>
                                    <About />
                                    <h5 className={classes.link}>About</h5>
                                </div>
                            </Link>
                        </IconButton>
                        <IconButton color="inherit">
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "#ffffff"
                                }}
                            >
                                <div className={classes.box}>
                                    <Login />
                                    <h5 className={classes.link}>Login</h5>
                                </div>
                            </Link>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                    <Button onClick={toggleDrawer('right', true)}><MenuIcon style={{color: 'white'}}/></Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
            
            {renderMenu} 
        </div>
    );
}
