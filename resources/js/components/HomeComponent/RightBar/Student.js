import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Business from "@material-ui/icons/Business";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";

import studentCordinator from "../../../../images/abhijot.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "24px",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ["@media (min-width:1600px)"]: {
      paddingTop: "20px"
    }
  },
  media: {
    textAlign: "center"
  },
  icon: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    borderRadius: "5px",
    boxShadow: "0px 5px 15px #193b6833",
    marginRight: "10px",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    fontSize: "18px"
  },
  imageBox: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px solid #1687d9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ["@media (min-width:1600px)"]: {
      height: "140px",
      width: "140px"
    }
  },
  image: {
    width: "106px",
    height: "106px",
    borderRadius: "50%",
    boxShadow: "0px 10px 20px #1687d933",
    ["@media (min-width:1600px)"]: {
      height: "126px",
      width: "126px"
    }
  },
  heading: {
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "12px",
    ["@media (min-width:1600px)"]: {
      fontSize: "20px"
    }
  },
  subheading: {
    fontSize: "13px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.text,
    ["@media (min-width:1600px)"]: {
      fontSize: "16px"
    }
  },
  box: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "20px",
    width: "80%",
    height: "34px",
    background: theme.palette.secondary.accent,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ["@media (min-width:1600px)"]: {
      height: "36px"
    }
  },
  box2: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "15px",
    width: "80%",
    height: "34px",
    background: theme.palette.secondary.accent,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ["@media (min-width:1600px)"]: {
      height: "36px",
      marginBottom: "20px"
    }
  },
  icon2: {
    fontSize: "16px",
    color: theme.palette.primary.dark,
    marginLeft: "10px",
    ["@media (min-width:1600px)"]: {
      fontSize: "18px"
    }
  },
  subheading2: {
    fontSize: "14px",
    marginLeft: "30px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    ["@media (min-width:1600px)"]: {
      fontSize: "16px"
    }
  }
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <div className={classes.imageBox}>
          <img src={studentCordinator} className={classes.image} />
        </div>
      </div>
      <h1 className={classes.heading}>Abhijot Singh</h1>
      <h3 className={classes.subheading}>Student Coordinator</h3>
      <div className={classes.box}>
        <Phone className={classes.icon2} />
        <Typography variant="h6" component="h2" className={classes.subheading2}>
          +91 70879 48904
        </Typography>
      </div>
      <div className={classes.box2}>
        <Email className={classes.icon2} />
        <Typography variant="h6" component="h2" className={classes.subheading2}>
          tpo@gndec.ac.in
        </Typography>
      </div>
    </Card>
  );
}
