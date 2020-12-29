import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { head } from "lodash";
import CreatePost from "./CreatePost";
import ManagePost from './ManagePost';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500
    },
    heading:{
        padding:"20px 0px",
        letterSpacing:"0.6px",
        wordSpacing:"8px"
    },
    tabBody:{
        marginTop:"30px"
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const [heading, setHeading] = useState("CREATE POSTS");

    const renderTab = ()=>{
        if(heading == "CREATE POSTS"){
            return(
                <CreatePost className={classes.tabBody} />
            )
            
        }
        else if(heading == "MANAGE POSTS") {

            return(
                <ManagePost className={classes.tabBody} />
            )
        }
    }

    return (
        <Container className={classes.root} maxWidth="sm">
            <h2 className={classes.heading}>{heading}</h2>
            <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
            >
                <Button onClick={() => {setHeading("CREATE POSTS")}}>CREATE POSTS</Button>
                <Button onClick={() => {setHeading("MANAGE POSTS")}}>MANAGE POSTS</Button>
            </ButtonGroup>
            {renderTab()}
        </Container>
    );
}
