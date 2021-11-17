import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useHistory } from "react-router-dom";

import slide1 from "../../../images/slide1.png";
import slide2 from "../../../images/slide2.png";
import slide3 from "../../../images/slide3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        height: "100vh",
    },
    box: {
        // marginTop: theme.spacing(0)
    },
    container: {
        width: "100%",
        height: "100%",
        // borderRadius: "20px"
    },
    loginCard: {
        width: "100%",
        height: "100vh",
        // margin: "auto",
        // marginTop: "45px",
        // marginBottom: "40px",
        // borderRadius: "20px",
        // boxShadow: "0px 15px 25px #00000033",
        background: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ["@media (max-height:585px)"]: {
            marginTop: "25px",
        },
    },
    hero: {
        width: "60%",
        height: "100%",
        // marginTop: "50px",
        // marginBottom: "20px",
        background: "linear-gradient(-45deg, #0A3BCC, #1687d9)",
        ["@media (max-width:1000px)"]: {
            display: "none",
        },
    },
    pic: {
        width: "100%",
        borderRadius: "3%",
    },
    paper: {
        position: "relative",
        width: "40%",
        height: "100%",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        padding: theme.spacing(2),
        paddingBottom: "5px",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        ["@media (max-width:1000px)"]: {
            width: "100%",
        },
    },
    loader: {
        width: "30%",
        margin: "auto",
        height: "30%",
        textAlign: "center",
        marginTop: "200px",
    },
    icon: {
        fontSize: "90px",
    },
    heading: {
        color: theme.palette.primary.dark,
        fontWeight: "600",
        fontSize: "30px",
    },
    form: {
        width: "80%", // Fix IE 11 issue.
        margin: theme.spacing(0),
        padding: theme.spacing(1),
        ["@media (max-width:600px)"]: {
            width: "90%",
            marginTop: "20px",
        },
    },
    loader: {
        width: "100%",
        textAlign: "center",
        marginTop: "25px",
    },
    submit: {
        width: "100%",
        border: "none",
        marginTop: "25px",
        height: "55px",
        fontSize: "18px",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #1687d933",
        color: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        backgroundColor: theme.palette.primary.main,
    },
    image: {
        borderRadius: "50%",
        marginBottom: "50px",
    },
    mainHead: {
        width: "80%",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        ["@media (max-width:600px)"]: {
            width: "90%",
        },
    },
    headSecondary: {
        fontSize: "13px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.text,
    },
    notchedOutline: {
        borderColor: "#757575",
    },
    focused: {
        borderColor: theme.palette.secondary.main,
    },

    link: {
        color: theme.palette.primary.main,
        display: "flex",
        alignSelf: "flex-end",
        fontFamily: "Open Sans",
    },
    anchor: {
        color: theme.palette.primary.text,
        textDecoration: "underline",
    },
    input: {
        borderRadius: "20px",
    },
    footText: {
        position: "absolute",
        bottom: "0",
        width: "80%",
        fontFamily: "Open Sans",
        fontSize: "15px",
        wordBreak: "break-all",
        color: theme.palette.primary.text,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "flex-end",
        paddingLeft: theme.spacing(3),
        // marginBottom: "10px"
        ["@media (max-width:600px)"]: {
            width: "90%",
        },
    },
    slideWrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        height: "100%",
    },
    slideImage: {
        height: "320px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "2rem",
        marginBottom: "4rem",
    },
    textWrapper: {
        //
    },
    slideHeading: {
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "600",
        fontFamily: "Open Sans",
        color: theme.palette.secondary.main,
    },
    slideSubtitle: {
        textAlign: "center",
        fontFamily: "Open Sans",
        color: theme.palette.secondary.main,
        fontSize: "16px",
        paddingRight: "180px",
        paddingLeft: "180px",
    },
}));

const SlickCarousel = () => {
    const history = useHistory();
    const classes = useStyles();
    var dt = new Date();
    var year = dt.getFullYear();

    var settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        infinite: true,
    };

    return (
        <Slider {...settings}>
            <div className={classes.slideWrapper}>
                <img
                    className={classes.slideImage}
                    src={slide1}
                    alt="Regular Updates"
                />
                <div className={classes.textWrapper}>
                    <p className={classes.slideHeading}>Regular Updates </p>{" "}
                    <p className={classes.slideSubtitle}>
                        Get information and news about new opportunities and
                        recruitments.{" "}
                    </p>{" "}
                </div>{" "}
            </div>{" "}
            <div className={classes.slideWrapper}>
                <img
                    className={classes.slideImage}
                    src={slide2}
                    alt="Get Notified"
                />
                <div className={classes.textWrapper}>
                    <p className={classes.slideHeading}>Get Notified </p>{" "}
                    <p className={classes.slideSubtitle}>
                        Subscribe by clicking on bell prompt or CTA for latest
                        news and updates.{" "}
                    </p>{" "}
                </div>{" "}
            </div>{" "}
            <div className={classes.slideWrapper}>
                <img
                    className={classes.slideImage}
                    src={slide3}
                    alt="Stay Connected"
                />
                <div className={classes.textWrapper}>
                    <p className={classes.slideHeading}>Stay Connected </p>{" "}
                    <p className={classes.slideSubtitle}>
                        Follow & connect with us on linkedin and other social
                        handles for new updates.{" "}
                    </p>{" "}
                </div>{" "}
            </div>{" "}
        </Slider>
    );
};
export default SlickCarousel;
