import React from "react";
import MemberCard from "./MemberCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const memberData = [
  {
    key: 1,
    name: "Sukhmandeep Kaur",
    designation: "Developer",
    description: "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "",
    instagram: "https://www.instagram.com/sukhman_2807/",
    github: "",
    facebook: "https://www.facebook.com/sukhman.kaur.5686",
    mail: "mailto:sukhman2807@gmail.com",
    twitter: "",
  },
  {
    key: 2,
    name: "Saksham Bhatia",
    designation: "Developer",
    description: "He is a Genconian. He is a B.Tech student in Information Technology of 2016-20 batch.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://www.linkedin.com/in/saksham-bhatia-1b9b99162/",
    instagram: "https://www.instagram.com/saksham1422/",
    github: "",
    facebook: "https://www.facebook.com/saksham.bhatia.7545",
    mail: "mailto:sakshambhatia06@gmail.com",
    twitter: "",
  },
  {
    key: 3,
    name: "Parul Singla",
    designation: "Developer",
    description: "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch. She worked as Laravel Developer.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://www.linkedin.com/in/parul-singla-51886a139/",
    instagram: "https://instagram.com/parulsingla13?igshid=18wi3nluqg9z3",
    github: "",
    facebook: "https://www.facebook.com/parul.singla.585",
    mail: "mailto:singlaparul2222@gmail.com",
    twitter: "",
  },
  {
    key: 4,
    name: "Gagandeep Kaur",
    designation: "Developer",
    description: "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch. She has worked mainly as a frontend Designer.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "https://www.linkedin.com/in/gagan-deep-b81a8315a/",
    instagram: "https://www.instagram.com/gagan_kaur20/",
    github: "",
    facebook: "https://www.facebook.com/ashi.bansal.587",
    mail: "mailto:gaganbansal113@gmail.com",
    twitter: "https://twitter.com/Gagande42822637",
  },
  {
    key: 5,
    name: "Amandeep Singh",
    designation: "Developer",
    description: "He is a B.Tech student in Information Technology of 2016-20 batch. He has mainly worked on back-end and image processing module.",
    profilePic: "https://i.imgur.com/215uuA1.png",
    linkedIn: "",
    instagram: "",
    github: "",
    facebook: "https://www.facebook.com/profile.php?id=100008014935724",
    mail: "mailto:",
    twitter: "",
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

const MemberCards20 = ({ year }) => {
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

export default MemberCards20
