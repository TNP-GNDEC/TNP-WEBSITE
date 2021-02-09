import React,{ useState , useEffect} from "react";
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
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  camelCase,
  capitalCase,
} from "change-case";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Category } from "@material-ui/icons";
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

export default function StepFour(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const [loader, setLoader] = React.useState(false);
    const [category ,setCategory] = React.useState("")

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

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        console.log(category)
      };

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        if(validate()){}
             
        const id=localStorage.getItem("userid")
        const fd = new FormData();
        fd.append('category', category);
        
    if(category=="XII" || category==="both")
    {
        Object.keys(twelfth).forEach(function (key){         
            fd.append(key+"_12", twelfth[key]);
        })
        fd.append('file_12', document.getElementById('twelfthfile').files[0]);
    }

    if(actegory==="diploma" || category==="both"){
        Object.keys(diploma).forEach(function (key){         
            fd.append(key+"_diploma", diploma[key]);
        })
        fd.append('file_diploma', document.getElementById('diplomafile').files[0]);
    }   

       const token = localStorage.getItem("token")
       axios.post(`/api/diplomatwelfth/`, 
            fd, {
                headers: { 'Authorization': 'Bearer ' + token }  }  
            ).then(function (response) {
                console.log(response.data);
                props.Complete();
                props.Next();
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

const fetchDetails = async () => {
    var token= localStorage.getItem("token")
    // const res = await axios.get(`/api/personalDetails/`,{
    //     headers: { 'Authorization': 'Bearer ' + token }});
    //     setProfile({
    //         first_name: capitalCase(res.data.details['first_name']),
    //         last_name: capitalCase(res.data.details['last_name']),
    //         dob: res.data.details['dob'],
    //         height: res.data.details['height'],
    //         weight: res.data.details['weight'],
    //         blood_group: res.data.details['blood_group'],
    //         gender: res.data.details['gender'],
    //         marital_status: res.data.details['marital_status'],
    //         farming_background: res.data.details['farming_background'],
    //         disability: res.data.details['disability'],
    //         aadhar: res.data.details['aadhar']
    //     })
    //     setParent({
    //         father_name: capitalCase(res.data.details['father_name']),
    //         father_phone: res.data.details['father_mobile'],
    //         mother_name: capitalCase(res.data.details['mother_name']),
    //         mother_phone: res.data.details['mother_mobile']
    //     })
    //     setAcademics({
    //         univ_roll: res.data.details['urn'],
    //         college_roll: res.data.details['crn'],
    //         course: res.data.details['category'],
    //         stream: res.data.details['stream'],
    //         section: res.data.details['branch_type'],
    //         shift: res.data.details['shift'],
    //         training_sem: res.data.details['training_sem'],
    //         leet: res.data.details['leet'],
    //         hostler: res.data.details['hostler']
    //     })
    //     setContact({
    //         whatsapp_contact: res.data.details['whatsapp'],
    //         contact: res.data.details['mobile'],
    //         re_enter_contact: res.data.details['mobile']
    //     })
    //     setAddress({
    //         address: capitalCase(res.data.details['address']),
    //         pincode: res.data.details['pincode'],
    //         district: capitalCase(res.data.details['district']),
    //         city: capitalCase(res.data.details['city']),
    //         state: capitalCase(res.data.details['state'])
    //     })

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
                        Checking the Step 1 - 12th/Diploma Status
                    </p>
                </b>
                </div>
            </Card>
        )
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.Cardcontainers}>
            <Card className={classes.cardStyles}>
       <FormControl component="fieldset" className={classes.radio}>
           
           
       
      {/* <RadioGroup aria-label="position" row className={classes.select}>
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
     
        
      </RadioGroup> */}
      <RadioGroup row aria-label="category" name="category" value={category} onChange={handleCategoryChange}>
        <FormControlLabel value="XII" control={<Radio color="default" />}   label="XII" />
        <FormControlLabel value="diploma" control={<Radio color="default" />}   label="Diploma" />
        <FormControlLabel value="both" control={<Radio color="default" />}  label="Both" />
      </RadioGroup>
    </FormControl>
    </Card>
    </Grid>
    {
        category==="XII"  && <Grid item xs={12} className={classes.Cardcontainers}>
                    
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
        category==="diploma" &&  <Grid item xs={12} className={classes.Cardcontainers}>
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
        category === "both" &&
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
            <div className={classes.btnBox}>
                <button className={classes.button} onClick={props.Back}>
                    Back
                </button>
                <button type="submit" className={classes.button}>
                    Submit & Next
                </button>
                </div>
            </form>
        </div>
    );
}
