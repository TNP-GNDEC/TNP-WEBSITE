import React from "react";
import Footer from "../SideComponents/Footer";
import CoordinatorNav from "./CoordinatorNav";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    z1:{  // for navbar
        zIndex: "10",
      },
      z2:{ // for drawer
        zIndex: "-10",
      },
  }));

export default function Coordinator() {
    const classes = useStyles();
    return (
        <div>
            <CoordinatorNav className={classes.z2} />
            <Footer className={classes.z1} />
        </div>
    );
}