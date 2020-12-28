import React from "react";
import Footer from "../../HomeComponent/SideComponents/Footer";
import Navbar from "./CoordinatorNav";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


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
    foot: {
        position: "fixed",
        bottom: "3px",
        width: "100%",
        textAlign: "center",
    }
}));

export default function Coordinator() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.foot}>
                <Footer />
                </div>
            </main>
        </div>
    );
}


