import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Office from "../../HomeComponent/RightBar/Office";
import Faculty from "../../HomeComponent/RightBar/Faculty";

const useStyles = makeStyles(theme => ({
    cardTitle: {
        fontSize: "18px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        paddingLeft: "5px",
        marginBottom: "5px",
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "20px"
        }
    },

}));

export default function RightBar() {
    const classes = useStyles();
    return (
        <div className={classes.level}>
            <h3 className={classes.cardTitle}>T&P Office</h3>
            <Office />
            <h3 className={classes.cardTitle}>Faculty</h3>
            <Faculty />
        </div>
    );
}
