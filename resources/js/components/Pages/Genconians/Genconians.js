import React from 'react';
import Navbar from '../../Auth/Header';
import Footer from "../../RedirectPages/Student/Footer";
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
    title: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px"
    },
}));

export default function Genconians(){
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div>
                <div className={classes.title}><h1>Team</h1></div>
                <TabPanel />
            </div>
            <Footer />
        </div>
    )
}