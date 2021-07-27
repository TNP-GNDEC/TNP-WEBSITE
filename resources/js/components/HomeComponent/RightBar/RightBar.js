import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Office from "./Office";
import Faculty from "./Faculty";
import Academic from "./Academic";
import Student from "./Student";

const useStyles = makeStyles((theme) => ({
    cardTitle:{
        fontSize: "18px",
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
    level:{
        marginTop: "98px",
        ['@media (min-width:1600px)']: {
            marginTop: "104px"
        },
    },
}));

export default function RightBar(){
    const classes = useStyles();
    return(
        <div className={classes.level}>
            <h3 className={classes.cardTitle}>T&P Office</h3>
            <Office />
            <h3 className={classes.cardTitle}>Faculty</h3>
            <Faculty />
            <h3 className={classes.cardTitle}>Academic Queries</h3>
            <Academic />
            <h3 className={classes.cardTitle}>Student</h3>
            <Student />
        </div>
    )
}