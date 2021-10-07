import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Alumni from "../../../../images/Alumni.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        paddingTop: "15px",
        marginBottom: "34px",
        textAlign: "center",
        borderRadius: "16px",
        boxShadow: "0px 15px 30px #8a959e33",
        ["@media (min-width:1600px)"]: {
            paddingTop: "20px"
        }
    },
    media: {
        textAlign: "center"
    },
    imageBox: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.accent,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ["@media (min-width:1600px)"]: {
            height: "70px",
            width: "70px"
        }
    },
    image: {
        height: "30px",
        ["@media (min-width:1600px)"]: {
            height: "40px"
        }
    },
    heading: {
        fontSize: "18px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        paddingTop: "5px",
        ["@media (min-width:1600px)"]: {
            fontSize: "20px",
            paddingTop: "12px"
        }
    },
    subheading: {
        fontSize: "13px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.text,
        ["@media (min-width:1600px)"]: {
            fontSize: "16px"
        }
    },
    read: {
        borderRadius: "5px",
        width: "100%",
        margin: "25px auto",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 0px 10px 0px"
    },
    readLink: {
        width: "75%",
        textDecoration: "none"
    },
    readButton: {
        backgroundColor: theme.palette.primary.main,
        padding: "10px 0px",
        width: "100%",
        fontSize: "16px",
        borderRadius: "16px",
        fontFamily: "Open Sans",
        fontWeight: "400",
        textTransform: "capitalize",
        boxShadow: "0px 10px 25px #1687d933",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        "&:focus": {
            outline: "none"
        },
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "18px"
        }
    }
}));

const Assistance = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.media}>
                <div className={classes.imageBox}>
                    <img src={Alumni} className={classes.image} />
                </div>
            </div>
            <h1 className={classes.heading}>Alumni Assistance</h1>
            <h3 className={classes.subheading}>in Placement/ Internship.</h3>
            <div className={classes.read}>
                <a
                    href="https://forms.gle/zgzK87DuoyVVSfSn7"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    className={classes.readLink}
                >
                    <Button
                        hover="false"
                        className={classes.readButton}
                    >
                        submit Details
                    </Button>
                </a>
            </div>
        </Card>
    );
};

export default Assistance;
