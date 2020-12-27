import React from 'react';
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Terms from "./Terms&Conditons.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.primary.light
  }
}));

function Student() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Navbar />
            <Terms />
          <Footer />
       </div> 
    );
}

export default Student;

