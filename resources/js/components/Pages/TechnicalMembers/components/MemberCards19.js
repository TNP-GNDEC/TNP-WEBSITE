import React from "react";
import MemberCard from "./MemberCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const memberData = [
  {
    key: 1,
    name: "Sanjampreet singh",
    designation: "Developer",
    description: "He is a B.Tech student in Information Technology of 2015-19 batch. He has worked as Developer on the PWA and Restful APIs.",
    profilePic: "https://tnpgndec.com/images/sanjam.jpeg",
    linkedIn: "https://www.linkedin.com/in/sanjampreetsingh/",
    instagram: "https://www.instagram.com/sanjampreetsingh_/",
    github: "",
    facebook: "https://www.facebook.com/sanjampreet.singh1",
    mail: "mailto:sanjam531@gmail.com",
    twitter: "https://twitter.com/Itzrealsanjam",
  },
  {
    key: 2,
    name: "Karamveer Singh",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science and Engineering of 2015-19 batch. He has worked as Developer on the SPA and Vue.js.",
    profilePic: "https://tnpgndec.com/images/karamveer.jpg",
    linkedIn: "https://www.linkedin.com/in/singh-karamveer/",
    instagram: "https://www.instagram.com/honey_singh008/",
    github: "",
    facebook: "https://www.facebook.com/loveforeverKM",
    mail: "mailto:kmvsingh007@gmail.com",
    twitter: "https://www.twitter.com/kmvsingh007",
  },
  {
    key: 3,
    name: "Karamveer Singh",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science and Engineering of 2015-19 batch. He has worked as Developer on the SPA and Vue.js.",
    profilePic: "https://tnpgndec.com/images/karamveer.jpg",
    linkedIn: "https://www.linkedin.com/in/singh-karamveer/",
    instagram: "https://www.instagram.com/honey_singh008/",
    github: "",
    facebook: "https://www.facebook.com/loveforeverKM",
    mail: "mailto:kmvsingh007@gmail.com",
    twitter: "https://www.twitter.com/kmvsingh007",
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
  invisibleMember: {
    visibility: "hidden",
  }
}));

const MemberCards19 = ({ year }) => {
  const classes = useStyles();

  return (
    <>
      {memberData.map((member) => (
        <Grid item className={classes.center} md={6} sm={6} xs={12} key={member.key} className={member.key === 3 && memberData[1].name === memberData[2].name ? classes.invisibleMember : ""} >
          <MemberCard
            name={member.name}
            designation={member.designation}
            description={member.description}
            profilePic={member.profilePic}
            facebook={member.facebook}
            linkedIn={member.linkedIn}
            github={member.github}
            instagram={member.instagram}
            twitter={member.twitter}
            mail={member.mail} />
        </Grid>
      ))}
    </>

  )
}

export default MemberCards19
