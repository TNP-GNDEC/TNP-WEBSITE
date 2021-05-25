import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "./Menu";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../../../images/logo.png";
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    inlinea: {
        display: "flex",
        justifyContent: "space-between"
    },
    img: {
        width: "70px",
        height: "auto",
        padding: "10px",
        marginRight: "40px"
    },
    imgl: {
        width: "70px",
        height: "auto",
        padding: "10px",
        borderRadius: "50%"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    title:{
        ['@media (max-width:500px)']: {
            display: "none"
         }
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    avatar: {
        marginRight: "20px",
        borderRadius: "50%",
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={
                    (classes.inlinea,
                    clsx(classes.appBar, {
                        [classes.appBarShift]: props.isOpen
                    }))
                }
            >
                <div className={classes.inlinea}>
                    <Toolbar>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.handleOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: props.isOpen
                            })}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <div className={classes.avatar}>
                            <Link to ="/">
                                <img className={classes.imgl}  src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <Typography variant="h6" noWrap className={classes.title}>
                            Training and Placement Cell
                        </Typography>
                    </Toolbar>
                    <div className={classes.inlinea}>
                        <Menu />
                    </div>
                </div>
            </AppBar>

        </>
    );
}