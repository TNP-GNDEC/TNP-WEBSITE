import React from "react";
import Footer from "../../HomeComponent/SideComponents/Footer";
import Navbar from "./CoordinatorNav";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "./MainContent";
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        marginTop:"10px",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    
    mainContent:{
        marginTop:"20px",
        paddingTop:"200px"
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
    const [open, setOpen] = React.useState(false);

    //Sidebar Utility Functions for open and close
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar isOpen={open} handleOpen={handleDrawerOpen} />
            <Sidebar isOpen={open} handleClose={handleDrawerClose} />

            <main className={classes.content}>
                <div className={classes.toolbar} />               
                <MainContent style={{ marginTop:"200px",paddingTop:"200px"}} className={classes.mainContent} />
                <div className={classes.foot}>
                <Footer />
                </div>
            </main>
        </div>
    );
}


