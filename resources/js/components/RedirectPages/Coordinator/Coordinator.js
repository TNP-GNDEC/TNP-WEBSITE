import React from "react";
import Footer from "./Footer";
import Navbar from "./CoordinatorNav";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import RecentPosts from "./RecentPosts";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.primary.light,
        height: "auto",
        minHeight: "100vh",
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start"
        // paddingTop: "5px"
        // padding: theme.spacing(0, 1),
        // marginTop: "10px",
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        overflowX: "hidden"
    },

    mainContent: {
        // backgroundColor: "red"
    },

    foot: {
        position: "fixed",
        bottom: "3px",
        width: "100%",
        textAlign: "center"
    }
}));

export default function Coordinator() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeContentID, setId] = React.useState(1);

    //Sidebar Utility Functions for open and close
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changeActiveId = id => {
        setId(id);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar isOpen={open} changeMainContent={changeActiveId} />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {/* <Navbar
                    handleClose={handleDrawerClose}
                    isOpen={open}
                    handleOpen={handleDrawerOpen}
                /> */}
                <div>
                    <MainContent
                        handleClose={handleDrawerClose}
                        isOpen={open}
                        handleOpen={handleDrawerOpen}
                        activeId={activeContentID}
                        className={classes.mainContent}
                    />
                    {/* <div className={classes.foot}>
                    <Footer />
                </div> */}
                </div>
            </main>
            <RecentPosts />
        </div>
    );
}
