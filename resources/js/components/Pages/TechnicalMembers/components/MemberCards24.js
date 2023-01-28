import React from "react";
import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const memberData = [
    {
        key: 1,
        name: "Jobanpreet Singh",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/jobanpreet.jpg",
        linkedIn: "https://www.linkedin.com/in/gh-b42a141bb/",
        instagram: "https://www.instagram.com/joban_aulakh_66/",
        github: "https://github.com/13-Joban",
        mail: "mailto:jobanjatt113@gmail.com",
        twitter: ""
    },
    {
        key: 2,
        name: "Harsh Verma",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/harsh.jpg",
        linkedIn: "https://www.linkedin.com/in/harshvse/",
        website: "https://harshvse.in/",
        instagram: "",
        github: "https://github.com/harshvse",
        facebook: "",
        mail: "mailto:harshvse@gmail.com",
        twitter: ""
    },
    {
        key: 3,
        name: "Prabhkirat Singh",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Information Technology of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/prabhkirat.jpg",
        linkedIn: "https://www.linkedin.com/in/prabhkirat-singh-5222701a2/",
        instagram: "https://www.instagram.com/_prabhkirat_singh_/",
        github: "https://github.com/PrabhWarrior",
        facebook: "",
        mail: "mailto:prabhkiratsingh65@gmail.com",
        twitter: ""
    },
    {
        key: 4,
        name: "Divyansh Bhateja",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Information Technology of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/divyansh.jpg",
        linkedIn: "https://www.linkedin.com/in/divyansh-bhateja-330a561a5/",
        instagram: "https://www.instagram.com/smilingdivyansh/",
        github: "https://github.com/CodeDivyansh",
        facebook: "",
        mail: "mailto:bhdivyansh02@gmail.com",
        twitter: ""
    },
    {
        key: 5,
        name: "Abhay Madaan",
        designation: "Software Developer (Full Stack)",
        description:
            "He is a B.Tech student in Computer Science & Engineering of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/abhay.png",
        linkedIn: "https://www.linkedin.com/in/abhay-madaan-709175205/",
        instagram: "https://www.instagram.com/madaan_abhay/",
        github: "https://github.com/AbhayMadaan9",
        facebook: "",
        mail: "mailto:madaanabhay9@gmail.com",
        twitter: ""
    },
    {
        key: 6,
        name: "Mehak Kalia",
        designation: "UI/UX Designer",
        description:
            "She is a B.Tech student in Computer Science & Engineering of 2020-24 batch.",
        profilePic: "https://tnpgndec.com/images/mehak.jpg",
        linkedIn: "https://www.linkedin.com/in/mehak-kalia-349746212",
        instagram: "",
        github: "https://github.com/mehak-kalia",
        facebook: "",
        mail: "mailto:mehakkalia77@gmail.com",
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

const MemberCards24 = ({ year }) => {
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

export default MemberCards24;
