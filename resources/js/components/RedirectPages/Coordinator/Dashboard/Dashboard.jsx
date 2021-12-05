import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import adminIntro from "../../../../../images/adminIntro.png";
import PostChart from "./PostChart";

const useStyles = makeStyles(theme => ({
    image:{
        width: "100%"
    },
    postHead:{
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        marginTop: "5%",
    },
    postDiv:{
        width: "100%",
        padding: "20px",
        borderRadius: "16px",
        background: theme.palette.secondary.main
    },
    postPara:{
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontWeight: "400",
      color: theme.palette.primary.text,
    },
    postNum:{
      fontFamily: "Open Sans",
      fontSize: "40px",
      fontWeight: "600",
      lineHeight: "5px",
      color: theme.palette.primary.dark,
    },
}));

export default function Coordinator() {
    const classes = useStyles();
    
    return(
        <div>
            <img src={adminIntro} className={classes.image} />
            <h2 className={classes.postHead}>Posts Overview</h2>
            <div className={classes.postDiv}>
              {/* <p className={classes.postPara}>Total Posts</p>
              <h1 className={classes.postNum}>1520</h1> */}
              <PostChart />
            </div>
        </div>
    )
}