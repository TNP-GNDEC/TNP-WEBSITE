import React,{useEffect, useState} from "react";
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { Card, RadioGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PostgraduationDetails from "./Postgraduation";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormLabel from '@material-ui/core/FormLabel';    
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

import Radio from '@material-ui/core/Radio';


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
    pos: {
        float: "right"
    }
}));



export default function StepSix(props) {
    const classes = useStyles();
    const [category ,setCategory] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [loader, setLoader] = React.useState(false);
    const [file, setFile] = React.useState("");

    const [post, setProfile] = React.useState({
        user_id: "",
        institution_name: "",
        city_of_institution: "",
        state_of_institution: "",
        pincode_of_institution: "",
        marks_type: "",
        obtained_marks: "",
        maximum_marks: "",   
    });
   
   
    const handlePostChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...post, user_id: parseInt(value) ? parseInt(value) : "" });
                break;
            case 2:
                setProfile({ ...post, institution_name: value });
                break;
            case 3:
                setProfile({ ...post, city_of_institution: value });
                break;
            case 4:
                setProfile({ ...post, state_of_institution: value });
                break;
            case 5:
                setProfile({ ...post, pincode_of_institution: parseInt(value) ? parseInt(value) : "" });
                break;
            case 6:
                setProfile({ ...post, marks_type: value });
                break;
            case 7:
                setProfile({ ...post, obtained_marks: parseInt(value) ? parseInt(value) : "" });
                break;
            case 8:
                setProfile({ ...post, maximum_marks: parseInt(value) ? parseInt(value) : "" });
                break;
            case 9:
                
                setProfile({ ...post, dmc: value });
                break;
            
            default:
                break;
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
   
    const handleFormSubmit = event => {
        event.preventDefault();
        setLoader(true);
        const token = localStorage.getItem("token");
        const fd = new FormData();
        fd.append('category', category);
        if(category === "post"){
        Object.keys(post).forEach(function (key){         
            fd.append(key, post[key]);
        })
        fd.append('file', document.getElementById('postfile').files[0]);
        }
        axios
            .post(`/api/pgDetails`,
                fd, { headers: {'Authorization': 'Bearer ' + token }  }
                
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
        const res = await axios.get(`/api/pgdetails`, {headers: { 'Authorization': 'Bearer ' + token }  });
        if(res.data.category === "post"){
            setCategory(res.data.category);
            setProfile({
                user_id: res.data.details['user_id'],
                institution_name: res.data.details['institution_name'],
                city_of_institution: res.data.details['city'],
                state_of_institution: res.data.details['state'],
                pincode_of_institution: res.data.details['pincode'],
                marks_type: res.data.details['marks_type'],
                obtained_marks: res.data.details['obtained_marks'],
                maximum_marks: res.data.details['maximum_marks'],
            });
            var fullpath = res.data.details['file'];
            var filename = fullpath.replace(/^.*[\\\/]/,'');
            setFile(filename);
        }
        if(res.data.category === "NA"){
            setCategory(res.data.category);
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
                        Checking the Step 6 - Post Graduation Status
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
                
       <FormControl component="fieldset" className={classes.radio}>
           
           
       
       <RadioGroup row aria-label="category" name="category" value={category} onChange={handleCategoryChange} required >
        <FormLabel component="legend" > Please select Postgraduation or Not applicable under which categorie you fall </FormLabel>
        <FormControlLabel value="post" control={<Radio color="default" />}  label="Post Graduation" />
        <FormControlLabel value="NA" control={<Radio color="default" />}  label="Not Applicable" />
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        category=== "post" ? ( <Grid item xs={12} className={classes.Cardcontainers}>
                    
            <Card className={classes.cardStyles}>

                <PostgraduationDetails
                    Post={post}
                    handleInputChange={handlePostChangeInput}    
                />
                <hr />
                <Alert severity="info" className={classes.alert}>
                Note : Upload <CloudUploadIcon /> Scanned copies of your dmc. (PDF Only)
                            </Alert>
                <input className={classes.fileupload} accept= "application/pdf" id="postfile" type="file" /> 
                <div className={classes.fileShow}>{file === "" ? <p></p> : <p><strong>The File you previously choosed got renamed & stored:</strong> {file}</p>}</div>
            </Card>
        </Grid>) 
        :(<div></div>) 
    }
    {
        category=== "NA" ? ( <Grid item xs={12} className={classes.Cardcontainers} />) 
        :(<div></div>) 
    }
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
