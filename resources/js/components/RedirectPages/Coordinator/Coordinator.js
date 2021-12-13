import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./CoordinatorNav";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import RecentPosts from "./RecentPosts";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.primary.light,
        height: "auto",
        minHeight: "100vh"
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
    },

    ScreenContent: {
        position: "relative"
    },

    screen: {
        position: "absolute",
        top: "15px",
        right: "5px",
        backgroundColor: theme.palette.primary.light,
        border: "none"
    },

    icon: {
        width: "60px",
        border: "none"
    }
}));

export default function Coordinator() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeContentID, setId] = React.useState(1);
    const [Screen, setScreen] = useState(true);

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

    const handle = useFullScreenHandle();
    let image, handler;
    const ChangeHandler = () => {
        setScreen(!Screen);
    };

    if (Screen === true) {
        image = (
            <FullscreenIcon onClick={ChangeHandler} className={classes.icon} />
        );
        handler = handle.enter;
    } else {
        image = (
            <FullscreenExitIcon
                onClick={ChangeHandler}
                className={classes.icon}
            />
        );
        handler = handle.exit;
    }

    return (
        <FullScreen handle={handle}>
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
                    <div className={classes.ScreenContent}>
                        <button onClick={handler} className={classes.screen}>
                            {image}
                        </button>
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
        </FullScreen>
    );
}
