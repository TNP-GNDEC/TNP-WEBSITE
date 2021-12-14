import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const useStyles = makeStyles(theme => ({
    container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        paddingTop: "15px",
        borderRadius: "15px"
    },
    title: {
        color: theme.palette.primary.dark,
        marginLeft: "20px",
        marginBottom: "40px"
    },
    input_name: {
        color: "#525252",
        fontSize: "22px",
        marginLeft: "3px"
    },
    form: {
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    input_field: {
        marginBottom: "30px",
        padding: "7px 20px",
        borderRadius: "10px",
        border: "2px solid #9c9c9c"
    },
    font_size: {
        fontSize: 20
    },
    btn_class: {
        marginTop: "30px",
        padding: "12px",
        fontSize: "20px",
        borderRadius: "10px",
        fontWeight: "400"
    }
}));

const RegisterUser = () => {
    const classes = useStyles();
    const [loader, setLoader] = useState(false);
    // const [errorCheck, setErrorCheck] = useState(false);
    const [usernameData, setUsernameData] = useState("");
    const [passwordData, setPasswordData] = useState("");

    const handleInput = async e => {
        e.preventDefault();
        setLoader(true);
        await axios
            .post("/api/registeruser", {
                username: usernameData,
                password: passwordData
            })
            .then(res => {
                console.log(res);
                setLoader(false);
                toast.success("User Registered Successfully");
            })
            .catch(error => {
                toast.error("An unexpected error occured");
                console.log(error);
            });
    };
    const handleUsername = e => {
        setUsernameData(e);
    };
    const handlePassword = e => {
        setPasswordData(e);
    };

    return (
        <>
            <Toaster />
            <div className={classes.container}>
                {/* <h2 className={classes.title}>Register New User</h2> */}
                <form className={classes.form} noValidate autoComplete="off">
                    <h3 className={classes.title2}>Username</h3>
                    <TextField
                        id="outlined-basic"
                        // label="Username"
                        name="username"
                        variant="standard"
                        className={classes.input_field}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            classes: {
                                input: classes.font_size
                            }
                        }}
                        placeholder="URN"
                        onChange={e => handleUsername(e.target.value)}
                    />
                    <h3 className={classes.title2}>Password</h3>
                    <TextField
                        id="outlined-basic"
                        //label="Password"
                        name="password"
                        variant="standard"
                        className={classes.input_field}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            classes: {
                                input: classes.font_size
                            }
                        }}
                        placeholder="CRN"
                        onChange={e => handlePassword(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        className={classes.btn_class}
                        type="submit"
                        onClick={handleInput}
                    >
                        {loader ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            "Create User"
                        )}
                    </Button>
                </form>
            </div>
        </>
    );
};
export default RegisterUser;
