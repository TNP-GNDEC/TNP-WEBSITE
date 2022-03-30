import React from "react";
import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const memberData = [
    {
        key: 1,
        name: "Konark Lohat",
        designation: "Software Developer (Full Stack Developer)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/konark.jpg",
        linkedIn: "https://www.linkedin.com/in/konark-lohat/",
        instagram: "https://www.instagram.com/konarklohat",
        github: "https://github.com/LastComrade",
        mail: "mailto:konarklohat123456@gmail.com",
        twitter: ""
    },
    {
        key: 2,
        name: "Gautam Jain",
        designation: "Software Developer (Full Stack Developer)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/gautam.jpg",
        linkedIn: "https://www.linkedin.com/in/astrogeek77/",
        instagram: "",
        github: "https://github.com/Astrogeek77",
        facebook: "",
        mail: "mailto:astrogeek77@outlook.com",
        twitter: ""
    },
    {
        key: 3,
        name: "Jaswant Singh",
        designation: "Software Developer (Full Stack Developer)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/jaswant.jpeg",
        linkedIn: "https://www.linkedin.com/in/jaswant-singh009/",
        instagram: "https://www.instagram.com/jaswantsingh.js/",
        github: "https://github.com/Jaswantsinghh",
        facebook: "",
        mail: "mailto:jaswantsinghjsn@gmail.com",
        twitter: ""
    },
    {
        key: 4,
        name: "Ekampreet Singh",
        designation: "Software Developer (Full Stack Developer)",
        description:
            "He is a B.Tech student in Information Technology of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/ekampreet.jpg",
        linkedIn: "https://www.linkedin.com/in/ekam-preet-singh-250595205/",
        instagram: "https://www.instagram.com/ekampreet_07/",
        github: "https://github.com/Ekam-Preet-Singh",
        facebook: "",
        mail: "mailto:Ekampreet.singh6862@gmail.com",
        twitter: ""
    },
    {
        key: 5,
        name: "Avninder Preet Singh",
        designation: "Software Developer (Full Stack Developer)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/avninder.jpeg",
        linkedIn: "https://in.linkedin.com/in/avninder-preet-singh-2119501b7",
        instagram: "",
        github: "https://github.com/Avninder99",
        facebook: "",
        mail: "mailto:avninderpreet99@gmail.com",
        twitter: ""
    },
    {
        key: 6,
        name: "Nimrat Kaur",
        designation: "UI/UX Designer",
        description:
            "She is a B.Tech student in Computer Science & Engineering of 2019-23 batch.",
        profilePic: "https://tnpgndec.com/images/nimrat.jpeg",
        linkedIn: "https://www.linkedin.com/in/nimrat-kaur-598508203/",
        instagram: "https://www.instagram.com/nimratkaur2269/",
        github: "",
        facebook: "",
        mail: "mailto:kalernimrat@gmail.com",
        twitter: ""
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

const MemberCards22 = ({ year }) => {
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
                        github={member.github}
                        instagram={member.instagram}
                        twitter={member.twitter}
                        mail={member.mail}
                    />
                </Grid>
            ))}
        </>
    );
};

export default MemberCards22;
