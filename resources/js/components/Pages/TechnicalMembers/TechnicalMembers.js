import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";
import Scroll from "../../HomeComponent/SideComponents/scroll";
import MemberCards24 from "./components/MemberCards24";
import MemberCards23 from "./components/MemberCards23";
import MemberCards22 from "./components/MemberCards22";
import MemberCards21 from "./components/MemberCards21";
import MemberCards20 from "./components/MemberCards20";
import MemberCards19 from "./components/MemberCards19";

import Select from "react-select";

const options = [
    { value: "24", label: "2023-24" },
    { value: "23", label: "2022-23" },
    { value: "22", label: "2021-22" },
    { value: "21", label: "2020-21" },
    { value: "20", label: "2019-20" },
    { value: "19", label: "2018-19" }
];

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
    paper: {
        padding: theme.spacing(1),
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    paper2: {
        padding: theme.spacing(1),
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "sticky",
        top: "80px"
    },
    left: {
        marginTop: "40px",
        width: "100%",
        ["@media (max-width:960px)"]: {
            display: "none"
        },
        ["@media (min-width:1600px)"]: {
            marginTop: "60px"
        }
    },
    center: {
        marginTop: "40px",
        ["@media (max-width:960px)"]: {
            width: "100%"
        },
        ["@media (min-width:1600px)"]: {
            marginTop: "60px"
        }
    },
    right: {
        marginTop: "40px",
        width: "100%",
        ["@media (max-width:960px)"]: {
            display: "none"
        },
        ["@media (min-width:1600px)"]: {
            marginTop: "60px"
        }
    },
    cardTitle: {
        fontSize: "18px",
        paddingLeft: "5px",
        marginBottom: "5px",
        ["@media (min-width:1600px)"]: {
            fontSize: "20px"
        },
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        }
    },
    MemCards: {
        marginTop: "10px"
    }
}));

export default function TechnicalMembers() {
    const classes = useStyles();
    const [selectValue, setSelectValue] = React.useState();

    return (
        <div className={classes.body}>
            <Navbar />
            <div className={classes.root}>
                <Scroll showBelow={250} />
                <Grid container spacing={3}>
                    <Grid
                        item
                        md={3}
                        className={classes.left}
                        display={{ xs: "none", md: "block" }}
                    >
                        <Paper className={classes.paper}>
                            <LeftBar />
                        </Paper>
                    </Grid>
                    <Grid item md={6} className={classes.center}>
                        <Paper className={classes.paper}>
                            <h3 className={classes.cardTitle}>
                                Technical Members
                            </h3>
                            <Select
                                styles={customStyles}
                                options={options}
                                defaultValue={options[0]}
                                onChange={val => setSelectValue(val.value)}
                            />
                            <Grid
                                container
                                spacing={2}
                                className={classes.MemCards}
                            >
                                {!selectValue || selectValue === "24" ? (
                                    <MemberCards24 />
                                ) : (
                                    ""
                                )}
                                {selectValue === "23" ? <MemberCards23 /> : ""}
                                {selectValue === "22" ? <MemberCards22 /> : ""}
                                {selectValue === "21" ? <MemberCards21 /> : ""}
                                {selectValue === "20" ? <MemberCards20 /> : ""}
                                {selectValue === "19" ? <MemberCards19 /> : ""}
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        md={3}
                        className={classes.right}
                        display={{ xs: "none", md: "block" }}
                    >
                        <Paper className={classes.paper}>
                            <RightBar />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
