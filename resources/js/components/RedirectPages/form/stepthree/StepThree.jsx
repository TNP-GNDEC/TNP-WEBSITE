import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MatriculationDetails from './matriculation';
import FormRow from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px ",
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.primary,
        background:"#F0F0F0 ",
        margin:"20px",
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
    file:{
        paddding:"10px 20px ",
        
      },
      uploadbox:{
       backgroundColor:"#F0F0F0 ",
       borderRadius:"8px",
     alignContent:"center",
     width:"230px",
     height:"70px",
     display:"block",
paddding:"40px 0px 0px 400px"
    },
    line:{

       color:"038ed4",
       fontsize:"6px",
    },
   note:{
    justifyContent: "center",
   }
}));

export default function StepThree() {


    const classes = useStyles();

    const [matriculation, setmatric] = React.useState({
        BOARD: "",
        INSTITUTION_NAME: "",
         YEAR_OF_PASSING:"",
        MARKS_TYPE:"",
        OBTAINED_MARKS: "",
        MAXIMUM_MARKS: "",
        file: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();        
        const id=localStorage.getItem("userid")
        axios.post(`/api/matriculation/${id}`, {
            matriculation: matriculation,    
      })}

    const handleMatriculationChangeInput = (e, id) => {
        console.log("I am called");
        const value = e.target.value;
        switch (id) {
            case 1:
                setmatric({ ...matriculation,  BOARD:value });
                break;
            case 2:
                setmatric({ ...matriculation, INSTITUTION_NAME:value });
                break;
                case 3:
                    setmatric({ ...matriculation, CITY_OF_INSTITUTION: value });
                    break;
                    case 4:
                        setmatric({ ...matriculation, STATE_OF_INSTITUTION: value });
                        break;
            case 5:
                setmatric({ ...matriculation, YEAR_OF_PASSING:value });
                break;
                
            case 6:
                setmatric({ ...matriculation, MARKS_TYPE: value });
                break;
            case 7:
                setmatric({ ...matriculation, OBTAINED_MARKS:  value });
                break;
            case 8:
                setmatric({ ...matriculation,  MAXIMUM_MARKS:value });
                break;
                case 9:
                   setmatric({ ...matriculation,  FILE:value });
                   break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        console.log("Do something after matric has changed", matriculation);
    }, [matriculation]);
    const renderMatricFields = () => {
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
                        value={field.value}
                        onChange={e => {
                            field.change(e, field.id);
                        }}

                    />
 

                </Grid>
            </>
        ));
                    }
    return (
        
        <div>
            <form onSubmit={handleFormSubmit}>
            <Grid container className={classes.container}>
                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                        <MatriculationDetails Matriculation={matriculation} handleInputChange={handleMatriculationChangeInput}/>
                        <Paper variant="outlined" elevation={3} className={classes.note}>
                            <code>Note : Upload Scanned copies of your matriculation certificates. </code>
                        </Paper>
                    </Card>
                </Grid>
               
            </Grid>
            <Button type="submit">
                Submit
            </Button>
            </form>
        </div>
        
    );
}