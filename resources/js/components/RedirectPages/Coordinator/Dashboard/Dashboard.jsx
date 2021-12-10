import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import adminIntro from "../../../../../images/adminIntro.png";
import PostChart from "./PostChart";
import PlacementChart from "./PlacementChart";
import Axios from "axios";

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
        background: theme.palette.secondary.main,
        marginBottom: "20px",
    },
    postPara:{
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontWeight: "400",
      color: theme.palette.primary.text,
    },
    postExt:{
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "500",
        color: "green",
        paddingTop: "15px",
      },
    postZero:{
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "500",
        color: theme.palette.primary.text,
        paddingTop: "15px",
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
    const [count, setCount] = useState('1520');
    const [monthly, setMonthly] = useState('0');
    const fetchPostData = async() => {
        Axios.get(`/postCounts`).then((res) => {
            if(res.data.status === 200){
                setCount(res.data.count);
                setMonthly(res.data.monthly);
            }
            }).catch((error) => {
            console.log(error);
            });
    }

    useEffect(() => { 
        fetchPostData(); 
      }, []);
    return(
        <div>
            <img src={adminIntro} className={classes.image} />
            <h2 className={classes.postHead}>Posts Overview</h2>
            <div className={classes.postDiv}>
              <p className={classes.postPara}>Total Posts</p>
              <h1 className={classes.postNum}>{count}</h1>
              <h4 className={monthly === "0" ? classes.postZero : classes.postExt}>This month: +{monthly}</h4>
              <PostChart />
            </div>
            <h2 className={classes.postHead}>Placement Overview</h2>
            <div className={classes.postDiv}>
                <PlacementChart />
            </div>
        </div>
    )
}