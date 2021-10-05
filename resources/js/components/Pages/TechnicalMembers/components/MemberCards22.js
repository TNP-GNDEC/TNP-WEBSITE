import React from "react";
import MemberCard from "./MemberCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const memberData = [
  {
    key: 1,
    name: "Konark Lohat",
    designation: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sagittis nulla id blandit.Cras sodales nulla ac rutrum maximus.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://tnpgndec.com/",
    instagram: "https://tnpgndec.com/",
    github: "https://tnpgndec.com/",
    facebook: "",
    mail: "https://tnpgndec.com/",
    twitter: "https://tnpgndec.com/",
  },
  {
    key: 2,
    name: "Konark Lohat",
    designation: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sagittis nulla id blandit.Cras sodales nulla ac rutrum maximus.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://tnpgndec.com/",
    instagram: "https://tnpgndec.com/",
    github: "https://tnpgndec.com/",
    facebook: "https://tnpgndec.com/",
    mail: "https://tnpgndec.com/",
    twitter: "https://tnpgndec.com/",
  },
  {
    key: 3,
    name: "Konark Lohat",
    designation: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sagittis nulla id blandit.Cras sodales nulla ac rutrum maximus.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://tnpgndec.com/",
    instagram: "https://tnpgndec.com/",
    github: "https://tnpgndec.com/",
    facebook: "https://tnpgndec.com/",
    mail: "https://tnpgndec.com/",
    twitter: "https://tnpgndec.com/",
  },
  {
    key: 4,
    name: "Konark Lohat",
    designation: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sagittis nulla id blandit.Cras sodales nulla ac rutrum maximus.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://tnpgndec.com/",
    instagram: "https://tnpgndec.com/",
    github: "https://tnpgndec.com/",
    facebook: "https://tnpgndec.com/",
    mail: "https://tnpgndec.com/",
    twitter: "https://tnpgndec.com/",
  },
  {
    key: 5,
    name: "Konark Lohat",
    designation: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sagittis nulla id blandit.Cras sodales nulla ac rutrum maximus.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://tnpgndec.com/",
    instagram: "https://tnpgndec.com/",
    github: "https://tnpgndec.com/",
    facebook: "https://tnpgndec.com/",
    mail: "https://tnpgndec.com/",
    twitter: "https://tnpgndec.com/",
  },
]


const useStyles = makeStyles((theme) => ({
  center: {
    marginTop: "15px",
    ['@media (max-width:960px)']: {
      width: "100%",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    },
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));

const MemberCards22 = ({ year }) => {
  const classes = useStyles();

  return (
    <>
      {memberData.map((member) => (
        <Grid item className={classes.center} md={6} sm={6} xs={12} key={member.key} >
          <MemberCard name={member.name} designation={member.designation} description={member.description} profilePic={member.profilePic} facebook={member.facebook} linkedIn={member.linkedIn} github={member.github} instagram={member.instagram} twitter={member.twitter} mail={member.mail} />
        </Grid>
      ))}
    </>

  )
}

export default MemberCards22
