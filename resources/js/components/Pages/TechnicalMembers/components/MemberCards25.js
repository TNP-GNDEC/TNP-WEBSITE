import React from "react";
import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import rajveer from "../../../../../images/technical_25/rajveer.jpg";
import chandanbir from "../../../../../images/technical_25/chandanbir.jpg"
import harnoor from "../../../../../images/technical_25/harnoor.jpg";
import vansh from "../../../../../images/technical_25/vansh.jpg";
import inderpreet from "../../../../../images/technical_25/inderpreet.jpg";
import deepak from "../../../../../images/technical_25/deepak.jpg";
import ayush from "../../../../../images/technical_25/ayush.jpg";

const memberData = [
    {
        key: 1,
        name: "Rajveer Singh Singh",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: rajveer,
        linkedIn: "https://www.linkedin.com/in/rajveer810214/",
        instagram: "https://www.instagram.com/rajveer810214",
        github: "https://github.com/Rajveer810214",
        mail: "mailto:rajveer810214@gmail.com",
        twitter: ""
    },
    {
        key: 2,
        name: "Vansh Kumar",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in  & Engineering of 2021-25 batch.",
        profilePic: vansh,
        linkedIn: "https://www.linkedin.com/in/vansh1190/",
        instagram: "https://www.instagram.com/vansh1190/",
        github: "https://github.com/vansh1190",
        mail: "mailto:vanshk605@gmail.com",
        twitter: ""

    },
    {
        key: 3,
        name: "Chandanbir Singh",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: chandanbir,
        linkedIn: "https://www.linkedin.com/in/chandanbir-singh/",
        instagram: "https://www.instagram.com/singh_chandanbir/",
        github: "https://github.com/singh-chandanbir",
        mail: "mailto:chandanbirsingh1@gmail.com",
        twitter: ""
    },
    {
        key: 4,
        name: "Inderpreet Singh",
        designation: "Developer, UI/UX Designer",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: inderpreet,
        linkedIn: "https://www.linkedin.com/in/inderpreet-singh13",
        instagram: "https://www.instagram.com/_.inderpreet_singh._/",
        github: "https://github.com/inder-singh001",
        mail: "mailto:singhinderpreet238@gmail.com",
        twitter: ""
    },
   
    {
        key: 5,
        name: "Harnoor Birdi",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: harnoor,
        linkedIn: "https://www.linkedin.com/in/harnoorbirdi/",
        instagram: "https://www.instagram.com/harnoor.29/",
        github: "https://github.com/Harnoor007",
        mail: "mailto:harnoorsingh836@gmail.com",
        twitter: ""
    },
    {
        key: 6,
        name: "Deepak Parkash",
        designation: "Jr Penstester W-Pt (Bug hunter)",
        description:
            "He is a BCA(Cyber Security ) student in Computer Application of 2023-26 batch.",
        profilePic: deepak,
        linkedIn: "https://www.linkedin.com/in/deepakparkash/",
        instagram: "https://www.instagram.com/de_fuxk/?igshid=NzZlODBkYWE4Ng%3D%3D",
        github: "https://github.com/FancybearIN",
        mail: "mailto:deepakparkash002@gmail.com",
        twitter: "https://twitter.com/Deep07se"
    },
    {
        key: 7,
        name: "Ayush Singh",
        designation: "Full Stack Developer , UI/UX Designer",
        description:
            "He is a B.Tech student in Information Technology of 2021-25 batch.",
        profilePic: ayush,
        linkedIn: "https://www.linkedin.com/in/ayush-singh-3222a226a/",
        instagram: "",
        github: "https://github.com/AYUSH56789",
        mail: "mailto:ayushsingh46026@gmail.com",
        twitter: ""
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
