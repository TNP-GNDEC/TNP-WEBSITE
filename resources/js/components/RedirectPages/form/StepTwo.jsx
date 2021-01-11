import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import TextFeild from"./TextFeild";
import CusButton from "./CusButton";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormRow from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
    head:{
        color:"#038ed4",
        padding:"20px ",
    },
    paper: {
        padding: theme.spacing(1),
        
        color: theme.palette.text.secondary,
      },
      formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
        
        width:"400px",
        height:"70px",
        
      }, 
      hr:{
          color:"#038ed4",
          font:"2px",
      }
 
}));

export default function StepTwo() {
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
            <h1>Profile Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="First Name" 
                          className={classes.input}
                          type="text"
                          id="fName"
                          name="fName"
                          placeholder="FIRST NAME"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Last Name" 
                          className={classes.input}
                          type="text"
                          id="lName"
                          name="lName"
                          placeholder="LAST NAME"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Date of Birth" 
                          className={classes.input}
                          type=""
                          id="DOB"
                          name="Date of birth"
                          placeholder="YYYY/MM/DD"
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
                          for="Height" 
                          className={classes.input}
                          type="text"
                          id="height"
                          name="height"
                          placeholder="HEIGHT in CM"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Weight" 
                          className={classes.input}
                          type="text"
                          id="Weight"
                          name="Weight"
                          placeholder="WEIGHT IN KGS"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Blood group" 
                          className={classes.input}
                          type=""
                          id="DOB"
                          name="Date of birth"
                          placeholder="BLOOD GROUP "
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
            <h1>Parent's Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Fathers's name" 
                          className={classes.input}
                          type="text"
                          id="Father's Name"
                          name="Father's Name"
                          placeholder="FATHER'S NAME"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Father's Phone No." 
                          className={classes.input}
                          type="text"
                          id="Father's Phone No."
                          name="Father's Phone No."
                          placeholder="FATHER'S PHONE NO."
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Father's Occupation" 
                          className={classes.input}
                          type="text"
                          id="Father's Occupation"
                          name="Father's Occupation"
                          placeholder="FATHER'S OCCUPATION"
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
                          for="Mother's Name" 
                          className={classes.input}
                          type="text"
                          id="Mother's Name"
                          name="Mother's Name"
                          placeholder="MOTHER'S NAME"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Mother's Phone No." 
                          className={classes.input}
                          type="text"
                          id="Mother's Phone No."
                          name="Mother's Phone No."
                          placeholder="MOTHER'S PHONE NO."
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Mother's Occupation" 
                          className={classes.input}
                          type="text"
                          id="Mother's Occupation"
                          name="Mother's Occupation"
                          placeholder="MOTHER'S OCCUPATION "
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
            <h1>Academic Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Universty Roll No." 
                          className={classes.input}
                          type="text"
                          id="Universty Roll No."
                          name="Universty Roll No."
                          placeholder="UNIVERSTY ROLL NO."
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="College Roll No." 
                          className={classes.input}
                          type="text"
                          id="College Roll No."
                          name="College Roll No."
                          placeholder="COLLEGE ROLL NO."
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Hostler / Day Scholar</InputLabel>
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
          <MenuItem value={10}>Hostler</MenuItem>
          <MenuItem value={20}>Day Scholar</MenuItem>
        
        </Select>
        
      </FormControl>
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      </Grid> 
                      <Grid container item xs={12} spacing={1} >
      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
                           <Paper className={classes.paper}>
                           <FormControl className={classes.formControl}>
                           <InputLabel id="demo-controlled-open-select-label">Batch</InputLabel>
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
                             <MenuItem value={10}>2018</MenuItem>
                             <MenuItem value={20}>2019</MenuItem>
                             <MenuItem value={20}>2020</MenuItem>
                           </Select>
                           
                         </FormControl>
                                         </Paper>
                                         <FormRow/>
                                         </Grid> 
                                        
                                         </React.Fragment>
                     
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
                           <Paper className={classes.paper}>
                           <FormControl className={classes.formControl}>
                           <InputLabel id="demo-controlled-open-select-label">Course</InputLabel>
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
                             <MenuItem value={10}>B-Tech</MenuItem>
                             <MenuItem value={20}>M-Tech</MenuItem>
                             <MenuItem value={20}>MCA</MenuItem>
                             <MenuItem value={20}>MBA</MenuItem>
                           </Select>
                           
                         </FormControl>
                                         </Paper>
                                         <FormRow/>
                                         </Grid> 
                                        
                      </React.Fragment>
                      
                      
                     
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
                           <Paper className={classes.paper}>
                           <FormControl className={classes.formControl}>
                           <InputLabel id="demo-controlled-open-select-label">Stream</InputLabel>
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
                             <MenuItem value={10}>Cse</MenuItem>
                             <MenuItem value={20}>IT</MenuItem>
                             <MenuItem value={20}>Mechnical</MenuItem>
                             <MenuItem value={20}>Production</MenuItem>
                           </Select>
                           
                         </FormControl>
                                         </Paper>
                                         <FormRow/>
                                         </Grid> 
                                        
                      </React.Fragment>
                      
                      
                      </Grid>
                      <Grid container item xs={12} spacing={1} >
      
      <React.Fragment>
      <Grid  item xs={4} >
           
           <Paper className={classes.paper}>
           <FormControl className={classes.formControl}>
           <InputLabel id="demo-controlled-open-select-label">Section</InputLabel>
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
             <MenuItem value={10}>A</MenuItem>
             <MenuItem value={20}>B</MenuItem>
             <MenuItem value={20}>C</MenuItem>
             <MenuItem value={20}>E</MenuItem>
           </Select>
           
         </FormControl>
                         </Paper>
                         <FormRow/>
                         </Grid> 
                        
                         </React.Fragment>
     
      
      
      <React.Fragment>
      <Grid  item xs={4} >
           
           <Paper className={classes.paper}>
           <FormControl className={classes.formControl}>
           <InputLabel id="demo-controlled-open-select-label">Shift</InputLabel>
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
             <MenuItem value={10}>Morning</MenuItem>
             <MenuItem value={20}>Evening</MenuItem>
             
           </Select>
           
         </FormControl>
                         </Paper>
                         <FormRow/>
                         </Grid> 
                        
      </React.Fragment>
      
      
     
      <React.Fragment>
      <Grid  item xs={4} >
           
           <Paper className={classes.paper}>
           <FormControl className={classes.formControl}>
           <InputLabel id="demo-controlled-open-select-label">Training Semester</InputLabel>
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
             <MenuItem value={10}>7th</MenuItem>
             <MenuItem value={20}>8th</MenuItem>
             
           </Select>
           
         </FormControl>
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
            <h1>Address Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Address" 
                          className={classes.input}
                          type="text"
                          id="Address"
                          name="Address"
                          placeholder="ADDRESS"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="City" 
                          className={classes.input}
                          type="text"
                          id="City"
                          name="City"
                          placeholder="CITY"
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
                          for="District" 
                          className={classes.input}
                          type="text"
                          id="District"
                          name="District"
                          placeholder="DISTRICT"
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="State" 
                          className={classes.input}
                          type="text"
                          id="State"
                          name="State"
                          placeholder="STATE"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      <React.Fragment>
                      <Grid  item xs={4} >
                           
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Pincode" 
                          className={classes.input}
                          type="text"
                          id="Pincode"
                          name="Pincode"
                          placeholder="PINCODE "
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
            <h1>Contact Details</h1></b>
            </div>
            <Grid container item xs={12} spacing={1} >
        <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Watsaap Contact" 
                          className={classes.input}
                          type="text"
                          id="Watsaap Contact"
                          name="Watsaap Contact"
                          placeholder="WATSAAP CONTACT"
                          
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      <React.Fragment>
    <Grid  item xs={4} >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Phone Number" 
                          className={classes.input}
                          type="text"
                          id="Phone Number"
                          name="Phone Number"
                          placeholder="PHONE NUMBER"
                      />
                      </Paper>
                      <FormRow/>
                      </Grid> 
                     
                      </React.Fragment>
                      
                      
                      
                      
                      
                      <React.Fragment>
    <Grid  item xs={4}  >
        <Paper className={classes.paper}>
                       <TextFeild
                          for="Re-Enter Mobile Number" 
                          className={classes.input}
                          type="text"
                          id="Re-Enter Mobile Number"
                          name="Re-Enter Mobile Number"
                          placeholder="RE-ENTER MOBILE NO."
                      />
                      </Paper>
                     
                      </Grid> 
                      </React.Fragment>
                      
                      </Grid> 

                      </Card>
                      <hr></hr>
                      <Card>
            
    

                      </Card>
                      </Card>

                    
                      
                     
                      
    );
}