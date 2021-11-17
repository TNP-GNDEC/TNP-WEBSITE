import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Footer from "../HomeComponent/SideComponents/Footer";
import Notisfication from "./Notisfication";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import intro from "../../../images/1.jpg";

import SlickCarousel from "./SlickCarousel";

import logo from "../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        height: "100vh",
        minWidth: "100%",
        padding: "0",
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
}));

export default function ResetPass() {
    var dt=new Date();
    var year = dt.getFullYear();
    const classes = useStyles();
    let { token } = useParams();
    const [errors, setErrors] = useState({});
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const validate = () => {
        let temp = {};
        temp.password =
            state.password.length > 5
                ? ""
                : "Password must be atleast 6 characters.";
        temp.confirmPassword =
            state.confirmPassword.length > 5
                ? ""
                : "Password must be atleast 6 characters.";
        setErrors({
            ...temp,
        });

        return true;
    };
    const [state, setState] = useState({
        password: "",
        confirmPassword: "",
        token: "",
    });

    const handlepasswordChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleConPasswordChange = (e) => {
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
        }
        axios
            .post("/reset-password", {
                password: state.password,
                confirmPassword: state.confirmPassword,
                token: token,
            })
            .then((response) => {
                var user = response.data.msg;
                if (user) {
                    setNotify({ isOpen: true, message: user, type: "error" });
                }
                if (response.data.alert) {
                    setNotify({
                        isOpen: true,
                        message: response.data.alert,
                        type: "success",
                    });
                }
                if (response.data.status === 200) {
                    window.location.href = window.origin + "/login";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .post(`/checktoken`, { token: token })
            .then((response) => {
                var user = response.data.msg;
                if (user === "Token not Found or Expired!") {
                    window.location.href = window.origin + "/invalid-token";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.container}>
                    <div className={classes.loginCard}>
                        <Box boxShadow={2} className={classes.paper}>
                            <div className={classes.mainHead}>
                                <div className={classes.brand}>
                                    <div>
                                        <Link to="/">
                                            <img
                                                src={logo}
                                                width="60px"
                                                height="60px"
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
                                    Reset Password
                                </Typography>
                                <span className={classes.headSecondary}>
                                    Enter altleast 6 characters long password
                                </span>
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
                                    name="password"
                                    label="New Password"
                                    type="password"
                                    id="password"
                                    defaultValue={state.password}
                                    onChange={handlepasswordChange}
                                    {...(errors.password && {
                                        error: true,
                                        helperText: errors.password,
                                    })}
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
                                    name="confirmPassword"
                                    label="Confirm-Password"
                                    type="password"
                                    id="Conpassword"
                                    defaultValue={state.confirmPassword}
                                    onChange={handleConPasswordChange}
                                    {...(errors.confirmPassword && {
                                        error: true,
                                        helperText: errors.confirmPassword,
                                    })}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                            </form>
                            <pre className={classes.footText}>
                                Developed with ❤️ by <a className={classes.anchor} href="/technicalMembers">Genconians</a> | ©️ {year} <a className={classes.anchor} href="https://gndec.ac.in">GNDEC</a>, Ldh.
                            </pre>
                        </Box>
                        <div className={classes.hero}>
                            <SlickCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
