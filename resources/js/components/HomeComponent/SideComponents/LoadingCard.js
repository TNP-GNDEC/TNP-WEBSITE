import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';

const useStyles = makeStyles((theme) =>({
  card:{
      width: "100%",
      padding: "30px",
      background: "#ffffff",
      boxShadow: "0px 15px 25px #00000033",
      marginBottom: "20px"
  },
  header:{
      display: "flex",
      alignItems: "center"
  },
  image:{
      width: "40px",
      height: "40px",
      background: "#656871",
      position: "relative",
      overflow: "hidden",
  },
  details:{
      marginLeft: "20px",
  },
  name:{
      background: "#656871",
      display: "block",
      position: "relative",
      overflow: "hidden",
      width: "120px",
      height: "24px",
      
  },
  about:{
    background: "#656871",
    display: "block",
    position: "relative",
      overflow: "hidden",
      width: "500px",
      height: "12px",
      marginTop: "10px",
      
},
description:{
    margin: "5px 0",
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
    marginLeft: "150px",
},

}));

export default function LoadingCard() {
  const classes = useStyles();
  return (
    
      <div className={classes.card}>
        <div className={classes.header}>
            <Skeleton className={classes.image}></Skeleton>
            <div className={classes.details}>
                <Skeleton className={classes.name}></Skeleton>
            </div>
        </div>
        <hr />
        <div className={classes.description}>
                <Skeleton className={classes.line}></Skeleton>
                <hr />
                <Skeleton className={classes.line}></Skeleton>
                <hr />
                <Skeleton className={classes.line}></Skeleton>
                <hr />
                <Skeleton className={classes.line}></Skeleton>
        </div>
      </div>
    
  );
}