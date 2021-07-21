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
}));

export default function LeftBar(){
    const classes = useStyles();
    return(
        <div>
            <h3 className={classes.cardTitle}>Connect</h3>
            <Connect />
            <Explore />
            <Downloads />
            <UsefulLinks />
        </div>
    )
}