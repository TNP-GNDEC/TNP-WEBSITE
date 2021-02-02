import React,{ useState } from "react";
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
    },
    note:{
        justifyContent: "center",
       },
      
    
}));

export default function StepTwo() {
    const classes = useStyles();
    const [file, setfile] = React.useState("");
    const [checkbox ,setCheckbox] = React.useState({
        XII:"0",
        diploma:"0",
    })

    const [twelfth, setProfile] = React.useState({
        board: "",
        institution_name:"",
        jee_rank :"",
        city_of_institute:"",
        state_of_institute:"",
        pincode:"",
        year_of_passing: "",
        obtained_marks:"",
        maximum_marks:"",
        // file:"(upload scanned certificate)",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {}
        temp.board = twelfth.board ? "": "This field is required."
        temp.institution_name = twelfth.institution_name? "": "This field is required."
        temp.jee_rank = twelfth.jee_rank? "": "This field is required."
        // temp.marks_type = twelfth.marks_type ? "": "This field is required."
        
        temp.year_of_passing = twelfth.year_of_passing ? "": "This field is required."
        temp.institution_name = twelfth.institution_name? "": "This field is required."
        
        temp.city_of_institution = twelfth.city_of_institution ? "": "This field is required."
        temp.state_of_institution = twelfth.state_of_institution ? "": "This field is required."
        temp.pincode = twelfth.pincode ? "": "This field is required."
        temp.obtained_marks = twelfth.obtained_marks ? "": "This field is required."
        
        temp.maximum_marks = twelfth.maximum_marks ? "": "This field is required."
        
        setErrors({
          ...temp
        })
        console.log(errors);
        return true
      }

    const [diploma, setParent] = React.useState({
        board:"",
        institution_name:"",
        city_of_institute:"",
        state_of_institute:"",
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
        const fdTwelfth = new FormData();
        Object.keys(twelfth).forEach(function (key){         
            fdTwelfth.append(key, twelfth[key]);
        })
        fdTwelfth.append('file', document.getElementById('twelfthfile').files[0]);
        const fdDiploma = new FormData();
        Object.keys(diploma).forEach(function (key){         
            fdDiploma.append(key, diploma[key]);
        })
        fdDiploma.append('file', document.getElementById('dimplomafile').files[0]);
        axios.post(`/api/diplomatwelfth/${id}`, 
            fdDiploma,
            fdTwelfth,    
            ).then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        };
    
      

    const handleProfileChangeInput = (e, id) => {
        console.log("I am called");
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...twelfth,  board: value });
                break;
            case 2:
                setProfile({ ...twelfth,  institution_name: value });
                break;
            case 3:
                setProfile({ ...twelfth, jee_rank : value });
                break;
            case 4:
                setProfile({ ...twelfth, city_of_institute:value });
                break;
            case 5:
                setProfile({ ...twelfth,  state_of_institute:value });
                break;
            case 6:
                setProfile({ ...twelfth,  year_of_passing:value });
                break;
                case 7:
                    setProfile({ ...twelfth,    obtained_marks:value });
                    break;
                    case 8:
                setProfile({ ...twelfth,  maximum_marks:value });
                break;
                case 9:
                setProfile({ ...twelfth, file: e.target.files});
                break;
            default:
                break;
        }
    };

    const handleParentChangeInput = (e, id) => {
        console.log("I am called for parent");
        const value = e.target.value;
        switch (id) {
            case 1:
                setParent({ ...diploma, board: value });
                break;
            case 2:
                setParent({ ...diploma, institution_name: value });
                break;
            case 3:
                setParent({ ...diploma,  city_of_institute:value });
                break;
            case 4:
                setParent({ ...diploma,    state_of_institute:value });
                break;
            case 5:
                setParent({ ...diploma, pincode_of_institution: value });
                break;
            case 6:
                setParent({ ...diploma, year_of_passing: value });
                break;
            case 7:
                setParent({ ...diploma, obtained_marks: value });
                break;
            case 8:
                setParent({ ...diploma, maximum_marks: value });
                break;
            case 9:
                setParent({ ...diploma, stream: value });
                break;
            case 10:
                setParent({ ...diploma, file: e.target.files});
                break;
                    
            default:
                break;
        }
    };
       
const handelXIIclick = () => {
    setCheckbox({
        XII:"1",
       diploma:"0",


    })
}
const handeldiplomaclick = () => {
    setCheckbox({
        diploma:"1",
        XII:"0",


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
            <Card>
       <FormControl component="fieldset">
           
           
       
      <RadioGroup aria-label="position" row>
        <FormControlLabel onClick ={handelXIIclick}
          value="a"
          control={<Radio color="primary" />}
          label="XII"
          labelPlacement="start"
        />
        <FormControlLabel onClick ={handeldiplomaclick}
          value="b"
          control={<Radio color="primary" />}
          label="Diploma"
          labelPlacement="start"
        />
   
       <FormLabel component="legend" ><code>  * please select XII or Diploma under which categorie you fall *  </code> </FormLabel>
     
        
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        checkbox.XII=== "1"  ? ( <Grid item xs={10} className={classes.Cardcontainers}>
                    
            <Card className={classes.cardStyles}>


                <TwelfthDetails 
                twelfth={twelfth} 
                handleInputChange={handleProfileChangeInput}
                Errors= {errors}
                />
                <label htmlFor="file">File Upload:</label>
                <input onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="twelfthfile" type="file" /> 
                <Paper variant="outlined" elevation={3} className={classes.note}>
                    <code>Note : Upload <CloudUploadIcon /> Scanned copies of your twelfth certificates. </code>
                </Paper>
            </Card>
        </Grid>) 
        :(<div></div>) 
    }
{
        checkbox.diploma ==="1" ? ( <Grid item xs={10} className={classes.Cardcontainers}>
            <Card className={classes.cardStyles}>
                <DiplomaDetails 
                diploma={diploma} 
                handleInputChange={handleParentChangeInput}
                /> 
                <label htmlFor="file">File Upload:</label>
                <input onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="diplomafile" type="file" /> 
                <Paper variant="outlined" elevation={3} className={classes.note}>
                    <code>Note : Upload <CloudUploadIcon /> Scanned copies of your Diploma certificates. </code>
                </Paper>
            </Card>
        </Grid>) 
        :(<div></div>) 
    }

        
                {/* <Grid item xs={10} className={classes.Cardcontainers}>
                    
                    <Card className={classes.cardStyles}>
      
        
                        <TwelfthDetails 
                        twelfth={twelfth} 
                        handleInputChange={handleProfileChangeInput}
                        />
                        <label htmlFor="file">File Upload:</label>
                        <input onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="twelfthfile" type="file" /> 
                        <Paper variant="outlined" elevation={3} className={classes.note}>
                            <code>Note : Upload <CloudUploadIcon /> Scanned copies of your twelfth certificates. </code>
                        </Paper>
                    </Card>
                </Grid> */}

                {/* <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                        <DiplomaDetails 
                        diploma={diploma} 
                        handleInputChange={handleParentChangeInput}
                        /> 
                        <label htmlFor="file">File Upload:</label>
                        <input onChange={ (e) => handleChange(e.target.files) } accept= "application/pdf" id="diplomafile" type="file" /> 
                        <Paper variant="outlined" elevation={3} className={classes.note}>
                            <code>Note : Upload <CloudUploadIcon /> Scanned copies of your Diploma certificates. </code>
                        </Paper>
                    </Card>
                </Grid> */}

                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                    </Card>
                </Grid>
            </Grid>
            <Button className={classes.pos} type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </form>
        </div>
    );
}
