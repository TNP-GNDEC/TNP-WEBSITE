import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import TextFeild from"./TextFeild";
import CusButton from "./CusButton";

const useStyles = makeStyles(theme => ({
    input: {
        height: "50px",
        width: "100%",
        margin: "50px ",
        borderRadius: "20px",
        textAlign: "Center"
    },
}));

export default function StepTwo() {
    const classes = useStyles();

    return (
        <div>
        <Card className={classes.box}>
        <div className={classes.heading}>
            <b>
                <h1>Personal Details</h1>
            </b>
            <div>
                <form
                    className={classes.field}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <TextFeild
                            for="First Name" 
                            className={classes.input}
                            type="text"
                            id="fName"
                            name="fName"
                            placeholder="First Name"
                        />
                    </div>
                    <CusButton label="Send OTP"/>
                </form>
            </div>
        </div>
        </Card>
        </div>
    );
}