import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Connect from "./Connect";
import Explore from "./Explore";
import Downloads from "./Downloads";
import UsefulLinks from "./Links";

const useStyles = makeStyles((theme) => ({
    cardTitle:{
        fontSize: "18px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        marginBottom: "5px",
        ['@media (max-width:960px)']: {
          fontSize: "14px"
        }
    },
    greeting:{
        fontSize: "32px",
        color: theme.palette.primary.dark,
        fontFamily: "Quicksand",
        fontWeight: "900",
        padding: "0px",
        marginTop: "0px",
      },
      greeting2:{
        fontSize: "16px",
        color: theme.palette.primary.text,
        fontFamily: "Quicksand",
        fontWeight: "600",
        padding: "0px",
        marginTop: "0px",
        lineHeight: "0px",
        marginBottom: "50px",
      },
}));

export default function LeftBar(){
    const classes = useStyles();
    return(
        <div>
            <h1 className={classes.greeting}>Good Morning!</h1>
            <p className={classes.greeting2}>Welcome to the T&P Cell</p>
            <h3 className={classes.cardTitle}>Connect</h3>
            <Connect />
            <Explore />
            <Downloads />
            <UsefulLinks />
        </div>
    )
}