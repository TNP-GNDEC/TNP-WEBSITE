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
        paddingLeft: "5px",
        marginBottom: "5px",
        ['@media (max-width:960px)']: {
          fontSize: "14px"
        },
        ['@media (min-width:1600px)']: {
            fontSize: "20px"
        },
    },
    date:{
        fontSize: "30px",
        color: theme.palette.primary.dark,
        fontFamily: "Quicksand",
        fontWeight: "900",
        textAlign: "right",
        padding: "0px 10px 0px 0px",
        marginTop: "0px",
        ['@media (min-width:1600px)']: {
            fontSize: "38px"
        },
      },
      date2:{
        fontSize: "18px",
        color: theme.palette.primary.text,
        fontFamily: "Quicksand",
        textAlign: "right",
        fontWeight: "600",
        padding: "0px 10px 0px 0px",
        marginTop: "0px",
        lineHeight: "0px",
        marginBottom: "55px",
        ['@media (min-width:1600px)']: {
            fontSize: "18px"
        },
      },
}));

export default function RightBar(){
    const classes = useStyles();
    var day = "Sunday";
    const dt = new Date();

    const days = dt.getDay();
    if(days === 0){
        day = "Sunday";
    }else if(days === 1){
        day = "Monday";
    }else if(days === 2){
        day = "Tuesday";
    }else if(days === 3){
        day = "Wednesday";
    }else if(days === 4){
        day = "Thursday";
    }else if(days === 5){
        day = "Friday";
    }else if(days === 6){
        day = "Saturday";
    } 
    const date = dt.getDate();
    const month = new Date().toLocaleString('en-us', {month: 'long'});
    const year = dt.getFullYear();
    const today = month + " " + date + ", " + year;
    return(
        <div className={classes.level}>
            <h1 className={classes.date}>{day}</h1>
            <p className={classes.date2}>{today}</p>
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