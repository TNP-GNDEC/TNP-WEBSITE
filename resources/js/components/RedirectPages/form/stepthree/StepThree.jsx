import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import '../../../../../css/app.css';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MatriculationDetails from "./matriculation";
import Notification from '../../../Auth/Notisfication';
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
    loader:{
        padding: "20px"
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
    fileShow:{
        width: "90%",
        margin: "auto"
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
        marginTop: "10px",
        margin: "auto",
        width: "90%",
      },
    fileupload:{
        width: "90%",
        marginLeft: "60px",
        padding: "2px 0 20px"
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
    const [DBfile, setDBfile] = React.useState("");
    const [path, setPath] = React.useState("");
    const [loader, setLoader] = React.useState(false);
    const [notify, setNotify] = useState({isOpen:false, message:"", type:""});
    const [matriculation, setmatric] = React.useState({
        board: "",
        institution_name: "",
        state: "",
        city: "",
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
        temp.board = matriculation.board ? "": "This field is required"
        temp.institution_name = matriculation.institution_name? "": "This field is required and must contain only char."
        temp.year_of_passing = (/^[0-9]{4}$/).test(matriculation.year_of_passing) ? "": "This field is required and be in yyyy format."
        temp.marks_type = matriculation.marks_type ? "": "This field is required."
        temp.state = (/^[a-zA-Z\s]*$/).test(matriculation.state) && matriculation.state? "": "This field is required and must contain only char."
        temp.city = (/^[a-zA-Z\s]*$/).test(matriculation.city) && matriculation.city? "": "This field is required and must contain only char."
        temp.obtained_marks = (/^[0-9]{1,4}$/).test(matriculation.obtained_marks) ? "": "This field is required."
        temp.pincode = (/^[0-9]{6}$/).test(matriculation.pincode) ? "": "This field is required and must be exactly 6 digits."
        temp.maximum_marks = (/^[0-9]{1,4}$/).test(matriculation.maximum_marks) ? "": "This field is required."
        
        if(matriculation.marks_type == "1"){
            temp.obtained_marks = parseFloat(matriculation.obtained_marks)>=0   && parseFloat(matriculation.obtained_marks)<=10  ? "" : "Enter a valid cgpa Value (hint: between 0 to 10)"
            temp.maximum_marks = parseFloat(matriculation.maximum_marks) == "10"?"":"Maximum percentage should be 100. "

        }else{

            temp.obtained_marks = parseFloat( matriculation.obtained_marks ) <= parseFloat(matriculation.maximum_marks) && parseFloat(matriculation.obtained_marks)>0 ? "": "marks obtained can't be greater than maximum marks."

        }


        setErrors({
          ...temp
        })
        var filter =  Object.keys(temp);
        var ok = "";
        return filter.every(x => temp[x].valueOf() === ok.valueOf());
      }

    const handleFormSubmit = event => {
        event.preventDefault();
        if(validate()){
            if(document.getElementById('file').files[0]){
                var fileExt = /(\.pdf)$/i;
                var filePath = document.getElementById('file').value;
                var fileSize = document.getElementById('file').files[0].size / 1024 / 1024;
                if(!fileExt.exec(filePath)){
                    setNotify({ isOpen: true, message: "Invalid File Format, Please upload file having extension .pdf", type: "error" });
                    return;
                }
                if (fileSize > 1) {
                    setNotify({ isOpen: true, message: "File Size should be less than 1 MB.", type: "error" });
                    return;
                }
            }
            setLoader(true);
            const token = localStorage.getItem("token");
            const fd = new FormData();
            Object.keys(matriculation).forEach(function (key){         
                fd.append(key, matriculation[key]);
            })
            if(document.getElementById('file').files[0]){
                fd.append('file', document.getElementById('file').files[0]);
            }
            axios.post(`/api/matriculation`, 
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

    const handleChange = (e) => {
        var pdf = e.target.files[0];
        setfile(pdf);
    }

    const handleMatriculationChangeInput = (e) => {
        
        const name= e.target.name
        const value= e.target.value   

        if(name === "marks_type"){
            if(value === "1" )
            setmatric(prevState => ({
                ...prevState,
                marks_type : value,
                maximum_marks : 10
            }))
                
        }

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
                state: res.data.details['state'],
                city: res.data.details['city'],
                year_of_passing: res.data.details['year_of_passing'],
                marks_type: res.data.details['marks_type'],
                pincode: res.data.details['pincode'],
                obtained_marks: res.data.details['obtained_marks'],
                maximum_marks: res.data.details['maximum_marks'],
            })
            var fullpath = res.data.details['file'];
            setPath(fullpath);
            if(fullpath){
                var filename = fullpath.split('\\').pop().split('/').pop();
                setDBfile(filename);
            }
        setLoading(false);
    }
    
    useEffect(()=> {
        fetchDetails();
    },[])

    useEffect( ()=>{
        console.log("")
    }, [matriculation] )
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
                                    matriculation certificates.(PDF Only less than 1MB)
                            </Alert>
                            <div className={classes.alert}>{DBfile === "" ? <p></p> : <p><strong>The File you previously choosed got renamed & stored:</strong> {DBfile}. <strong>Choose to replace previous file.</strong></p>}</div>
                            <div className={classes.alert}><Notification notify={notify} setNotify={setNotify} className={classes.alert} /></div>
                            <input className={classes.fileupload} onChange={ (e) => handleChange(e) } accept= "application/pdf" id="file" type="file" required={DBfile=== ""? true: false} />   
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
