import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Posts from "../../HomeComponent/PostComponents/Posts";
import Create from "../../RedirectPages/Coordinator/CreatePost";
import Users from './Users';
import Uploadcsv from './Uploadcsv';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
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
    }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const [heading, setHeading] = useState("CREATE POSTS");

    // conditionally rendering the tabs create posts and manage posts
    const renderPostTab = () => {
        if (heading == "CREATE POSTS") {
            return <Create />;
        } else if (heading == "MANAGE POSTS") {
            return <Posts />;
        }
    };

    const renderContent = () => {
        if (props.activeId === 1) {
            return (
                <>
                    <h2>main landing </h2>
                </>
            );
        } else if (props.activeId === 2) {
            return (
                <>
                    <h2> Data Using Excel Here </h2>
                </>
            );
        }else if (props.activeId === 3) {
            return (
                <>
                    <h2> Companies </h2>
                </>
            );
        } else if (props.activeId === 4) {
            return (
                <>
                   <Users/>
                </>
            );
        } else if (props.activeId === 5) {
            return (
                <>
                    <h2 className={classes.heading}>{heading}</h2>
                    <ButtonGroup
                        size="large"
                        color="primary"
                        aria-label="large outlined primary button group"
                    >
                        <Button
                            onClick={() => {
                                setHeading("CREATE POSTS");
                            }}
                        >
                            CREATE POSTS
                        </Button>
                        <Button
                            onClick={() => {
                                setHeading("MANAGE POSTS");
                            }}
                        >
                            MANAGE POSTS
                        </Button>
                    </ButtonGroup>
                    {renderPostTab()}
                </>
            );
        }else if (props.activeId === 6) {
            return (
                <>
                    <h2> Notice Maker </h2>
                </>
            );
        }else if (props.activeId === 7) {
            return (
                <>
                    <Uploadcsv />
                </>
            );
        }
    };

    return (
        <Container className={classes.root} maxWidth="sm">
            {renderContent()}
        </Container>
    );
}
