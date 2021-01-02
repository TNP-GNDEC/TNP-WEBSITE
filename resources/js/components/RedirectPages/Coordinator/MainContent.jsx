import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Container } from '@material-ui/core';
import Posts from '../../HomeComponent/PostComponents/Posts'
import Create from '../../HardCoded/Create/CreatePosts';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%"
    },
    heading:{
        padding:"20px 0px",
        letterSpacing:"0.6px",
        wordSpacing:"8px",
        color: theme.palette.primary.dark
    },
    tabBody:{
        marginTop:"40px"
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const [heading, setHeading] = useState("CREATE POSTS");

    // conditionally rendering the tabs create posts and manage posts
    const renderTab = ()=>{
        if(heading == "CREATE POSTS"){
            return(
                < Create />
            )
            
        }
        else if(heading == "MANAGE POSTS") {

            return(
                <Posts />
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
