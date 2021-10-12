import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Connect from "./Connect";
import Explore from "./Explore";
import Downloads from "./Downloads";
import UsefulLinks from "./Links";
import WebNotify from "./WebNotify";
import Assistance from "./Assistance";
import MemberLinks from "./MemberLinks";

const useStyles = makeStyles(theme => ({
    cardTitle: {
        fontSize: "18px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        paddingLeft: "5px",
        marginBottom: "5px",
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "20px"
        }
    },
    greeting: {
        fontSize: "32px",
        color: theme.palette.primary.dark,
        fontFamily: "Quicksand",
        fontWeight: "900",
        padding: "0px",
        marginTop: "0px",
        ["@media (min-width:1600px)"]: {
            fontSize: "38px"
        }
    },
    greeting2: {
        fontSize: "16px",
        color: theme.palette.primary.text,
        fontFamily: "Quicksand",
        fontWeight: "600",
        padding: "0px",
        marginTop: "0px",
        lineHeight: "0px",
        marginBottom: "50px",
        ["@media (min-width:1600px)"]: {
            fontSize: "18px"
        }
    }
}));

export default function LeftBar() {
    const classes = useStyles();
    var greeting = "";
    var dt = new Date();
    var hour = dt.getHours();
    if (hour >= 1 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 16) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    return (
        <div>
            <h1 className={classes.greeting}>{greeting}</h1>
            <p className={classes.greeting2}>Welcome to the T&P Cell</p>
            <h3 className={classes.cardTitle}>Connect</h3>
            <Connect />
            <h3 className={classes.cardTitle}>Explore</h3>
            <Assistance />
            <h3 className={classes.cardTitle}>Members</h3>
            <MemberLinks />
            <h3 className={classes.cardTitle}>Downloads</h3>
            <Downloads />
            <h3 className={classes.cardTitle}>Notifications</h3>
            <WebNotify />
            <h3 className={classes.cardTitle}>Useful Links</h3>
            <UsefulLinks />
        </div>
    );
}
