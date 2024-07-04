import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import Card from '@material-ui/core/Card';

import technicalMemberIcon from '../../../../images/technicalMemberIcon.svg';
import executiveMemberIcon from '../../../../images/executiveMemberIcon.svg';
import coreMemberIcon from '../../../../images/coreMemberIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    marginBottom: "34px",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
    },
  },
  media: {
    textAlign: "center"
  },
  icon: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    borderRadius: "5px",
    boxShadow: "0px 5px 15px #193b6833",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    fontSize: "18px",
  },
  title: {
    color: theme.palette.primary.dark,
    fontSize: "22px"
  },
  handles: {
    width: "90%",
    marginBottom: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "30%",
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
    backgroundColor: "#D8DEE7"
  },
  imageBox: {
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ['@media (min-width:1600px)']: {
      height: "70px",
      width: "70px",
    },
  },
  imageBox2: {
    backgroundColor: "#0077b5",
    marginLeft: "10px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ['@media (min-width:1600px)']: {
      height: "70px",
      width: "70px",
    },
  },
  image: {
    width: "18px",
    height: "18px",
    ['@media (min-width:1600px)']: {
      height: "22px",
      width: "22px",
    },
  },
  textInfo: {
    width: "70%",
    height: "18px",
    // paddingRight: "10px",
    ['@media (min-width:1600px)']: {
      height: "20px",
    },
  },
  heading: {
    marginBottom: "10px",
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "5px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
      paddingTop: "12px"
    },
  },
  subheading: {
    textAlign: "left",
    padding: "0px 0px 0px 0px",
    fontSize: "15px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#303030",
    ['@media (min-width:1600px)']: {
      fontSize: "18px",
    },
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px",
    width: "100%",
    height: "40px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "2px solid #1687d9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "0 5px 12px #1687d933",
    },
    "&:focus": {
      outline: "none",
    },
    ['@media (min-width:1600px)']: {
      height: "50px",
    },
  },
  subheading2: {
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.main,
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
    },
  },
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to="/technicalMembers">
        <div className={classes.handles}>
          <div className={classes.imageBox}>
            <img src={technicalMemberIcon} alt="Technical Members" className={classes.image} />
          </div>
          <div className={classes.textInfo}>
            <h3 className={classes.subheading}>
              Technical Members
            </h3>
          </div>
        </div>
      </Link>

      <Link to="/executiveMembers">
        <div className={classes.handles}>
          <div className={classes.imageBox}>
            <img src={executiveMemberIcon} alt="Executive Members" className={classes.image} />
          </div>
          <div className={classes.textInfo}>
            <h3 className={classes.subheading}>
              Executive Members
            </h3>
          </div>
        </div>
      </Link>

      <Link to="/coreMembers">
        <div className={classes.handles}>
          <div className={classes.imageBox}>
            <img src={coreMemberIcon} alt="Core Members" className={classes.image} />
          </div>
          <div className={classes.textInfo}>
            <h3 className={classes.subheading}>
              Core Members
            </h3>
          </div>
        </div>
      </Link>

      <Link to="/departmentHeads">
              <div className={classes.handles}>
                <div className={classes.imageBox}>
                  <img src={coreMemberIcon} alt="Department Heads" className={classes.image} />
                </div>
                <div className={classes.textInfo}>
                  <h3 className={classes.subheading}>
                    Department Heads
                  </h3>
                </div>
              </div>
            </Link>
    </Card>
  );
}
