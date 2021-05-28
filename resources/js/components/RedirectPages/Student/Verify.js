import React from 'react';
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import VerifyCom from "./VerifyCom.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.primary.light
  }
}));

function VerifyForms() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Navbar />
            <VerifyCom/>
          <Footer />
       </div> 
    );
}

export default VerifyForms;

