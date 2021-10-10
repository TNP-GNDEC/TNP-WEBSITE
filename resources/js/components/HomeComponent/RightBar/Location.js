import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Location from "@material-ui/icons/LocationOn";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import Language from "@material-ui/icons/Language";
import Explore from "@material-ui/icons/Explore";

import map from "../../../../images/map.png";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 15px 30px #8a959e33"
    },
    header: {
        display: "flex"
    },
    icon: {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: "0px 5px 15px #193b6833",
        color: theme.palette.secondary.main,
        borderRadius: "5px",
        marginRight: "10px",
        height: "30px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Icon: {
        fontSize: "18px"
    },
    title: {
        color: theme.palette.primary.dark,
        fontSize: "22px"
    },
    imageBox: {
        width: "100%"
    },
    image: {
        width: "100%"
    },
    name: {
        marginLeft: "60px",
        textAlign: "left",
        color: theme.palette.secondary.contrastText
    },
    heading: {
        fontSize: "18px"
    },
    subheading: {
        fontSize: "14px",
        marginTop: "10px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.text,
        ["@media (min-width:1600px)"]: {
            fontSize: "19px",
            padding: "10px"
        }
    },
    box: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
        marginTop: "20px",
        width: "80%",
        height: "34px",
        background: theme.palette.secondary.accent,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        ["@media (min-width:1600px)"]: {
            height: "36px"
        }
    },
    box2: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "15px",
        width: "80%",
        height: "34px",
        background: theme.palette.secondary.accent,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        ["@media (min-width:1600px)"]: {
            height: "36px",
            marginBottom: "20px"
        }
    },
    icon2: {
        fontSize: "16px",
        color: theme.palette.primary.dark,
        marginLeft: "10px"
    },
    subheading2: {
        fontSize: "14px",
        marginLeft: "30px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        ["@media (min-width:1600px)"]: {
            fontSize: "16px"
        }
    },
    subheading3: {
        fontSize: "12px",
        paddingTop: "5px",
        marginLeft: "35px",
        color: theme.palette.secondary.contrastText
    },
    color: {
        color: theme.palette.primary.main
    }
}));

export default function Office() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.imageBox}>
                <a href="https://www.google.com/maps/place/Guru+Nanak+Dev+Engineering+College/@30.8614332,75.8520628,15.41z/data=!4m5!3m4!1s0x391a828f09011b15:0xbf3f5b51dcc81b12!8m2!3d30.8606954!4d75.8595665">
                    <img src={map} className={classes.image} />
                </a>
            </div>
            <h3 className={classes.subheading}>
                Guru Nanak Dev Engineering College, Gill Park Ludhiana (141006),
                Punjab, India
            </h3>
            <div className={classes.box}>
                <Phone className={classes.icon2} />
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.subheading2}
                >
                    0161-5064510
                </Typography>
            </div>
            <div className={classes.box2}>
                <Language className={classes.icon2} />
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.subheading2}
                >
                    www.gndec.ac.in
                </Typography>
            </div>
        </Card>
    );
}
