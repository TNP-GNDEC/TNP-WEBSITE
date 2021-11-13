import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Notisfication from "./Notisfication";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import SlickCarousel from "./SlickCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useHistory } from "react-router-dom";

import logo from "../../../images/logo.png";


const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.light,
        height: "100vh"
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
            marginTop: "25px"
        }
    },
    hero: {
        width: "60%",
        height: "100%",
        // marginTop: "50px",
        // marginBottom: "20px",
        background:
            "linear-gradient(-45deg, #0A3BCC, #1687d9)",
        ["@media (max-width:1000px)"]: {
            display: "none"
        }
    },
    pic: {
        width: "100%",
        borderRadius: "3%"
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
            width: "100%"
        }
    },
    loader: {
        width: "30%",
        margin: "auto",
        height: "30%",
        textAlign: "center",
        marginTop: "200px"
    },
    icon: {
        fontSize: "90px"
    },
    heading: {
        color: theme.palette.primary.dark,
        fontWeight: "600",
        fontSize: "30px"
    },
    form: {
        width: "80%", // Fix IE 11 issue.
        margin: theme.spacing(0),
        padding: theme.spacing(1),
        ['@media (max-width:600px)']: {
            width: "90%",
            marginTop: "20px"
         },
    },
    loader: {
        width: "100%",
        textAlign: "center",
        marginTop: "25px"
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
            backgroundColor: theme.palette.primary.main
        },
        backgroundColor: theme.palette.primary.main
    },
    image: {
        borderRadius: "50%",
        marginBottom: "50px"
    },
    mainHead: {
        width: "80%",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        ['@media (max-width:600px)']: {
            width: "90%",
        },
    },
    headSecondary: {
        fontSize: "13px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.text
    },
    notchedOutline: {
        borderColor: "#757575"
    },
    focused: {
        borderColor: theme.palette.secondary.main
    },

    link: {
        color: theme.palette.primary.main,
        display: "flex",
        alignSelf: "flex-end",
        fontFamily: "Open Sans"
    },
    anchor:{
        color: theme.palette.primary.text,
        textDecoration: "underline",
    },
    input: {
        borderRadius: "20px"
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
            width: "90%"
        }
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
        marginBottom: "4rem"
    },
    textWrapper: {
        //
    },
    slideHeading: {
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "600",
        fontFamily: "Open Sans",
        color: theme.palette.secondary.main
    },
    slideSubtitle: {
        textAlign: "center",
        fontFamily: "Open Sans",
        color: theme.palette.secondary.main,
        fontSize: "16px",
        paddingRight: "180px",
        paddingLeft: "180px"
    },
}));

const SignIn = () => {
    const history = useHistory();
    const classes = useStyles();
    var dt=new Date();
    var year = dt.getFullYear();
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const [checkAuth, setAuth] = useState(true);
    const [errors, setErrors] = useState({});
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: ""
    });
    const [loading, setLoading] = useState(false);
    const [action, setAction] = useState(true);

    const validate = () => {
        let temp = {};
        temp.username = state.username ? "" : "Required.";
        temp.password =
            state.password.length > 5
                ? ""
                : "Password must be atleast 6 characters long.";
        setErrors({
            ...temp
        });
        var ok = "";
        return Object.keys(temp).every(x => temp[x].valueOf() == ok.valueOf());
    };
    const handlenameChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlepasswordChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const fetchUser = async token => {
        const user = await axios.get(`/api/getUsers`, {
            headers: { Authorization: "Bearer " + token }
        });
        const role = user.data.user["role_id"];
        if (role === 1) {
            //fetchSteps(token);
            alert("Login Server is currently down");
        }
        if (role === 2) {
            history.push("/coordinator");
        }
    };

    const fetchSteps = async token => {
        const step = await axios.get(`/api/formStatus`, {
            headers: { Authorization: "Bearer " + token }
        });
        const form_step = step.data.step["form_step"];
        if (form_step === 6) {
            window.location.href = window.origin + "/verify";
        } else {
            window.location.href = window.origin + "/student";
        }
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleFormSubmit = async event => {
        event.preventDefault();
        if (validate()) {
            setLoading(true);
            axios
                .post("/api/login", {
                    username: state.username,
                    password: state.password
                })
                .then(response => {
                    setLoading(false);
                    if (response.data.alert) {
                        setNotify({
                            isOpen: true,
                            message: response.data.alert,
                            type: "error"
                        });
                    }
                    var user = response.data.current_user;
                    var JWTtoken = response.data.access_token;
                    localStorage.setItem("token", JWTtoken);
                    localStorage.setItem("role", user.role_id);
                    if (user.role_id === 1) {
                        localStorage.setItem("student", user.role_id);
                        fetchSteps(JWTtoken);
                    }
                    if (user.role_id === 2) {
                        localStorage.setItem("admin", user.role_id);
                        window.location.href = window.origin + "/coordinator";
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
    useEffect(() => {
        var istoken = localStorage.getItem("token");
        if (istoken !== null) {
            fetchUser(istoken);
        }
        setAuth(false);
    }, []);
    if (checkAuth) {
        return (
            <div className={classes.root}>
                <div className={classes.loader}>
                    <CircularProgress size="100px" color="#193b68" />
                </div>
            </div>
        );
    }
    var settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        infinite: true
    };

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
                                    Login
                                </Typography>
                                <span className={classes.headSecondary}>Welcome Back!!</span>
                            </div>
                            <form
                                onSubmit={event => handleFormSubmit(event)}
                                className={classes.form}
                            >
                                <Notisfication
                                    notify={notify}
                                    setNotify={setNotify}
                                />
                                <TextField
                                    variant="outlined"
                                    sx={{ borderRadius: "40px" }}
                                    className={classes.input}
                                    InputProps={{
                                        classes: {
                                            notchedOutline:
                                                classes.notchedOutline,
                                            focused: classes.focused
                                        }
                                    }}
                                    margin="normal"
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    defaultValue={state.username}
                                    onChange={handlenameChange}
                                    {...(errors.username && {
                                        error: true,
                                        helperText: errors.username
                                    })}
                                />
                                <TextField
                                    variant="outlined"
                                    className={classes.input}
                                    InputProps={{
                                        classes: {
                                            notchedOutline:
                                                classes.notchedOutline,
                                            focused: classes.focused
                                        }
                                    }}
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    id="standard-adornment-password"
                                    autoComplete="current-password"
                                    defaultValue={state.password}
                                    onChange={handlepasswordChange}
                                    {...(errors.password && {
                                        error: true,
                                        helperText: errors.password
                                    })}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            className={classes.link}
                                            to="/forgetPassword"
                                            variant="body2"
                                        >
                                            Forgot password?
                                        </Link>
                                    </Grid>
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
                                            Login
                                        </button>
                                    )}
                                </Grid>
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
};
export default SignIn;
