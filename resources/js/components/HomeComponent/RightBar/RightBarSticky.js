import React from "react";
import Location from "./Location";
import FooterCard from "./FooterCard";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardTitle:{
        fontSize: "18px",
        paddingLeft: "5px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        marginBottom: "5px",
        ['@media (max-width:960px)']: {
          fontSize: "14px"
        },
        ['@media (min-width:1600px)']: {
            fontSize: "20px"
        },
    },
}));

export default function RightBar(){
    const classes = useStyles();
    return(
        <div>
            <h3 className={classes.cardTitle}>Location</h3>
            <Location />
            <FooterCard />
        </div>
    )
}