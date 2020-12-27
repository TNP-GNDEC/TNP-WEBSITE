import React from "react";
import Footer from "../../HomeComponent/SideComponents/Footer";
import Navbar from "./CoordinatorNav";
// import { makeStyles } from '@material-ui/core/styles';

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import Menu from "./Menu";
import avatar from "../../../../images/avatar11.jpeg";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import Logo from "../../../../images/logo.png";

import Sidebar from "./Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    z1: {
        // for navbar
        zIndex: "10"
    },
    z2: {
        // for drawer
        zIndex: "-10"
    }
}));

export default function Coordinator() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar className={classes.z1} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Footer className={classes.z2} />
            </main>
        </div>
    );
}

// <div>
{
    /* <CoordinatorNav className={classes.z2} /> */
}
{
    /* <Footer className={classes.z1} /> */
}

{
    /* </div> */
}
