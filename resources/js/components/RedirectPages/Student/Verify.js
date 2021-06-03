import React from 'react';
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import VerifyCom from "./VerifyCom.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.primary.light,
    height: "100%"
  },
  com:{
    marginBottom: "40%",
  },
}));

function VerifyForms() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Navbar />
            <VerifyCom className={classes.com} />
          <Footer />
       </div> 
    );
}

export default VerifyForms;

