import React,{useState, useEffect} from "react";
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Degreedetails from "./Degree";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,

    },
    hr: {
        color: "#038ed4",
        font: "2px"
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
        width: "100%",
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
    fileShow:{
        width: "90%",
        margin: "auto"
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
    radio:{
        width: "100%",
        padding: "10px",
    },
    pos: {
        float: "right"
    },
    heading: {
        paddingTop: "20px"
    },
    para:{
        color: "#000"
    },
    loader:{
        padding: "10px"
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
}));



export default function StepFive(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const [loader, setLoader] = React.useState(false);
    const [file, setFile] = React.useState("");
    const [degree, setDegree] = React.useState({
        credits_sem1 : "",
        credits_sem2 : "",
        credits_sem3 : "",
        credits_sem4 : "",
        credits_sem5 : "",
        credits_sem6 : "",
        credits_sem7 : "",
        credits_sem8 : "",
        sgpa_sem1 : "",
        sgpa_sem2 : "",
        sgpa_sem3 : "",
        sgpa_sem4 : "",
        sgpa_sem5 : "",
        sgpa_sem6 : "",
        sgpa_sem7 : "",
        sgpa_sem8 : "",
        aggregate_sgpa : "",
        aggregate_credits : "",
        aggregate_percentage : "",
    });
   
    const handleDegreeChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            // case 1:
            //     setDegree({ ...degree, user_id:  parseInt(value) ? parseInt(value) : ""  });
            //     break;
            case 2:
                setDegree({ ...degree, sgpa_sem1:  value});
                break;
            case 3:
                setDegree({ ...degree, credits_sem1: value});
                break;
            case 4:
                setDegree({ ...degree, sgpa_sem2: value});
                break;
            case 5:
                setDegree({ ...degree, credits_sem2: value});
                break;
            case 6:
                setDegree({ ...degree, sgpa_sem3: value});
                break;
            case 7:
                setDegree({ ...degree, credits_sem3: value});
                break;
            case 8:
                setDegree({ ...degree, sgpa_sem4: value});
                break;
            case 9:
                setDegree({ ...degree, credits_sem4: value});
                break;
            case 10:
                setDegree({ ...degree, sgpa_sem5: value});
                break;
            case 11:
                setDegree({ ...degree, credits_sem5: value});
                break;
            case 12:
                setDegree({ ...degree, sgpa_sem6: value});
                break;
            case 13:
                setDegree({ ...degree, credits_sem6: value});
                break;
            case 14:
                setDegree({ ...degree, sgpa_sem7: value });
                break;
            case 15:
                setDegree({ ...degree, credits_sem7: value});
                break;
            case 16:
                setDegree({ ...degree, sgpa_sem8: value});
                break;
            case 17:
                setDegree({ ...degree, credits_sem8: value });
                break;
            case 18:
                setDegree({ ...degree, aggregate_sgpa: value  });
                break;
            case 19: 
                setDegree({ ...degree, aggregate_credits: value  });
                break;
            case 20:
                setDegree({ ...degree, aggregate_percentage: value });
                break;
            default:
                break;
        }
    };

    
    const handleFormSubmit = event => {
        event.preventDefault();
        setLoader(true);  
        const token = localStorage.getItem("token");
        const fd = new FormData();
        Object.keys(degree).forEach(function (key){         
            fd.append(key, degree[key]);
    })
        fd.append('file', document.getElementById('degreefile').files[0]);
        axios
            .post(`/api/degreeDetails`, 
                fd,{
                    headers: { 'Authorization': 'Bearer ' + token }
                }
            )
            .then(response => {
                setLoader(false);
                props.Complete();
                props.Next();
            })
            .catch(error => {
                console.log(error);
            });
    };
    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/degreedetails`, {headers: { 'Authorization': 'Bearer ' + token }  });
        if(res.data.details !== "error"){
            setDegree({
                credits_sem1 : res.data.details['credits_sem1'],
                credits_sem2 : res.data.details['credits_sem2'],
                credits_sem3 : res.data.details['credits_sem3'],
                credits_sem4 : res.data.details['credits_sem4'],
                credits_sem5 : res.data.details['credits_sem5'],
                credits_sem6 : res.data.details['credits_sem6'],
                credits_sem7 : res.data.details['credits_sem7'],
                credits_sem8 : res.data.details['credits_sem8'],
                sgpa_sem1 : res.data.details['sgpa_sem1'],
                sgpa_sem2 : res.data.details['sgpa_sem2'],
                sgpa_sem3 : res.data.details['sgpa_sem3'],
                sgpa_sem4 : res.data.details['sgpa_sem4'],
                sgpa_sem5 : res.data.details['sgpa_sem5'],
                sgpa_sem6 : res.data.details['sgpa_sem6'],
                sgpa_sem7 : res.data.details['sgpa_sem7'],
                sgpa_sem8 : res.data.details['sgpa_sem8'],
                aggregate_sgpa : res.data.details['aggregate_sgpa'],
                aggregate_credits : res.data.details['aggregate_credits'],
                aggregate_percentage : res.data.details['aggregate_percentage'],
            });
            var fullpath = res.data.details['file'];
            var filename = fullpath.replace(/^.*[\\\/]/,'');
            setFile(filename);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchDetails();
    },[])

    if(loading){
        return(
            <Card className={classes.box}>
                <div className={classes.heading}>
                    <div className={classes.loader}>
                <CircularProgress color="#193b68" size="80px" />
                </div>
                <b>
                    <p className={classes.para}>
                        Checking the Step 5 - Degree Status
                    </p>
                </b>
                </div>
            </Card>
        )
    }
    return (
        <div>
            <form onSubmit={event => handleFormSubmit(event)}>
              
                <Grid container className={classes.container}>
         <Grid item xs={12} className={classes.Cardcontainers}>
          
            <Card className={classes.cardStyles}>
                <Degreedetails
                    Degree={degree}
                    handleInputChange={handleDegreeChangeInput}
                />
                 <hr />
                <Alert severity="info" className={classes.alert}>
                Note : Upload <CloudUploadIcon /> Scanned copies of your all 8 semester dmc's in one file.(PDF Only)
                            </Alert>
                <input className={classes.fileupload} accept= "application/pdf" id="degreefile" type="file" /> 
                <div className={classes.fileShow}>{file === "" ? <p></p> : <p><strong>The File you previously choosed got renamed & stored:</strong> {file}</p>}</div>
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
        </div>
    );
}
