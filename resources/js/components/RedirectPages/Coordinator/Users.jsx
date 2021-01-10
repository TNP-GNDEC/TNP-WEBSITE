import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";


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

function Users() {

    const classes = useStyles();
    const [heading, setHeading] = React.useState("CREATE USERS");

    const renderPostTab = () => {
        if (heading == "CREATE POSTS") {
            return <> hello </>;
        } else if (heading == "MANAGE POSTS") {
            return <>hey</>;
        }
    };
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
                                setHeading("CREATE USERS");
                            }}
                        >
                            CREATE POSTS
                        </Button>
                        <Button
                            onClick={() => {
                                setHeading("MANAGE USERS");
                            }}
                        >
                            MANAGE POSTS
                        </Button>
                    </ButtonGroup>
                    {renderPostTab()}
    </>
    )
}

export default Users
