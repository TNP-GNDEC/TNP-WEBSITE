import React from "react";
import MemberCard from "./MemberCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const memberData = [
  {
    key: 1,
    name: "Kirti Gautam",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2017-21 batch.",
    profilePic: "https://tnpgndec.com/images/kirti.jpeg",
    linkedIn: "https://www.linkedin.com/in/kirti-gautam-1706232",
    instagram: "https://www.instagram.com/__.kirti.___/",
    github: "https://github.com/KirtiGautam",
    facebook: "",
    mail: "mailto:gautamkirti8c@gmail.com",
    twitter: "",
  },
  {
    key: 2,
    name: "Lakshay Chopra",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2017-21 batch. He is administrator of T & P Cell.",
    profilePic: "https://tnpgndec.com/images/lakshay.jpeg",
    linkedIn: "https://www.linkedin.com/in/lakshay-chopra/",
    instagram: "",
    github: "https://github.com/lakshaychopra",
    facebook: "",
    mail: "mailto:lakshaychopra21@gmail.com",
    twitter: "",
  },
  {
    key: 3,
    name: "Riya Singh",
    designation: "Developer",
    description: "She is a B.Tech student in Computer Science & Engineering of 2017-21 batch.",
    profilePic: "https://tnpgndec.com/images/riya.jpeg",
    linkedIn: "https://www.linkedin.com/in/riya-singh-b5a241187/",
    instagram: "https://www.instagram.com/___.riya.___/",
    github: "https://www.instagram.com/___.riya.___/",
    facebook: "",
    mail: "mailto:r.riyasingh.s15@gmail.com",
    twitter: "",
  },
  {
    key: 4,
    name: "Anurag Kumar",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2017-21 batch.",
    profilePic: "https://tnpgndec.com/images/anurag.png",
    linkedIn: "https://www.linkedin.com/in/anuragk539/",
    instagram: "https://www.instagram.com/anuragk539/",
    github: "https://github.com/anuragk539",
    facebook: "",
    mail: "mailto:anuragk539@gmail.com",
    twitter: "",
  },
  {
    key: 5,
    name: "Arsh Gupta",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2017-21 batch.",
    profilePic: "https://tnpgndec.com/images/arsh.png",
    linkedIn: "https://www.linkedin.com/in/arshgu09/",
    instagram: "",
    github: "",
    facebook: "",
    mail: "mailto:arsh.gupta8@gmail.com",
    twitter: "https://twitter.com/ArshGupta07",
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

const MemberCards21 = ({ year }) => {
  const classes = useStyles();

  return (
    <>
      {memberData.map((member) => (
        <Grid item className={classes.center} md={6} sm={6} xs={12} key={member.key}>
          <MemberCard name={member.name} designation={member.designation} description={member.description} profilePic={member.profilePic} facebook={member.facebook} linkedIn={member.linkedIn} github={member.github} instagram={member.instagram} twitter={member.twitter} mail={member.mail} />
        </Grid>
      ))}
    </>

  )
}

export default MemberCards21
