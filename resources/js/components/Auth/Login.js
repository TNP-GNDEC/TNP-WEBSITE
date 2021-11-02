import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "../HomeComponent/SideComponents/Footer";
import Notisfication from "./Notisfication";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useHistory } from "react-router-dom";

import intro from "../../../images/2.jpg";
import logo from "../../../images/logo.png";
import slide1 from "../../../images/slide1.png";
import slide2 from "../../../images/slide2.png";
import slide3 from "../../../images/slide3.png";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.light,
        minHeight: "100vh"
    },
    box: {
        // marginTop: theme.spacing(0)
    },
    container: {
        width: "100%",
        borderRadius: "20px"
    },
    loginCard: {
        width: "75%",
        height: "80vh",
        margin: "auto",
        marginTop: "45px",
        marginBottom: "40px",
        // borderRadius: "20px",
        boxShadow: "0px 15px 25px #00000033",
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
        marginTop: "20px",
        marginBottom: "20px",
        background: "rgb(22,135,217)",
        background:
            "linear-gradient(45deg, rgba(22,135,217,1) 0%, rgba(10,59,204,1) 100%)",
        ["@media (max-width:1000px)"]: {
            display: "none"
        }
    },
    pic: {
        width: "100%",
        borderRadius: "3%"
    },
    paper: {
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
        color: "#193b68",
        fontWeight: "600"
    },
    form: {
        width: "90%", // Fix IE 11 issue.
        margin: theme.spacing(0),
        padding: theme.spacing(1)
    },
    loader: {
        width: "100%",
        textAlign: "center"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: "50px",
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        color: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        backgroundColor: theme.palette.primary.main
    },
    image: {
        borderRadius: "50%",
        marginBottom: "30px"
    },
    mainHead: {
        width: "90%",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2)
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
        alignSelf: "flex-end"
    },
    input: {
        borderRadius: "20px"
    },
    footText: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-end",
        padding: theme.spacing(1),
        marginTop: "40px",
        // marginBottom: "10px"
        ["@media (max-width:1000px)"]: {
            marginTop: "30px",
        }
    },
    slideWrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100%",
    },
    slideImage: {
        height: "280px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "4rem",
        marginBottom: "2rem"
    },
    textWrapper: {
        //
    },
    slideHeading: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        fontFamily: "Open Sans",
        color: "white"
    },
    slideSubtitle: {
        textAlign: "center",
        fontFamily: "Open Sans",
        color: "white",
        fontSize: "22px",
        paddingRight: "100px",
        paddingLeft: "100px"
    },
}));

const SignIn = () => {
    const history = useHistory();
    const classes = useStyles();
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
        autoplaySpeed: 5000,
        draggable: false,
        infinite: true
    };

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.card}>
                <div className={classes.container}>
                    <CssBaseline />
                    <div className={classes.loginCard}>
                        <Box boxShadow={2} className={classes.paper}>
                            <div className={classes.mainHead}>
                                <div className={classes.brand}>
                                    <div>
                                        <Link to="/">
                                            <img
                                                src={logo}
                                                width="75px"
                                                height="75px"
                                                className={classes.image}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <Typography
                                    component="h2"
                                    variant="h4"
                                    className={classes.heading}
                                >
                                    Login
                                </Typography>
                                <span>Welcome Back!!</span>
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
                                    sx={{ borderRadius: "20px" }}
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
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                        >
                                            Login
                                        </Button>
                                    )}
                                </Grid>
                            </form>
                            <p className={classes.footText}>
                                <span>
                                    Developed with ❤️ by Genconians, ©️ 2021
                                    GNDEC, Ldh
                                </span>
                            </p>
                        </Box>
                        <div className={classes.hero}>
                            <Slider {...settings}>
                                <div className={classes.slideWrapper}>
                                    <img
                                        className={classes.slideImage}
                                        src={slide1}
                                        alt="Regular Updates"
                                    />
                                    <div className={classes.textWrapper}>
                                        <p className={classes.slideHeading}>
                                            Regular Updates
                                        </p>
                                        <p className={classes.slideSubtitle}>
                                            Get information and news about new
                                            opportunities and recruitments.
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.slideWrapper}>
                                    <img
                                        className={classes.slideImage}
                                        src={slide2}
                                        alt="Get Notified"
                                    />
                                    <div className={classes.textWrapper}>
                                        <p className={classes.slideHeading}>
                                            Get Notified
                                        </p>
                                        <p className={classes.slideSubtitle}>
                                            Subscribe by clicking on bell prompt
                                            or CTA for latest news and updates.
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.slideWrapper}>
                                    <img
                                        className={classes.slideImage}
                                        src={slide3}
                                        alt="Stay Connected"
                                    />
                                    <div className={classes.textWrapper}>
                                        <p className={classes.slideHeading}>
                                            Stay Connected
                                        </p>
                                        <p className={classes.slideSubtitle}>
                                            Follow & connect with us on linkedin
                                            and other social handles for new
                                            updates.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;
