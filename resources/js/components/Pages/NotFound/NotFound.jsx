import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Navbar from '../../HomeComponent/SideComponents/Navbar';
import Error from '../../../../images/error.png';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '45%',
        height: '45%',
        marginTop: '80px'
    },
    heading: {
        marginTop: '30px',
        fontSize: '3rem',
        fontWeight: '600',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '25px',
        textAlign: 'center'
    },
    homeButton: {
        backgroundColor: theme.palette.primary.main,
        padding: "10px 0px",
        width: "250px",
        fontSize: "16px",
        borderRadius: "16px",
        fontFamily: "Open Sans",
        fontWeight: "400",
        textTransform: "capitalize",
        boxShadow: "0px 10px 25px #1687d933",
        marginTop: '30px',
        color: theme.palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        "&:focus": {
            outline: "none"
        },
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "18px"
        }
    }
}))

export default function NotFound(){
    const classes = useStyles();
    return(
        <>
            <Navbar />
            <div className={classes.container}>
                <img className={classes.image} src={Error} />
                <h1 className={classes.heading}>OOPS! PAGE NOT FOUND</h1>
                <p className={classes.subtitle}>The page you’re looking for cannot be found!</p>
                <NavLink to='/'>
                    <Button hover="false" className={classes.homeButton}>Back To Home</Button>
                </NavLink>
            </div>
        </>
    );
}