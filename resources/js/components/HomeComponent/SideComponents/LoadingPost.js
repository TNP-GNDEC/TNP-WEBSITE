import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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
      borderRadius: "50%",
      position: "relative",
      overflow: "hidden",
      '&::before':{
          position: "absolute",
          height: "100%",
          width: "100%",
          content: "",
          backgroundImage: "linear-gradient(to-right,#656871 0%,#888b94 20%,#656871 40%,#656871 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "650px 600px",
          animation: "shimmer 1s linear infinite",
      }
  },
  details:{
      marginLeft: "20px",
  },
  name:{
      background: "#656871",
      display: "block",
      position: "relative",
      overflow: "hidden",
      width: "500px",
      height: "24px",
      '&::before':{
        position: "absolute",
        height: "100%",
        width: "100%",
        content: "",
        backgroundImage: "linear-gradient(to-right,#656871 0%,#888b94 20%,#656871 40%,#656871 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "450px 400px",
        animation: "shimmer 1s linear infinite",
    }
  },
  about:{
    background: "#656871",
    display: "block",
    position: "relative",
      overflow: "hidden",
      width: "500px",
      height: "12px",
      marginTop: "10px",
      '&::before':{
        position: "absolute",
        height: "100%",
        width: "100%",
        content: "",
        backgroundImage: "linear-gradient(to-right,#656871 0%,#888b94 20%,#656871 40%,#656871 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "450px 400px",
        animation: "shimmer 1s linear infinite",
    }
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
    '&::before':{
        position: "absolute",
        height: "100%",
        width: "100%",
        content: "",
        backgroundImage: "linear-gradient(to-right,#656871 0%,#888b94 20%,#656871 40%,#656871 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "450px 400px",
        animation: "shimmer 1s linear infinite",
    }
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
    '&::before':{
        position: "absolute",
        height: "100%",
        width: "100%",
        content: "",
        backgroundImage: "linear-gradient(to-right,#656871 0%,#888b94 20%,#656871 40%,#656871 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "450px 400px",
        animation: "shimmer 1s linear infinite",
    }
},
btn2:{
    background: "#656871",
    position: "relative",
    overflow: "hidden",
    width: "200px",
    height: "35px",
    marginLeft: "150px",
},
"@global": {
    "@keyframes shimmer":{
        "0%":{
            backgroundPosition: "-450px 0",
        },
        "100%":{
            backgroundPosition: "450px 0",
        }
    }
},

}));

export default function LoadingPost() {
  const classes = useStyles();
  return (
    
      <div className={classes.card}>
        <div className={classes.header}>
            <div className={classes.image}></div>
            <div className={classes.details}>
                <span className={classes.name}></span>
                <span className={classes.about}></span>
            </div>
        </div>
        <hr />
        <div className={classes.description}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line2}></div>
        </div>
        <hr />
        <div className={classes.footer}>
                <div className={classes.btn1}></div>
                <div className={classes.btn2}></div>
        </div>
      </div>
    
  );
}