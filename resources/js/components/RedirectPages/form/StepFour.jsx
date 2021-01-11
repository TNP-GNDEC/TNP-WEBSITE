
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CusButton from "./CusButton";
import TextField from '@material-ui/core/InputLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import form from '@material-ui/core/Button';
import TextFeild from "./TextFeild";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';
import ValidationTextField from '@material-ui/core/Grid';
import LastPageSharpIcon from '@material-ui/icons/LastPageSharp';

const useStyles = makeStyles(theme => ({    
    
    head:
    {
        
        color: "#038ed4",
       color:"#038ed4",
        padding:"20px ",
    },
   
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        
        width:"400px",
        height:"70px",
        
      }, 
      body:{
          margin:"auto",
      },  
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: "10ch",
        }, 
    },
    paper: {
        padding: theme.spacing(1),
        
        color: theme.palette.text.secondary,
      },
      root: {
        flexGrow: 1,
      },
      hr:{
        color:"#038ed4",
        font:"2px",
    }
    
   
}));
export default function StepFour() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    return (
        
      
      
        <Card>
        <Card>
            <div className={classes.head}>
                <b>
            <h1>XII Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
            <React.Fragment>
                        <Grid  item xs={4} >
                             
                             <Paper className={classes.paper}>
                             <FormControl className={classes.formControl}>
                             <InputLabel id="demo-controlled-open-select-label">BOARD</InputLabel>
                             <Select
                               labelId="demo-controlled-open-select-label"
                               id="demo-controlled-open-select"
                               open={open}
                               onClose={handleClose}
                               onOpen={handleOpen}
                               value={age}
                               onChange={handleChange}
                             >
                               <MenuItem value="">
                                 <em>None</em>
                               </MenuItem>
                               <MenuItem value={10}>The Central Board of Secondary Education (CBSE)</MenuItem>
                               <MenuItem value={20}>Punjab State Electricity Board (PSEB)</MenuItem>
                               <MenuItem value={20}>The Indian Certificate of Secondary Education (ICSE)</MenuItem>
                               
                             </Select>
                             
                           </FormControl>
                                           </Paper>
                                           <FormRow/>
                                           </Grid> 
                                          
                        </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Institute Name" 
                          className={classes.input}
                          type="text"
                          id="Institute Name"
                          name="Institute Name"
                          placeholder="INSTITUTE NAME"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="JEE Rank * Fill NA if Not Appeared " 
                          className={classes.input}
                          type="text"
                          id="JEE Rank * Fill NA if Not Appeared"
                          name="JEE Rank * Fill NA if Not Appeared"
                          placeholder="JEE Rank"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      </Grid> 
                      <Grid container item xs={12} spacing={1} >
                      <React.Fragment>
                        <Grid  item xs={4} >
                             
                             <Paper className={classes.paper}>
                             <TextFeild
                          for="Year Of Passing" 
                          className={classes.input}
                          type="text"
                          id="Year Of Passing"
                          name="Year Of Passing"
                          placeholder="YEAR OF PASSING"
                      />
  
                             
                                           </Paper>
                                           <FormRow/>
                                           </Grid> 
                                          
                        </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Obtained Marks" 
                          className={classes.input}
                          type="text"
                          id="Obtained Marks"
                          name="Obtained Marks"
                          placeholder="OBTAINED MARKS"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Maximum Marks" 
                          className={classes.input}
                          type="text"
                          id="Maximum Marks"
                          name="Maximum Marks"
                          placeholder="MAXIMUM MARKS "
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      </Grid> 
  
                      </Card>
                      <hr></hr>
                      <Card>
            <div className={classes.head}>
                <b>
            <h1>Diploma Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
                             <InputLabel id="demo-controlled-open-select-label">BOARD</InputLabel>
                             <Select
                               labelId="demo-controlled-open-select-label"
                               id="demo-controlled-open-select"
                               open={open}
                               onClose={handleClose}
                               onOpen={handleOpen}
                               value={age}
                               onChange={handleChange}
                             >
                               <MenuItem value="">
                                 <em>None</em>
                               </MenuItem>
                               <MenuItem value={10}>The Central Board of Secondary Education (CBSE)</MenuItem>
                               <MenuItem value={20}>Punjab State Electricity Board (PSEB)</MenuItem>
                               <MenuItem value={20}>The Indian Certificate of Secondary Education (ICSE)</MenuItem>
                               
                             </Select>
                             
                           </FormControl>
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Institute Name" 
                          className={classes.input}
                          type="text"
                          for="Institute Name" 
                          id="Institute Name"
                          name="Institute Name"
                          placeholder="INSTITUTE NAME"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Year of Passing" 
                          className={classes.input}
                          type="text"
                          id="Year of Passing"
                          name="Year of Passing"
                          placeholder="Year of Passing"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      </Grid> 
                      <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Obtained Marks" 
                          className={classes.input}
                          type="text"
                          id="Obtained Marks"
                          name="Obtained Marks"
                          placeholder="OBTAINED MARKS"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Maximum Marks" 
                          className={classes.input}
                          type="text"
                          id="Maximum Marks"
                          name="Maximum Marks"
                          placeholder="MAXIMUM MARKS"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
       
                      
                      </Grid> 

                      </Card>
                   
                      
                      </Card>
         
    );
}