import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    inlinea: {
        margin: "0px",
        padding: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    menuButton: {
        marginLeft: 10
    },
    menuButton2: {
        display: "none",
    },
    hide: {
        display: "none",
    },
    hide2: {
        display: "block",
        marginLeft: 10
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <div
                className={
                    classes.inlinea
                }
            >
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleOpen}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: props.isOpen
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="close drawer"
                        onClick={props.handleClose}
                        className={clsx(classes.menuButton2, {
                            [classes.hide2]: props.isOpen
                        })}
                    >
                        <ClearIcon />
                    </IconButton>
                </div>
            </div>

        </>
    );
}
