import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, RadioGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PostgraduationDetails from "./Postgraduation";
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


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

   


    
    const handleFormSubmit = event => {
        event.preventDefault();
        const id = localStorage.getItem("userid");
        console.log(parent);
        axios
            .post(`/api/postdetails/${id}`, {
                post: post,
                
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
