import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Card from "@material-ui/core/Card";

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
    formControl: {
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "2px #B1B1B1 solid",
        overflow: "hidden",
        userSelect: "none",
        outline: "none",
        color: "#303030",
        padding: "5px 15px"
    },
    pdfEmbedContainer: {
        borderRadius: "10px",
        marginTop: "25px",
        border: "none",
        outline: "none",
        padding: "15px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "750px",
        boxShadow: "0px 15px 30px #8a959e33"
    },
    pdfEmbed: {
        border: "none",
        outline: "none"
    }
}));

export default function MiddleSection() {
    const classes = useStyles();
    const [index, setIndex] = useState(2);
    const links = ["", "", "/documents/Tnp-Team/Core-Team.pdf"];

    const handleChange = e => {
        setIndex(e.target.value);
    };

    return (
        <>
            <h3 className={classes.cardTitle}>Core Members</h3>
            <FormControl
                variant="standard"
                className={classes.formControl}
                fullWidth
            >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={index}
                    onChange={handleChange}
                    label="batch"
                    disableUnderline
                >
                    <MenuItem value={0}>2019-20</MenuItem>
                    <MenuItem value={1}>2020-21</MenuItem>
                    <MenuItem value={2}>2021-22</MenuItem>
                </Select>
            </FormControl>
            <Card className={classes.pdfEmbedContainer}>
                {links[index] == "" ? (
                    <h2 className={classes.cardTitle}>Updated Soon!</h2>
                ) : (
                    <iframe
                        src={links[index]}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className={classes.pdfEmbed}
                    ></iframe>
                )}
            </Card>
        </>
    );
}
