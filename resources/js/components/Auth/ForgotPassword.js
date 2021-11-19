import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notisfication from "./Notisfication";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import intro from "../../../images/3.jpg";

import SlickCarousel from "./SlickCarousel";

import logo from "../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        height: "100vh",
        minWidth: "100%",
        padding: "0",
        overflow: "hidden",
    },
    box: {
        // marginTop: theme.spacing(0)
    },
    container: {
        minWidth: "100%",
        height: "100vh",
        padding: "0",
        margin: "0",
        // borderRadius: "20px"
    },
    loginCard: {
        width: "100%",
        height: "100vh",
        padding: "0",
        overflow: "hidden",
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
        background: "linear-gradient(-45deg, #082C99, #1687d9)",
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
        marginTop: "20px",
        ['@media (max-width:600px)']: {
            marginTop: "30px"
        },
        ['@media (min-width:1600px)']: {
            marginTop: "30px",
            fontSize: "34px"
        },
    },
    form: {
        width: "80%", // Fix IE 11 issue.
        margin: theme.spacing(0),
        padding: theme.spacing(1),
        marginTop: "10px",
        ["@media (max-width:600px)"]: {
            width: "90%",
            marginTop: "30px",
        },
        ['@media (min-width:1600px)']: {
            marginTop: "30px"
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
        fontFamily: "Open Sans",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #1687d933",
        color: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        backgroundColor: theme.palette.primary.main,
        ['@media (min-width:1600px)']: {
            fontSize: "20px"
        },
    },
    image: {
        borderRadius: "50%",
        marginBottom: "50px",
        width: "60px",
        height: "60px",
        ['@media (min-width:1600px)']: {
            width: "80px",
            height: "80px"
        },
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
        ['@media (min-width:1600px)']: {
            fontSize: "15px",
        },
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
        wordBreak: "keep-all",
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
        ['@media (min-width:1600px)']: {
            fontSize: "17px",
        },
    },
}));

export default function Email() {
    var dt=new Date();
    var year = dt.getFullYear();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({});
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const validate = () => {
        let temp = {};
        temp.email = state.email ? "" : "Required.";
        setErrors({
            ...temp,
        });

        return true;
    };

    const handleEmailChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            setLoading(true);
            axios
                .post("/forget-password", {
                    email: state.email,
                })
                .then((response) => {
                    setLoading(false);
                    if (response.data.alert) {
                        setNotify({
                            isOpen: true,
                            message: response.data.alert,
                            type: "error",
                        });
                    }
                    if (response.data.msg) {
                        setNotify({
                            isOpen: true,
                            message: response.data.msg,
                            type: "success",
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
    };
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <Container className={classes.container}>
                    <div className={classes.loginCard}>
                        <Box boxShadow={2} className={classes.paper}>
                        <div className={classes.mainHead}>
                                <div className={classes.brand}>
                                    <div>
                                        <Link to="/">
                                            <img
                                                src={logo}
                                                className={classes.image}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <Typography
                                    component="h2"
                                    variant="h3"
                                    className={classes.heading}
                                >
                                    Forget Password
                                </Typography>
                                <span className={classes.headSecondary}>Enter the registered email</span>
                            </div>
                            <form
                                onSubmit={(event) => handleFormSubmit(event)}
                                className={classes.form}
                            >
                                <Notisfication
                                    notify={notify}
                                    setNotify={setNotify}
                                />
                                <TextField
                                    variant="outlined"
                                    InputProps={{
                                        classes: {
                                            notchedOutline:
                                                classes.notchedOutline,
                                            focused: classes.focused,
                                        },
                                    }}
                                    margin="normal"
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    defaultValue={state.email}
                                    onChange={handleEmailChange}
                                    {...(errors.email && {
                                        error: true,
                                        helperText: errors.email,
                                    })}
                                />
                                {loading ? (
                                        <div className={classes.loader}>
                                            <CircularProgress />
                                        </div>
                                    ) : (
                                <button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Submit
                                </button>
                                )}
                            </form>
                            <div className={classes.footText}>
                                <p>
                                Developed with ❤️ by <a className={classes.anchor} href="/technicalMembers">Genconians</a> | ©️ {year} <a className={classes.anchor} href="https://gndec.ac.in">GNDEC</a>, Ldh.
                                </p>
                            </div>
                        </Box>
                        <div className={classes.hero}>
                            <SlickCarousel />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
