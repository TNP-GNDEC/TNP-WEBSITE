import React from "react";
import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const memberData = [
  {
    key: 1,
    name: "Ritik Mehta",
    designation: "Head of Database Operations",
    description:
      "B.Tech student in Computer Science & Engineering of 2022-26 batch.",
    profilePic: "https://tnpgndec.com/images/ritik.jpg",
    linkedIn: "https://linkedin.com/in/ritik-mehta-7a8581252",
    github: "https://github.com/ritik322",
    mail: "ritikmehta469@gmail.com"
  },
  {
    key: 2,
    name: "Devesh Sharma",
    designation: "Technical Lead",
    description: "B.Tech student in Information Technology of 2022-26 batch.",
    profilePic: "https://tnpgndec.com/images/devesh.jpg",
    linkedIn: "https://www.linkedin.com/in/devesh-sharma04/",
    github: "https://github.com/daveydark",
    mail: "mailto:devesh97531@gmail.com"
  },
  {
    key: 3,
    name: "Taranjeet Singh",
    designation: "Technical Member(Full Stack Developer)",
    description: "B.Tech student in Information Technology of 2022-26 batch",
    profilePic: "https://tnpgndec.com/images/taran.jpg",
    linkedIn:
      "https://www.linkedin.com/in/taranjeet-singh-8a13aa254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/1080Taranjeet",
    mail: "1080taranjeetsingh@gmail.com"
  },
  {
    key: 4,
    name: "Satbir Singh",
    designation: "Technical Member(UI/UX Designer)",
    description: "B.Tech student in Information Technology of 2022-26 batch",
    profilePic: "https://tnpgndec.com/images/satbir.jpg",
    linkedIn: "https://www.linkedin.com/in/satbir-singh-486587254",
    github: "https://github.com/Satbir-Singh-42",
    mail: "satbirsinghubhi@gmail.com"
  },
  {
    key: 5,
    name: "Rahul Sachdeva",
    designation: "Technical Member(Full Stack Developer)",
    description:
      "B.Tech student in Computer Science & Engineering of 2022-26 batch",
    profilePic: "https://tnpgndec.com/images/rahul.jpg",
    linkedIn: "https://www.linkedin.com/in/rahul-sachdeva-961862247/",
    github: "https://github.com/Rahul-Sachdeva",
    mail: "rahulsachdeva0305@gmail.com"
  }
];

const useStyles = makeStyles(theme => ({
  center: {
    ["@media (max-width:960px)"]: { width: "100%" },
    ["@media (min-width:1600px)"]: { marginTop: "60px" },
    paddingLeft: "15px",
    paddingRight: "15px"
  }
}));

const MemberCards25 = ({ year }) => {
  const classes = useStyles();
  return (
    <>
      {memberData.map(member => (
        <Grid item md={6} sm={6} xs={12} key={member.key}>
          <MemberCard
            name={member.name}
            designation={member.designation}
            description={member.description}
            profilePic={member.profilePic}
            facebook={member.facebook}
            linkedIn={member.linkedIn}
            website={member.website}
            instagram={member.instagram}
            github={member.github}
            twitter={member.twitter}
            mail={member.mail}
          />
        </Grid>
      ))}
    </>
  );
};

export default MemberCards25;
