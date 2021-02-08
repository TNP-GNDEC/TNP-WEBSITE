import React from "react";
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
    pos: {
        float: "right"
    }
}));



export default function StepTwo() {
    const classes = useStyles();
    const [checkbox ,setCheckbox] = React.useState({
        postgraduation:"0",
        skip:"0",
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
    });
   
   
    const handlePostChangeInput = (e, id) => {
        console.log("I am called");
        console.log(e);
        console.log(id);
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

const handelpostgraduationclick = () => {
    setCheckbox({
        postgraduation:"1",
        skip:"0",
    })
}
const handelskipclick = () => {
    setCheckbox({
        skip:"1",
        postgraduation:"0",
    })
}
   
    const handleFormSubmit = event => {
        event.preventDefault();
        const id = localStorage.getItem("userid");
        const fd = new FormData();
        Object.keys(post).forEach(function (key){         
            fd.append(key, post[key]);
    })
        fd.append('file', document.getElementById('postfile').files[0]);
        console.log(parent);
        axios
            .post(`/api/postdetails`,
                fd, { headers: {'Authorization': 'Bearer ' + token }  }
                
            )
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
                <Grid item xs={12} className={classes.Cardcontainers}>
                <Card className={classes.cardStyles}>
                
       <FormControl component="fieldset" className={classes.radio}>
           
           
       
      <RadioGroup row aria-label="position" color="primary">
      <FormLabel component="legend" > Please select Postgraduation or Not applicable under which categorie you fall </FormLabel>
        <FormControlLabel onClick = {handelpostgraduationclick} 
        
          value="a"
          control={<Radio color="primary"  />}
          label="Postgraduation"
          labelPlacement="start"
        />
         <FormControlLabel onClick ={handelskipclick} 
          value="c"
          control={<Radio color="primary"   />}
          label="Not applicable "
          labelPlacement="start"
        />
     
        
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        checkbox.postgraduation=== "1" && checkbox.skip ==="0" ? ( <Grid item xs={12} className={classes.Cardcontainers}>
                    
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
            </Card>
        </Grid>) 
        :(<div></div>) 
    }
    {
        checkbox.postgraduation=== "0" && checkbox.skip ==="1" ? ( <Grid item xs={12} className={classes.Cardcontainers} />) 
        :(<div></div>) 
    }
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
