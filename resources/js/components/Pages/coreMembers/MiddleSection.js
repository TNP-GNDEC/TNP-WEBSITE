import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Select from "react-select";

const options = [
    { value: 3, label: "2021-22" },
    { value: 2, label: "2020-21" },
    { value: 1, label: "2019-20" },
    { value: 0, label: "2018-19" }
  ]
  
  const customStyles = {
    control: base => ({
      ...base,
      height: 50,
      borderRadius: 16,
      fontFamily: 'Open Sans',
      fontSize: 16,
      color: '#303030',
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
    pdfEmbedContainer: {
        borderRadius: "16px",
        marginTop: "20px",
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
        borderRadius: "16px",
        border: "none",
        outline: "none"
    }
}));

export default function MiddleSection() {
    const classes = useStyles();
    const links = ["", "", "", "/documents/Tnp-Team/Core-Team.pdf"];
    const [index, setIndex] = useState(links.length - 1);

    const handleChange = (e) => {
        setIndex(e.value);
    };

    return (
        <>
            <h3 className={classes.cardTitle}>Core Members</h3>
                <Select
                    styles={customStyles}
                    options={options}
                    onChange={handleChange}
                    defaultValue={options[0]}
                />
                
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
