import React,{ useState, useEffect } from "react";
import { Alert } from '@material-ui/lab';
import '../../../../../css/app.css';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MatriculationDetails from "./matriculation";
import FormRow from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    heading: {
        paddingTop: "20px"
    },
    para:{
        color: "#000"
    },
    box: {
        margin: "30px auto 60px",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
        ['@media (max-width:960px)']: {
            width: "90%"
          }
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
        width: "90%",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033"
    },
    alert: {
        margin: "auto",
        width: "90%",
      },
    fileupload:{
        width: "90%",
        marginLeft: "60px",
        padding: "20px 0"
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
    },
    btnBox:{
        width: "90%",
        margin: "20px auto",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    button: {
        // marginRight: theme.spacing(1)
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus":{
            outline: "none"
        },
        "&:hover":{
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
}));

export default function StepThree(props) {
    const classes = useStyles();
    const [file, setfile] = React.useState("");
    const [loader, setLoader] = React.useState(false);
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
        setErrors({
          ...temp
        })
        var filter =  Object.keys(temp);
        var ok = "";
        return filter.every(x => temp[x].valueOf() === ok.valueOf());
      }

    const handleFormSubmit = event => {
        event.preventDefault();
        setLoader(true);
        if(validate()){
        const token = localStorage.getItem("token");
        const fd = new FormData();
        Object.keys(matriculation).forEach(function (key){         
            fd.append(key, matriculation[key]);
    })
        fd.append('file', document.getElementById('file').files[0]);
        axios.post(`/api/matriculation/`, 
            fd,{
                headers: { 'Authorization': 'Bearer ' + token }  }
            
        ).then((response) => {
            setLoader(false);
            if(response.data.msg === "stepcomplete"){
                props.Complete();
                props.Next();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
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
    const [loading, setLoading] = React.useState(true);
    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/matriculationdata`, {headers: { 'Authorization': 'Bearer ' + token }  });
            setmatric({
                board: res.data.details['board'],
                institution_name: res.data.details['institution_name'],
                state_of_institution: res.data.details['state'],
                city_of_institution: res.data.details['city'],
                year_of_passing: res.data.details['year_of_passing'],
                marks_type: res.data.details['marks_type'],
                pincode: res.data.details['pincode'],
                obtained_marks: res.data.details['obtained_marks'],
                maximum_marks: res.data.details['maximum_marks'],
            })

        setLoading(false);
    }
    
    useEffect(()=> {
        fetchDetails();
    },[])
    return (
        <div>
            {loading ? (
                <Card className={classes.box}>
                <div className={classes.heading}>
                <div className={classes.loader}>
                <CircularProgress color="#193b68" size="80px" />
                </div>
                <b>
                    <p className={classes.para}>
                        Checking the Step 3 - Matriculation Details Status
                    </p>
                </b>
                </div>
              </Card>
            ):(
            <form onSubmit={handleFormSubmit}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <MatriculationDetails
                                matriculation={matriculation}
                                handleInputChange={
                                    handleMatriculationChangeInput
                                }
                                Errors= {errors}
                            />
                            <hr />
                            <Alert severity="info" className={classes.alert}>
                            Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    matriculation certificates.(PDF Only)
                            </Alert>
                            <input className={classes.fileupload} onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="file" type="file" required /> 
                        </Card>
                    </Grid>
                </Grid>
                <div className={classes.btnBox}>
                <button className={classes.button} onClick={props.Back}>
                    Back
                </button>
                {loader ? (
                            
                            <CircularProgress />
                        ):(
                <button type="submit" className={classes.button}>
                    Submit & Next
                </button>
                        )}
                </div>
            </form>
            )}
        </div>
    );
}
