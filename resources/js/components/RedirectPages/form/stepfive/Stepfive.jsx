import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, RadioGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PostgraduationDetails from "./Postgraduation";
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Degreedetails from "./Degree";
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';    
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from "@material-ui/core/Button";

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
    const [checkbox ,setCheckbox] = React.useState({
        degree:"0",
        postgraduation:"0",
        both:"0",
    })

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
                    setDegree({ ...degree, sgpa_sem1st_sem: value });
                    break;
                case 3:
                    setDegree({ ...degree, credits_sem1st_sem: value });
                    break;
                case 4:
                    setDegree({ ...degree, sgpa_sem2nd_sem: value });
                    break;
                case 5:
                    setDegree({ ...degree, credits_sem2nd_sem: value });
                    break;
                case 6:
                    setDegree({ ...degree, sgpa_sem3rd_sem:value });
                    break;
                case 7:
                    setDegree({ ...degree, credits_sem3rd_sem: value });
                    break;
                case 8:
                    setDegree({ ...degree, sgpa_sem4_sem: value });
                    break;
                case 9:
                    
                    setDegree({ ...degree, credits_sem4: value });
                    break;
                    case 10:
                    setDegree({ ...degree, sgpa_sem5: value });
                    break;
                case 11:
                    setDegree({ ...degree, credits_sem5: value });
                    break;
                case 12:
                    setDegree({ ...degree, sgpa_sem6: value });
                    break;
                case 13:
                    setDegree({ ...degree, credits_sem6: value });
                    break;
                case 14:
                    setDegree({ ...degree, sgpa_sem6:value });
                    break;
                case 15:
                    setDegree({ ...degree, credits_sem7: value });
                    break;
                case 16:
                    setDegree({ ...degree, sgpa_sem8: value });
                    break;
                case 17:
                    setDegree({ ...degree, credits_sem8: value });
                    break;
                case 18:
                    
                    setDegree({ ...degree, aggregate_sgpa: value });
                    break;
                case 19:
                    
                    setDegree({ ...degree, aggregate_credits: value });
                    break;
                case 20:
                    
                    setDegree({ ...degree, aggregate_percentage: value });
                    break;
                    case 20:
                    
                        setDegree({ ...degree, dmc: value });
                        break;
            default:
                break;
        }
    };
   
const handeldegreeclick = () => {
    setCheckbox({
        degree:"1",
postgraduation:"0",
both:"0",

    })
}
const handelpostgraduationclick = () => {
    setCheckbox({
        postgraduation:"1",
        degree:"0",


    })
}
const handelbothclick = () => {
    
    setCheckbox({
        both:"1",
        degree:"0",
        postgraduation:"0",


    })
}


    
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
                <Card>
                
       <FormControl component="fieldset">
           
           
       
      <RadioGroup row aria-label="position" color="primary">
        <FormControlLabel onClick = {handelpostgraduationclick} 
        
          value="a"
          control={<Radio color="primary"  />}
          label="Postgraduation"
          labelPlacement="start"
        />
        <FormControlLabel onClick ={handeldegreeclick} 
          value="b"
          control={<Radio color="primary" />}
          label="Degree"
          labelPlacement="start"
        />
         <FormControlLabel onClick ={handelbothclick} 
          value="c"
          control={<Radio color="primary"   />}
          label="Both "
          labelPlacement="start"
        />
   
       <FormLabel component="legend"><code>  * please select Postgraduation or Degree or Both under which categorie you fall *  </code></FormLabel>
     
        
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        checkbox.postgraduation=== "1" || checkbox.both ==="1" ? ( <Grid item xs={10} className={classes.Cardcontainers}>
                    
            <Card className={classes.cardStyles}>
           

                <PostgraduationDetails
                    Post={post}
                    handleInputChange={handlePostChangeInput}
                />
                <Paper variant="outlined" elevation={3} className={classes.note}>
                <code> Note : Upload <CloudUploadIcon /> Scanned copies of your dmc. </code>
            </Paper>
            </Card>
        </Grid>) 
        :(<div></div>) 
    }
    {
        checkbox.degree=== "1" || checkbox.both ==="1" ? ( <Grid item xs={10} className={classes.Cardcontainers}>
          
            <Card className={classes.cardStyles}>
                <Degreedetails
                    Degree={degree}
                    handleInputChange={handleDegreeChangeInput}
                />
                <Paper variant="outlined" elevation={3} className={classes.note}>
                <code> Note : Upload <CloudUploadIcon /> Scanned copies of your all 8 semester dmc's in one file. </code>
            </Paper>
            </Card>

        </Grid>) 
        :(<div></div>) 
    }


                    {/* <Grid item xs={10} className={classes.Cardcontainers}>
                    
                        <Card className={classes.cardStyles}>
                       
        
                            <PostgraduationDetails
                                Post={post}
                                handleInputChange={handlePostChangeInput}
                            />
                            <Paper variant="outlined" elevation={3} className={classes.note}>
                            <code> Note : Upload <CloudUploadIcon /> Scanned copies of your dmc. </code>
                        </Paper>
                        </Card>
                    </Grid> */}
                    {/* <Grid item xs={10} className={classes.Cardcontainers}>
                    {
                        checkbox.postgraduation
                    }
                                        {
                        checkbox.degree
                    }
                                        {
                        checkbox.both
                    }
                    <Card className={classes.cardStyles}>
                        <Degreedetails
                            Degree={degree}
                            handleInputChange={handleDegreeChangeInput}
                        />
                        <Paper variant="outlined" elevation={3} className={classes.note}>
                        <code> Note : Upload <CloudUploadIcon /> Scanned copies of your all 8 semester dmc's in one file. </code>
                    </Paper>
                    </Card>

                </Grid> */}
                  


                    
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
