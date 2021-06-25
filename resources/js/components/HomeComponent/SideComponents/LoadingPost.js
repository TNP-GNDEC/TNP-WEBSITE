import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';


const useStyles = makeStyles((theme) =>({
  card:{
      width: "100%",
      padding: "30px",
      background: "#ffffff",
      boxShadow: "0px 15px 25px #00000033"
  },
  header:{
      display: "flex",
      alignItems: "center"
  },
  image:{
      width: "50px",
      height: "50px",
      background: "#656871",
  },
  details:{
      marginLeft: "20px",
  },
  name:{
      background: "#656871",
      display: "block",
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "24px",
  },
  about:{
    background: "#656871",
    display: "block",
    position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "12px",
      marginTop: "10px",
},
description:{
    margin: "25px 0",
},
line:{
    background: "#656871",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "14px",
    margin: "10px 0",
},
line2:{
    background: "#656871",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "35px",
    margin: "10px 0",
},
footer:{
    display: "flex",
},
btn1:{
    background: "#656871",
    position: "relative",
    overflow: "hidden",
    width: "200px",
    height: "35px",
    marginLeft: "0px",
},
btn2:{
    background: "#656871",
    position: "relative",
    overflow: "hidden",
    width: "200px",
    height: "35px",
    marginLeft: "150px"
},

}));

export default function LoadingPost() {
  const classes = useStyles();
  return (
    
      <div className={classes.card}>
        <div className={classes.header}>
            <Skeleton variant="circle" className={classes.image}></Skeleton>
            <div className={classes.details}>
                <Skeleton className={classes.name}></Skeleton>
                <Skeleton className={classes.about}></Skeleton>
            </div>
        </div>
        <hr />
        <div className={classes.description}>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line}></Skeleton>
                <Skeleton className={classes.line2}></Skeleton>
        </div>
        <hr />
        <div className={classes.footer}>
                <Skeleton className={classes.btn1}></Skeleton>
                <Skeleton className={classes.btn2}></Skeleton>
        </div>
      </div>
    
  );
}