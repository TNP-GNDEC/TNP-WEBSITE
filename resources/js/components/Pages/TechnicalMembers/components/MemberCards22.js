import React from "react";
import MemberCard from "./MemberCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const memberData = [
  {
    key: 1,
    name: "Vikalp Kaushik",
    designation: "Full Stack Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/vikalp.png",
    linkedIn: "https://www.linkedin.com/in/vikalp-kaushik-99966a1ab",
    instagram: "https://www.instagram.com/vikalp._.kaushik",
    github: "https://github.com/vikalp2502",
    facebook: "",
    mail: "mailto:vikalpkaushik99@gmail.com",
    twitter: "",
  },
  {
    key: 2,
    name: "Palak Thapar",
    designation: "Full Stack Developer",
    description: "She is a B.Tech student in Computer Science & Engineering of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/palak.jpeg",
    linkedIn: "https://www.linkedin.com/in/palak-thapar/",
    instagram: "https://www.instagram.com/_palak.thapar/",
    github: "https://github.com/palak199",
    facebook: "",
    mail: "mailto:p.thapar99@gmail.com",
    twitter: "",
  },
  {
    key: 3,
    name: "Suryansh Chopra",
    designation: "Developer",
    description: "He is a B.Tech student in Information Technology of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/suryansh.jpeg",
    linkedIn: "https://www.linkedin.com/in/suryanshchopra/",
    instagram: "https://www.instagram.com/choprasuryansh/",
    github: "https://github.com/SuryanshChopra",
    facebook: "",
    mail: "mailto:suryanshchopra987@gmail.com",
    twitter: "",
  },
  {
    key: 4,
    name: "Gursidak Singh",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/gursidak.jpeg",
    linkedIn: "https://www.linkedin.com/in/gursidak-singh-620173190/",
    instagram: "",
    github: "https://github.com/gursidak",
    facebook: "",
    mail: "mailto:singhgursidak89@gmail.com",
    twitter: "https://twitter.com/Gursidak8685",
  },
  {
    key: 5,
    name: "Mahin Mittal",
    designation: "Developer",
    description: "He is a B.Tech student in Computer Science & Engineering of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/mahin.jpeg",
    linkedIn: "https://www.linkedin.com/in/mahinmittal651/",
    instagram: "https://www.instagram.com/mahin651/",
    github: "https://github.com/mahin651",
    facebook: "",
    mail: "mailto:mahinmittal2018@gmail.com",
    twitter: "https://twitter.com/MahinMittal",
  },
  {
    key: 6,
    name: "Gurkirpal Singh",
    designation: "UI/UX Designer",
    description: "He is a B.Tech student in Electrical Engineering of 2018-22 batch.",
    profilePic: "https://tnpgndec.com/images/gurkipal.jpg",
    linkedIn: "https://www.linkedin.com/in/gurkipal-singh-79778a191/",
    instagram: "https://instagram.com/gurrii_ramgarhia",
    github: "https://github.com/mahin651",
    facebook: "",
    mail: "mailto:mgurkirpal013@gmail.com",
    twitter: "https://twitter.com/gurkipal013",
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
