import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Navbar from '../../HomeComponent/SideComponents/Navbar';
import Error from '../../../../images/error.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#E9F3FD',
        height: '100vh'
    },
    image: {
        width: '600px',
        marginTop: '40px',
        ['@media (max-width:960px)']: {
            width: "450px",
            marginTop: "100px",
        },
        ['@media (max-width:600px)']: {
            width: "340px",
            
        },
    },
    heading: {
        marginTop: "10px",
        fontSize: '32px',
        fontFamily: "Open Sans",
        fontWeight: '700',
        textAlign: 'center',
        color: theme.palette.primary.dark,
        ['@media (max-width:960px)']: {
            fontSize:"24px",
            marginTop: "40px",
        },
    },
    subtitle: {
        fontSize: '18px',
        textAlign: 'center',
        fontFamily: "Open Sans",
        fontWeight: '400',
        color: theme.palette.primary.text,
        ['@media (max-width:960px)']: {
            fontSize: "14px",
        },
    },
    homeButton: {
        backgroundColor: theme.palette.primary.main,
        padding: "10px 0px",
        width: "250px",
        fontSize: "16px",
        borderRadius: "16px",
        fontFamily: "Open Sans",
        fontWeight: "400",
        textDecoration: "none",
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
            fontSize: "14px",
            marginTop: "50px"
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
                <Typography className={classes.heading} variant="h1">OOPS! PAGE NOT FOUND</Typography>
                <Typography className={classes.subtitle}>The page you’re looking for cannot be found!</Typography>
                <NavLink to='/'>
                    <Button hover="false" className={classes.homeButton}>Back To Home</Button>
                </NavLink>
            </div>
        </>
    );
}