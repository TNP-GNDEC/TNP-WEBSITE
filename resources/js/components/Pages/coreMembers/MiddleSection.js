import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Select from "react-select";
import PdfCard from "../ExecutiveMembers/pdfCard"; // Component exists in Executive Members folder

const customStyles = {
    control: base => ({
        ...base,
        height: 50,
        borderRadius: 16,
        fontFamily: "Open Sans",
        fontSize: 16,
        color: "#303030"
    })
};

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: theme.palette.primary.light,
        margin: "0px",
        minHeight: "100vh"
    },
    root: {
        flexGrow: 1,
        margin: "15px 15px 0",
        marginTop: "30px",
        paddingTop: "20px"
    },
    cardTitle: {
        fontSize: "18px",
        paddingLeft: "5px",
        marginBottom: "5px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "20px"
        }
    },
    pdfCard: {
        padding: "15px",
        borderRadius: "16px",
        marginTop: "20px",
        boxShadow: "0px 10px 25px rgba(48, 48, 48, 0.2)"
    }
}));

export default function MiddleSection() {
    const classes = useStyles();

    // links should be in order with last one being the latest one
    const links = [
        "/documents/Tnp-Team/Core-Team-20-21.pdf",
        "/documents/Tnp-Team/Core-Team.pdf",
        "/documents/Tnp-Team/Core-Team_2022-2023.pdf",
        "/documents/Tnp-Team/Core-Team_2023-2024.pdf",
        "/core_24-25.pdf"
    ];
    const options = [
        { value: 0, label: "2020-21" },
        { value: 1, label: "2021-22" },
        { value: 2, label: "2022-23" },
        { value: 3, label: "2023-24" },
        { value: 4, label: "2024-25" }
    ];
    const [index, setIndex] = useState(links.length - 1);

    const handleChange = e => {
        setIndex(e.value);
    };

    return (
        <>
            <h3 className={classes.cardTitle}>Core Members</h3>
            <Select
                styles={customStyles}
                options={options}
                onChange={handleChange}
                defaultValue={options[options.length - 1]}
            />
            <Card className={classes.pdfCard}>
                <PdfCard source={links[index]} />
            </Card>
        </>
    );
}
