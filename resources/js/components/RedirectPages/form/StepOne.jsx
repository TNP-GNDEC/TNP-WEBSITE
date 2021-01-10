import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CusButton from "./CusButton";

const useStyles = makeStyles(theme => ({
    heading: {
        margin: "60px",
        color: "#038ed4"
    },
    input: {
        height: "50px",
        width: "100%",
        margin: "50px ",
        borderRadius: "20px",
        textAlign: "Center"
    },
    field: {
        height: "200px",
        background: "#DADADA"
    },
    otp: {
        padding: "8px 70px 8px 70px",
        margin: "0 auto"
    },
    box: {
        margin: "0 auto",
        width: "50%",
        alignContent: "center",
        background: "#DADADA	",
        color: "BLUE ",
        textAlign: "center",
        borderRadius: "20px",

        ":hover": {
            backgroundColor: "primary.main",

            margin: "0px"
        }
    },
    root: {
        width: "100%"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        padding: "16px 0 0"
    },
    button: {
        // marginRight: theme.spacing(1)
        margin: "0 auto"
    },
    spacer: {
        flex: "1 1 auto"
    },
    completed: {
        display: "inline-block"
    },
    instructions: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    outter: {
        background: "#F0F0F0",
        margin: "0px 0px px 0px"
    }
}));
export default function StepOne() {
    const classes = useStyles();
    return (
        <Card className={classes.box}>
            <div className={classes.heading}>
                <b>
                    <h1>Email verification</h1>
                </b>
                <b>
                    <p>
                        Kindly enter your personal email id instead your college
                        mail id
                    </p>
                </b>
                <div>
                    <form
                        className={classes.field}
                        noValidate
                        autoComplete="off"
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection:"column"
                            }}
                        >
                            <label for="email"></label>
                            <input
                                className={classes.input}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <CusButton label="Send OTP" />
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
}
