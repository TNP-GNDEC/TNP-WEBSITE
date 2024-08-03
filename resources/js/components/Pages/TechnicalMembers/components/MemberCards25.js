import React from "react";
import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const memberData = [
    {
        key: 1,
        name: "Rajveer Singh",
        designation: "Head of Database Operations",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: "https://tnpgndec.com/images/rajveer.jpg",
        linkedIn: "https://www.linkedin.com/in/rajveer810214/",
        instagram: "https://www.instagram.com/rajveer810214",
        github: "https://github.com/Rajveer810214",
        mail: "mailto:rajveer810214@gmail.com",
        twitter: "https://rajveersidhu.vercel.app/"
    },
    {
        key: 2,
        name: "Vansh Kumar",
        designation: "Chief Technology Officer (CTO)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2021-25 batch.",
        profilePic: "https://tnpgndec.com/images/vansh.jpg",
        linkedIn: "https://www.linkedin.com/in/vansh1190/",
        instagram: "https://www.instagram.com/vansh1190/",
        github: "https://github.com/vansh1190",
        mail: "mailto:vanshk605@gmail.com",
        twitter: "https://vansh1190.vercel.app"

    },
   
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
