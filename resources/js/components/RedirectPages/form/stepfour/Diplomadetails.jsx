import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        backgroundColor: "#038ed459",
    }, 
    textFieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px 0px",
        width: "30%",
    },
    inputs:{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "10px 0px",
        width: "100%",
    },
    fields:{
        width: "80%",
        margin: "auto"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533",
      },
      focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
      },
   
   
}));

export default function DiplomaDetails(props) {
    const classes = useStyles();
    
        
          const currencies2 = [
            {
                value: "1",
                label: "CGPA"
            },
            {
                value: "2",
                label: "PERCENTAGE"
            }
    
        ];

    const renderDiplomaFields = (
        // fields.map(field => (
        //     <>
            <Grid container>
                <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                     <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "BRANCH"
                        type="text"
                        id= "1"
                        name= "branch"
                        defaultValue= {props.diploma.branch}
                        variant="outlined"
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.branch && {error:true, helperText:props.Errors.branch})}
                    >
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "INSTITUTION NAME"
                        type= "text"
                        id= "2"
                        name= "institution_name"
                        defaultValue= {props.diploma.institution_name}                        
                        variant="outlined"
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.institution_name && {error:true, helperText:props.Errors.institution_name})}
                    >
                        
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "CITY OF INSTITUTION"
                        type= "text"
                        id= "3"
                        name= "city"
                        defaultValue= {props.diploma.city}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.city && {error:true, helperText:props.Errors.city})}
                    >
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "STATE OF INSTITUTION"
                        type= "text"
                        id= "4"
                        name= "state"
                        defaultValue= {props.diploma.state}
                        
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.state && {error:true, helperText:props.Errors.state})}
                    >
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "PINCODE OF INSTITUTION"
                        type= "text"
                        id= "5"
                        name= "pincode"
                        defaultValue= {props.diploma.pincode}
                        
                        
                        variant="outlined"
                        
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.pincode && {error:true, helperText:props.Errors.pincode})}
                    >
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "YEAR OF PASSING"
                        type= "text"
                        id= "6"
                        name= "year_of_passing"
                        defaultValue= {props.diploma.year_of_passing}
                        
                        
                        variant="outlined"
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.year_of_passing && {error:true, helperText:props.Errors.year_of_passing})}
                    >
                        
                    </TextField>
                    </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "MARKS TYPE"
                        type= "text"
                        id= "7"
                        name= "marks_type"
                        defaultValue= {props.diploma.marks_type}
                        select="true"
                        variant="outlined"
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.marks_type && {error:true, helperText:props.Errors.marks_type})}
                       
                    >
                     {currencies2.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}    
                    </TextField>
                    </Grid>

                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "OBTAINED MARKS"
                        type= "text"
                        id= "9"
                        name= "obtained_marks"
                        defaultValue= {props.diploma.obtained_marks}
                        variant="outlined"
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.obtained_marks && {error:true, helperText:props.Errors.obtained_marks})}
                    >
                        
                    </TextField>                   
                </Grid>
                    <Grid item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField 
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        label= "MAXIMUM MARKS"
                        type= "text"
                        id= "8"
                        name= "maximum_marks"
                        value= {props.diploma.maximum_marks}
                        
                        
                        variant="outlined"
                        disabled={props.diploma.marks_type === "1" ? true : false}
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.maximum_marks && {error:true, helperText:props.Errors.maximum_marks})}
                    >
                        
                    </TextField>
                    </Grid>

                {(props.diploma.marks_type == "2") && (parseFloat(props.diploma.obtained_marks) > 0) && (parseFloat(props.diploma.maximum_marks)) > 0 ?
                <Grid
                    xs={12}
                    sm={6}
                    lg={4}
                    item
                    className={classes.textFieldContainer}
                >

                    <TextField
                        className={classes.fields}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                            }
                        }}
                        label="PERCENTAGE"
                        type="text"
                        id="10"
                        name="percentage"
                        value={((parseFloat(props.diploma.obtained_marks) / parseFloat(props.diploma.maximum_marks)) * 100).toFixed(2) }
                        variant="outlined"
                        disabled={true}

                    >

                    </TextField>
                </Grid>
                : ""
            }
</Grid>
                   
           
        )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Diploma Details
            </Typography>
            <CardContent>
                {renderDiplomaFields}
            </CardContent>
           
        </>
    );
}