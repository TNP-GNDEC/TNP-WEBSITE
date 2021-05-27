import React from 'react';
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Verify from "./Terms&Conditons.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.primary.light
  }
}));

function Verify() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Navbar />
            <h1>This is verification page</h1>
          <Footer />
       </div> 
    );
}

export default Verify;

