import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Linkedin from '@material-ui/icons/LinkedIn';
import Insta from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Mail from '@material-ui/icons/Mail';
import GitHub from '@material-ui/icons/GitHub';
import Website from '@material-ui/icons/Language';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "15px",
    // marginBottom: "34px",
    textAlign: "center",
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
    marginRight: "10px",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    fontSize: "18px",
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
    ['@media (min-width:1600px)']: {
      height: "140px",
      width: "140px"
    },
  },
  image: {
    width: "106px",
    height: "106px",
    borderRadius: "50%",
    boxShadow: "0px 10px 20px #1687d933",
    ['@media (min-width:1600px)']: {
      height: "120px",
      width: "120px",
    },
  },
  heading: {
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "12px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
    },
  },
  subheading: {
    fontSize: "13px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.text,
    ['@media (min-width:1600px)']: {
      fontSize: "16px",
    },
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
    ['@media (min-width:1600px)']: {
      height: "36px",
    },
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
    ['@media (min-width:1600px)']: {
      height: "36px",
      marginBottom: "20px"
    },
  },
  icon2: {
    fontSize: "16px",
    color: theme.palette.primary.dark,
    marginLeft: "10px",
    ['@media (min-width:1600px)']: {
      fontSize: "18px",
    },
  },
  subheading2: {
    fontSize: "14px",
    marginLeft: "30px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    ['@media (min-width:1600px)']: {
      fontSize: "16px",
    },
  },
  description: {
    margin: "20px",
    fontFamily: "Open Sans",
    color: theme.palette.primary.text,
    height: "80px",
    ['@media (max-width:1024px)']: {
      height: "140px",
    },
    ['@media (max-width:768px)']: {
      height: "80px",
    },
    ['@media (max-width:376px)']: {
      height: "90px",
    },
  },
}));

export default function MemberCard({ name, designation, description, profilePic, linkedIn, website, instagram, github, facebook, mail, twitter }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <div className={classes.imageBox}>
          <img src={profilePic} className={classes.image} />
        </div>
      </div>
      <h1 className={classes.heading}>
        {name}
      </h1>
      <h3 className={classes.subheading}>
        {designation}
      </h3>
      <div className={classes.description}>
        <p className={classes.descrip}>
          {description}
        </p>
      </div>
      <div>
        <ul className="list-inline" id="list-link">
          {facebook ? (
            <li className="list-inline-item">
              <a
                className="social-icon"
                target="_blank"
                href={facebook}
              >
                <Facebook />
              </a>
            </li>
          ) : ""}
          {twitter ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={twitter}
              >
                <Twitter />
              </a>
            </li>
          ) : ""}
          {linkedIn ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={linkedIn}
              >
                <Linkedin />
              </a>
            </li>
          ) : ""}
          {website ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={website}
              >
                <Website />
              </a>
            </li>
          ) : ""}
          {instagram ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={instagram}
              >
                <Insta />
              </a>
            </li>
          ) : ""}
          {mail ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={mail}
              >
                <Mail />
              </a>
            </li>
          ) : ""}
          {github ? (
            <li className="list-inline-item mx-1">
              <a
                className="social-icon"
                target="_blank"
                href={github}
              >
                <GitHub />
              </a>
            </li>
          ) : ""}
        </ul>
      </div>
    </Card>
  );
}