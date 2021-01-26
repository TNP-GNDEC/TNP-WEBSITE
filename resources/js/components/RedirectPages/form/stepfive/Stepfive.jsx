import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, RadioGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PostgraduationDetails from "./Postgraduation";
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Degreedetails from "./Degree";

import Button from "@material-ui/core/Button";


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
    pos: {
        float: "right"
    }
}));


export default function StepTwo() {
    const classes = useStyles();
    
    const [post, setProfile] = React.useState({
        user_id: "",
        institution_name: "",
        city_of_institution: "",
        state_of_institution: "",
        pincode_of_institution: "",
        marks_type: "",
        obtained_marks: "",
        maximum_marks: "",
        dmc:""
   
    });


    const [degree, setDegree] = React.useState({
        user_id: "",
        institution_name: "",
        city_of_institution: "",
        state_of_institution: "",
        pincode_of_institution: "",
        marks_type: "",
        obtained_marks: "",
        maximum_marks: "",
        dmc:""
   
    });


  

    const handlePostChangeInput = (e, id) => {
        console.log("I am called");
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...post, user_id: value });
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
                setProfile({ ...post, pincode_of_institution: value });
                break;
            case 6:
                setProfile({ ...post, marks_type: value });
                break;
            case 7:
                setProfile({ ...post, obtained_marks: value });
                break;
            case 8:
                setProfile({ ...post, maximum_marks: value });
                break;
            case 9:
                
                setProfile({ ...post, dmc: value });
                break;
            
            default:
                break;
        }
    };
    const handleDegreeChangeInput = (e, id) => {
        console.log("I am called for parent");
        const value = e.target.value;
        switch (id) {
            case 1:
                setDegree({ ...degree, user_id: value });
                
                break;
                case 2:
                    setDegree({ ...degree, sgpa_of_1st_sem: value });
                    break;
                case 3:
                    setDegree({ ...degree, credits_of_1st_sem: value });
                    break;
                case 4:
                    setDegree({ ...degree, sgpa_of_2nd_sem: value });
                    break;
                case 5:
                    setDegree({ ...degree, credits_of_2nd_sem: value });
                    break;
                case 6:
                    setDegree({ ...degree, sgpa_of_3rd_sem:value });
                    break;
                case 7:
                    setDegree({ ...degree, credits_of_3rd_sem: value });
                    break;
                case 8:
                    setDegree({ ...degree, sgpa_of_4th_sem: value });
                    break;
                case 9:
                    
                    setDegree({ ...degree, credits_of_4th_sem: value });
                    break;
                    case 10:
                    setDegree({ ...degree, sgpa_of_5th_sem: value });
                    break;
                case 11:
                    setDegree({ ...degree, credits_of_5th_sem: value });
                    break;
                case 12:
                    setDegree({ ...degree, sgpa_of_6th_sem: value });
                    break;
                case 13:
                    setDegree({ ...degree, credits_of_6th_sem: value });
                    break;
                case 14:
                    setDegree({ ...degree, sgpa_of_7th_sem:value });
                    break;
                case 15:
                    setDegree({ ...degree, credits_of_7th_sem: value });
                    break;
                case 16:
                    setDegree({ ...degree, sgpa_of_8th_sem: value });
                    break;
                case 17:
                    setDegree({ ...degree, credits_of_8th_sem: value });
                    break;
                case 18:
                    
                    setDegree({ ...degree, aggregate_of_sgpa: value });
                    break;
                case 19:
                    
                    setDegree({ ...degree, aggregate_of_credits: value });
                    break;
                case 20:
                    
                    setDegree({ ...degree, aggregate_of_percentage: value });
                    break;
                    case 20:
                    
                        setDegree({ ...degree, dmc: value });
                        break;
            default:
                break;
        }
    };
   


    
    const handleFormSubmit = event => {
        event.preventDefault();
        const id = localStorage.getItem("userid");
        console.log(parent);
        axios
            .post(`/api/postdetails/${id}`, {
                post: post,
                degree: degree,
                
            })
            .then(response => {
                var user = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

 
    React.useEffect(() => {
        console.log("Do something after postgraduation has changed", post);
    }, [post]);
    React.useEffect(() => {
        console.log("Do something after  has changed", degree);
    }, [degree]);
   

    return (
        <div>
            <form onSubmit={event => handleFormSubmit(event)}>
              
                <Grid container className={classes.container}>
           
                    <Grid item xs={10} className={classes.Cardcontainers}>
                    
                        <Card className={classes.cardStyles}>
                            <PostgraduationDetails
                                Post={post}
                                handleInputChange={handlePostChangeInput}
                            />
                            <Paper variant="outlined" elevation={3} className={classes.note}>
                            <code> Note : Upload <CloudUploadIcon /> Scanned copies of your dmc. </code>
                        </Paper>
                        </Card>
                    </Grid>
                    <Grid item xs={10} className={classes.Cardcontainers}>
                    
                    <Card className={classes.cardStyles}>
                        <Degreedetails
                            Degree={degree}
                            handleInputChange={handleDegreeChangeInput}
                        />
                        <Paper variant="outlined" elevation={3} className={classes.note}>
                        <code> Note : Upload <CloudUploadIcon /> Scanned copies of your all 8 semester dmc's in one file. </code>
                    </Paper>
                    </Card>
                </Grid>
                  


                    
                </Grid>
                <Button
                    className={classes.pos}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleFormSubmit}
                >
                    SUBMIT
                </Button>
            </form>
        </div>
    );
}
