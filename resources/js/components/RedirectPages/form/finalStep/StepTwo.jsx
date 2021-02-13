import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import ProfilePreview from './ProfilePreview';
import AcademicsPreview from "./AcademicsPreview";
import ParentsPreview from "./ParentsPreview";
import DiplomaPreview from './DiplomaPreview';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120
    },
    heading: {
        paddingTop: "20px"
    },
    para: {
        color: "#000"
    },
    box: {
        margin: "30px auto 60px",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
        ["@media (max-width:960px)"]: {
            width: "90%"
        }
    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    cardStyles: {
        width: "90%",
        margin: "auto",
        marginTop: "50px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 15px 25px #00000033"
    },
    loader: {
        padding: "10px"
    },
    pos: {
        float: "right"
    },
    btnBox: {
        width: "90%",
        margin: "20px auto",
        paddingBottom: "10px",
        textAlign: "right"
    },
    button: {
        // marginRight: theme.spacing(1)
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main
        }
    },

    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        backgroundColor: "#038ed459"
    },
    textFieldContainer: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    fields: {
        width: "80%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533"
    },
    focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
    },
    outerSpan: {
        padding: "10px 0px"
    },
    keySpan: {
        fontSize: "22px",
        fontWeight: "700"
    },
    valueSpan: {
        fontSize: "22px"
    }
}));

export default function finalStep() {
    const classes = useStyles();

    const [ProfileData, setProfileData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);

    const [ParentsData, setParentsData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);
    const [AcademicsData, setAcademicsData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);

    const [DiplomaData, setDiplomaData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);

    return (
        <div className={classes.root}>
            <div className={classes.cardStyles}>
                <ProfilePreview data={ProfileData}/>
                <hr />
                <ParentsPreview data={ParentsData} /> 
                <hr />
                <AcademicsPreview data={AcademicsData} />
                {/* <hr />
                <DiplomaPreview data={DiplomaData} /> */}
            </div>
            <div className={classes.btnBox}>
                <button className={classes.button}>Finish</button>
            </div>
        </div>
    );
}
