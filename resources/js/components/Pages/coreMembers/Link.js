import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ComputerIcon from "@material-ui/icons/Computer";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        paddingTop: "10px",
        marginBottom: "34px",
        borderRadius: "16px",
        boxShadow: "0px 15px 30px #8a959e33",
        ["@media (min-width:1600px)"]: {
            paddingTop: "10px"
        }
    },
    heading: {
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "16px",
        padding: "0 5px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        width: "100%",
        textAlign: 'center',
        ["@media (min-width:1600px)"]: {
            fontSize: "20px",
            paddingTop: "12px"
        }
    },
    linkContainer: {
        width: "90%",
        backgroundColor: "#d8dee7",
        borderRadius: "16px",
        marginTop: "7px",
        marginBottom: "15px",
        TextAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        height: "50%",
        display: "flex",
        alignItems: "center"
    },
    text: {
        color: "#303030"
    }
}));

export default function Links() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.linkContainer}>
                <h3 className={classes.heading}>
                    <a
                        href="/technicalMembers"
                        target="_blank"
                        className={classes.text}
                        style={{ textDecoration: "none" }}
                    >
                        <ComputerIcon
                            style={{
                                fontSize: 25,
                                marginRight: 5,
                                color: "#1687D9"
                            }}
                        />{" "}
                        Technical Members
                    </a>
                </h3>
            </div>

            <div className={classes.linkContainer}>
                <h3 className={classes.heading}>
                    <a
                        href="/executiveMembers"
                        target="_blank"
                        className={classes.text}
                        style={{ textDecoration: "none" }}
                    >
                        <PlaylistAddCheckIcon
                            style={{
                                fontSize: 25,
                                marginRight: 5,
                                color: "#1687D9"
                            }}
                        />{" "}
                        Executive Members
                    </a>
                </h3>
            </div>
        </Card>
    );
}
