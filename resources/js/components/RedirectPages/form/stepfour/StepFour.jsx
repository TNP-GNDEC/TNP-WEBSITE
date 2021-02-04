import React,{ useState } from "react";
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { Card, FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TwelfthDetails from './Twelfthdetails'
import DiplomaDetails from './Diplomadetails'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';    
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(3),

        color: theme.palette.text.primary,
        background:"#F0F0F0 ",
        margin:"20px",
       
        
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,

        width: "400px",
        height: "70px"
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
    },
    note:{
        justifyContent: "center",
       },
      
    
}));

export default function StepTwo() {
    const classes = useStyles();
    const [checkbox ,setCheckbox] = React.useState({
        XII:"0",
        diploma:"0",
        both:"0"
    })

    const [twelfth, setProfile] = React.useState({
        board: "",
        institution_name:"",
        jee_rank :"",
        city:"",
        state:"",
        pincode:"",
        year_of_passing: "",
        obtained_marks:"",
        maximum_marks:"",
        marks_type: ""
        // file:"(upload scanned certificate)",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {}
        temp.board = twelfth.board ? "": "This field is required."
        temp.institution_name = twelfth.institution_name? "": "This field is required."
        temp.jee_rank = twelfth.jee_rank? "": "This field is required."
        temp.marks_type = twelfth.marks_type ? "": "This field is required."
        
        temp.year_of_passing = twelfth.year_of_passing ? "": "This field is required."
        temp.institution_name = twelfth.institution_name? "": "This field is required."
        
        temp.city = twelfth.city ? "": "This field is required."
        temp.state = twelfth.state ? "": "This field is required."
        temp.pincode = twelfth.pincode ? "": "This field is required."
        temp.obtained_marks = twelfth.obtained_marks ? "": "This field is required."
        
        temp.maximum_marks = twelfth.maximum_marks ? "": "This field is required."

        temp.branch = diploma.branch ? "": "This field is required."
        temp.institution_name = diploma.institution_name? "": "This field is required."
        
        temp.marks_type = diploma.marks_type ? "": "This field is required."
        
        temp.year_of_passing = diploma.year_of_passing ? "": "This field is required."
        temp.institution_name = diploma.institution_name? "": "This field is required."
        
        temp.city = diploma.city ? "": "This field is required."
        temp.state = diploma.state ? "": "This field is required."
        temp.pincode = diploma.pincode ? "": "This field is required."
        temp.obtained_marks = diploma.obtained_marks ? "": "This field is required."
        
        temp.maximum_marks = diploma.maximum_marks ? "": "This field is required."
        temp.stream = diploma.stream ? "": "This field is required."
        setErrors({
          ...temp
        })
        console.log(errors);
        return true
      }

    const [diploma, setParent] = React.useState({
        branch:"",
        institution_name:"",
        pincode:"",
        city:"",
        state:"",
        year_of_passing:"",
        obtained_marks:"",
        maximum_marks: "",
        stream:"",
        file:"(upload scanned certificate)",
      
    });

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        if(validate()){}
             
        const id=localStorage.getItem("userid")
        const fd = new FormData();
        Object.keys(checkbox).forEach(function (key){         
            fd.append(key, checkbox[key]);
        })
        if(checkbox.both==="1"){
        
        Object.keys(twelfth).forEach(function (key){         
            fd.append(key+"_12", twelfth[key]);
        })
        fd.append('file_12', document.getElementById('twelfthfile').files[0]);

        Object.keys(diploma).forEach(function (key){         
            fd.append(key+"_diploma", diploma[key]);
        })
        fd.append('file_diploma', document.getElementById('diplomafile').files[0]);
    }
    else if(checkbox.XII==="1")
    {
        Object.keys(twelfth).forEach(function (key){         
            fd.append(key+"_12", twelfth[key]);
        })
        fd.append('file_12', document.getElementById('twelfthfile').files[0]);
    }
    else{
        Object.keys(diploma).forEach(function (key){         
            fd.append(key+"_diploma", diploma[key]);
        })
        fd.append('file_diploma', document.getElementById('diplomafile').files[0]);
    }
       axios.post(`/api/diplomatwelfth/${id}`, 
            fd    
            ).then(function (response) {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
    
      
    const handleProfileChangeInput = (e, id) => {
        const name= e.target.name
        const value= e.target.value   
        setProfile(prevState => ({
            ...prevState,
            [name] : value
        }))


    };
       
    const handleParentChangeInput = (e, id) => {
        const name= e.target.name
        const value= e.target.value   
        setParent(prevState => ({
            ...prevState,
            [name] : value
        }))


    };

    // const handleParentChangeInput = (e, id) => {
    //     const value = e.target.value;
    //     switch (id) {
    //         case 1:
    //             setParent({ ...diploma, branch: value });
    //             break;
    //         case 2:
    //             setParent({ ...diploma, institution_name: value });
    //             break;
    //         case 3:
    //             setParent({ ...diploma, city:value });
    //             break;
    //         case 4:
    //             setParent({ ...diploma,    state:value });
    //             break;
    //         case 5:
    //             setParent({ ...diploma, pincode: value });
    //             break;
    //         case 6:
    //             setParent({ ...diploma, year_of_passing: value });
    //             break;
    //         case 7:
    //             setParent({ ...diploma, obtained_marks: value });
    //             break;
    //         case 8:
    //             setParent({ ...diploma, maximum_marks: value });
    //             break;
    //         case 9:
    //             setParent({ ...diploma, stream: value });
    //             break;
    //         case 10:
    //             setParent({ ...diploma, file: e.target.files});
    //             break;
                    
    //         default:
    //             break;
    //     }
    // };
       
const handleXIIClick = () => {
    setCheckbox({
        XII:"1",
       diploma:"0",
    both:"0"

    })
}

const handleDiplomaClick = () => {
    setCheckbox({
        diploma:"1",
        XII:"0",
        both:"0"

    })
}

const handleBothClick = () => {
    setCheckbox({
        both:"1",
        XII:"0",
        diploma: "0"

    })
}


    React.useEffect(() => {
        console.log("Do something after profile has changed", diploma);
    }, [diploma]);
    React.useEffect(() => {
        console.log("Do something after profile has changed", twelfth);
    }, [twelfth]);
    const renderPersonalFields = () =>
        fields.map(field => (
            <>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField
                        className={classes.input}
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        defaultValue={field.value}
                        onChange={e => {
                            field.change(e, field.id);
                        }}
                    />

                </Grid>
            </>
        ));
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.Cardcontainers}>
            <Card className={classes.cardStyles}>
       <FormControl component="fieldset" className={classes.radio}>
           
           
       
      <RadioGroup aria-label="position" row className={classes.select}>
      <FormLabel component="legend" > Please select XII or Diploma or both under which category you fall </FormLabel>
        <FormControlLabel onClick ={handleXIIClick}
          value="0"
          control={<Radio color="primary" />}
          label="XII"
          labelPlacement="start"
        />
        <FormControlLabel onClick ={handleDiplomaClick}
          value="1"
          control={<Radio color="primary" />}
          label="Diploma"
          labelPlacement="start"
        />
        <FormControlLabel onClick ={handleBothClick}
          value="2"
          control={<Radio color="primary" />}
          label="Both"
          labelPlacement="start"
        />
     
        
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        checkbox.XII=== "1"  && <Grid item xs={12} className={classes.Cardcontainers}>
                    
            <Card className={classes.cardStyles}>


                <TwelfthDetails 
                twelfth={twelfth} 
                handleInputChange={handleProfileChangeInput}
                Errors= {errors}
                />
                <hr />
                <Alert severity="info" className={classes.alert}>
                            Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    twelfth certificates.(PDF Only)
                            </Alert>
                <input className={classes.fileupload} onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="twelfthfile" type="file" /> 
            </Card>
        </Grid>
    }
{
        checkbox.diploma ==="1" &&  <Grid item xs={12} className={classes.Cardcontainers}>
            <Card className={classes.cardStyles}>
                <DiplomaDetails 
                diploma={diploma} 
                handleInputChange={handleParentChangeInput}
                Errors= {errors}
                /> 
                <hr />
                <Alert severity="info" className={classes.alert}>
                            Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    Diploma certificates.(PDF Only)
                            </Alert>
                <input className={classes.fileupload} onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="diplomafile" type="file" /> 
            </Card>
        </Grid>
    }

    {
        checkbox.both === "1" &&
        <>
        <Grid item xs={12} className={classes.Cardcontainers}>
            <Card className={classes.cardStyles}>
                <DiplomaDetails 
                diploma={diploma} 
                handleInputChange={handleParentChangeInput}
               
                Errors= {errors}
                /> 
                <hr />
                <Alert severity="info" className={classes.alert}>
                            Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    Diploma certificates.(PDF Only)
                            </Alert>
                <input className={classes.fileupload} onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="diplomafile" type="file" /> 
            </Card>
        </Grid>
        <Grid item xs={12} className={classes.Cardcontainers}>
                    
            <Card className={classes.cardStyles}>


                <TwelfthDetails 
                twelfth={twelfth} 
                handleInputChange={handleProfileChangeInput}
                Errors= {errors}
                />
                <hr />
                <Alert severity="info" className={classes.alert}>
                            Note : Upload <CloudUploadIcon/> Scanned copies of your
                                    twelfth certificates.(PDF Only)
                            </Alert>
                <input className={classes.fileupload} onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="twelfthfile" type="file" /> 
            </Card>
        </Grid>
        </>
    }
            </Grid>
            <Button className={classes.pos} type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </form>
        </div>
    );
}
