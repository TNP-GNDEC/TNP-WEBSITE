import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MatriculationDetails from "./matriculation";
import FormRow from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.primary,
        background: "#F0F0F0 ",
        margin: "20px"
    },

    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    cardStyles: {
        paddding: "18px 20px"
    },
    file: {
        paddding: "10px 20px "
    },
    uploadbox: {
        backgroundColor: "#F0F0F0 ",
        borderRadius: "8px",
        alignContent: "center",
        width: "230px",
        height: "70px",
        display: "block",
        paddding: "40px 0px 0px 400px"
    },
    line: {
        color: "038ed4",
        fontsize: "6px"
    },
    note: {
        justifyContent: "center"
    },
    pos: {
        float: "right"
    }
}));

export default function StepThree() {
    const classes = useStyles();
    const [file, setfile] = React.useState("");
    const [matriculation, setmatric] = React.useState({
        board: "",
        institution_name: "",
        state_of_institution: "",
        city_of_institution: "",
        year_of_passing: "",
        marks_type: "",
        pincode:"",
        obtained_marks: "",
        maximum_marks: "",
        // file: ""
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {}
        temp.board = matriculation.board ? "": "This field is required."
        temp.institution_name = matriculation.institution_name? "": "This field is required."
        temp.year_of_passing = matriculation.year_of_passing ? "": "This field is required."
        temp.marks_type = matriculation.marks_type ? "": "This field is required."
        temp.state_of_institution = matriculation.state_of_institution ? "": "This field is required."
        temp.city_of_institution = matriculation.city_of_institution ? "": "This field is required."
        temp.obtained_marks = matriculation.obtained_marks ? "": "This field is required."
        temp.pincode = matriculation.pincode ? "": "This field is required."
        temp.maximum_marks = matriculation.maximum_marks ? "": "This field is required."
        temp.pincode = matriculation.pincode ? "": "This field is required."
        setErrors({
          ...temp
        })
        console.log(errors);
        return true
      }

    const handleFormSubmit = event => {
        event.preventDefault();
        if(validate()){}
        const id = localStorage.getItem("userid");
        const fd = new FormData();
        Object.keys(matriculation).forEach(function (key){         
            fd.append(key, matriculation[key]);
    })
        fd.append('file', document.getElementById('file').files[0]);
        axios.post(`/api/matriculation/${id}`, 
            fd
        ).then(function (response) {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    const handleMatriculationChangeInput = (e, id) => {
        console.log("I am called");
        
        const name= e.target.name
        const value= e.target.value   
        setmatric(prevState => ({
            ...prevState,
            [name] : value
        }))


    };

    React.useEffect(() => {
        console.log("Do something after matric has changed", matriculation);
    }, [matriculation]);
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Grid container className={classes.container}>
                    <Grid item xs={10} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <MatriculationDetails
                                matriculation={matriculation}
                                handleInputChange={
                                    handleMatriculationChangeInput
                                }
                                Errors= {errors}
                            />
                        <label for="file">File Upload:</label>
                        <input onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="file" type="file" />
                            <Paper
                                variant="outlined"
                                elevation={3}
                                className={classes.note}
                            >
                                <code>
                                    Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    matriculation certificates.{" "}
                                </code>
                            </Paper>
                        </Card>
                    </Grid>
                </Grid>
                <Button
                    className={classes.pos}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
