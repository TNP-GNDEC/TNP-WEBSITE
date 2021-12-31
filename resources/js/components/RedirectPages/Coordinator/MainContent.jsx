import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Posts from "../../HomeComponent/PostComponents/Posts";
import Create from "../../RedirectPages/Coordinator/CreatePost";
import Users from "./Users";
import Uploadcsv from "./Uploadcsv";
import Filter from "./Filter";
import Notice from "./NoticeMaker";
import Card from "@material-ui/core/Card";
import { Clear as ClearIcon, Menu as MenuIcon } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Postmaker from "./Postmaker";
import PlacementRecord from "./PlacementRecord";
import Dashboard from "./Dashboard/Dashboard";
import RegisterUser from "./RegisterUser";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        paddingTop: "5px",
        letterSpacing: "0.6px",
        // wordSpacing: "8px",
        color: theme.palette.primary.dark
    },
    tabBody: {
        marginTop: "40px"
    },
    BG: {
        paddingBottom: "15px",
        paddingTop: "15px"
    },
    notices: {
        color: "#038ed4",
        borderRadius: "5px"
    },
    head: {
        marginBottom: "0px",
        paddingTop: "0px",
        // paddingTop: "15px",
        // paddingBottom: "15px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        fontSize: "22px"
    },
    menuButton: {
        // marginLeft: "10px"
        fontSize: "100px"
    },
    close: {
        color: "#1687D9",
        fontSize: "30px",
        paddingTop: "2px"
    },
    open: {
        color: "#1687D9",
        fontSize: "30px",
        paddingTop: "2px"
    }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();

    const renderContent = () => {
        if (props.activeId === 1) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Dashboard</h1>
                    </div>
                    <Dashboard />
                </>
            );
        } else if (props.activeId === 2) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Filter</h1>
                    </div>
                    <Filter />
                </>
            );
        } else if (props.activeId === 3) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Placement Records</h1>
                    </div>
                    <PlacementRecord />
                </>
            );
        } else if (props.activeId === 4) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Users</h1>
                    </div>
                    <Users />
                </>
            );
        } else if (props.activeId === 5) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Posts</h1>
                    </div>
                    <Postmaker />
                </>
            );
        } else if (props.activeId === 6) {
            return (
                <>
                    <Card className={classes.notices}>
                        <h1>Notice Maker</h1>
                        <Notice />
                    </Card>
                </>
            );
        } else if (props.activeId === 7) {
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon className={classes.close} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon className={classes.open} />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Upload CSV</h1>
                    </div>
                    <Uploadcsv />
                </>
            );
        }else if(props.activeId === 8){
            return (
                <>
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            {props.isOpen ? (
                                <IconButton onClick={props.handleClose}>
                                    <ClearIcon
                                        className={classes.close}
                                    />
                                </IconButton>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: props.isOpen
                                    })}
                                >
                                    <MenuIcon
                                        className={classes.open}
                                    />
                                </IconButton>
                            )}
                        </div>
                        <h1 className={classes.head}>Register User</h1>
                    </div>
                    <RegisterUser/>
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
