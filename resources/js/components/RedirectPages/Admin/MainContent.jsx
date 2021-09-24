import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        padding: "20px 0px",
        letterSpacing: "0.6px",
        wordSpacing: "8px",
        color: theme.palette.primary.dark
    },
    tabBody: {
        marginTop: "40px"
    },
    BG: {
        paddingBottom: "15px",
        paddingTop: "15px",
    },
   notices:{
       color:"#038ed4",
       borderradius: "5px"
       
   },
   head:{
       fontFamily: "Nunito",
       fontWeight: "400",
       color:"#038ed4",
   }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();

    const renderContent = () => {
        if (props.activeId === 1) {
            return (
                <>
                    <h1 className={classes.head}>Home</h1>
                </>
            );
        } else if (props.activeId === 2) {
            return (
                <>
                    <h1 className={classes.head}>Home2</h1>
                </>
            );
        }else if (props.activeId === 3) {
            return (
                <>
                    <h1 className={classes.head}>Home</h1>
                </>
            );
        } else if (props.activeId === 4) {
            return (
                <>
                   <h1 className={classes.head}>Home</h1>
                </>
            );
        } else if (props.activeId === 5) {
            return (
                <>
                    <h1 className={classes.head}>Home</h1>
                </>
            );
        }else if (props.activeId === 6) {
            return (
                <>
                <h1 className={classes.head}>Home</h1>

                </>
            );
        }else if (props.activeId === 7) {
            return (
                <>
                   <h1 className={classes.head}>Home</h1>
                </>
            );
        }
    };

    return (
        <Container className={classes.root} maxWidth="xl">
            {renderContent()}
        </Container>
    );
}
