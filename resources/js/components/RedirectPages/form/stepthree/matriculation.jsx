import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px 0px",
        width: "100%",
    },
    inputs:{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "20px 0px",
        width: "100%",
    }
}));

export default function matriculationDetails(props) {
    const classes = useStyles();

    

    const currencies = [
        {
            value: "1",
            label: "CBSE"
        },
        {
            value: "2",
            label: "ICSE"
        },
        {
            value: "3",
            label: "PSEB"
        }
    ];
    const currency2 = [
        {
            value: "1",
            label: "cgpa"
        },
        {
            value: "2",
            label: "percentage"
        }

    ];

    const fields = [
        {
            label: "BOARD",
            type: "text",
            id: 1,
            name: "board",
            value: props.matriculation.board,
            select: "true"
        },

        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            name: "institution_name",
            value: props.matriculation.institution_name
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 3,
            name: "city_of_institution",
            value: props.matriculation.city_of_institution
        },
        {
            label: "STATE OF INSTITUTION",
            type: "text",
            id: 4,
            name: "state_of_institution",
            value: props.matriculation.state_of_institution
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 5,
            name: "pincode",
            value: props.matriculation.pincode
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 6,
            name: "year_of_passing",
            value: props.matriculation.year_of_passing
        },
        {
            label: "MARKS TYPE",
            type: "text",
            id: 7,
            name: "marks_type",
            value: props.matriculation.marks_type
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 8,
            name: "obtained_marks",
            value: props.matriculation.obtained_marks
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 9,
            name: "maximum_marks",
            value: props.matriculation.maximum_marks
        },
        // {
        //     label: "",
        //     type: "file",
        //     id: 10,
        //     accept: "application/pdf",
        //     name: "file",
        //     defaultValue: props.matriculation.file
        // }
    ];


    const rendermatriculationFields = (
        // fields.map(field => (
        //     <>
  <Grid
                    
                    container
                
                    className={classes.textFieldContainer}
                >
                    <div className={classes.inputs}>
                    <TextField 
                        
                        label= "BOARD"
                        type="text"
                        id= "1"
                        name= "board"
                        value= {props.matriculation.board}
                        select= "true"
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.board && {error:true, helperText:props.Errors.board})}
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        
                    </TextField>
                    <TextField 
                        
                        label= "INSTITUTION NAME"
                        type= "text"
                        id= "2"
                        name= "institution_name"
                        value= {props.matriculation.institution_name}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.institution_name && {error:true, helperText:props.Errors.institution_name})}
                    >
                        
                    </TextField>
                    <TextField 
                        
                        label= "CITY OF INSTITUTION"
                        type= "text"
                        id= "3"
                        name= "city_of_institution"
                        value= {props.matriculation.city_of_institution}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.city_of_institution && {error:true, helperText:props.Errors.city_of_institution})}
                    >
                        
                    </TextField>
                    </div>
                        
                    <div className={classes.inputs}>
                    <TextField 
                        
                        label= "STATE OF INSTITUTION"
                        type= "text"
                        id= "4"
                        name= "state_of_institution"
                        value= {props.matriculation.state_of_institution}
                        
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.state_of_institution && {error:true, helperText:props.Errors.state_of_institution})}
                    >
                        
                    </TextField>

                    <TextField 
                        
                        label= "PINCODE OF INSTITUTION"
                        type= "text"
                        id= "5"
                        name= "pincode"
                        value= {props.matriculation.pincode}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.pincode && {error:true, helperText:props.Errors.pincode})}
                    >
                        
                    </TextField>

                    <TextField 
                        
                        label= "YEAR OF PASSING"
                        type= "text"
                        id= "6"
                        name= "year_of_passing"
                        value= {props.matriculation.year_of_passing}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.year_of_passing && {error:true, helperText:props.Errors.year_of_passing})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>
                    <TextField 
                        
                        label= "MARKS TYPE"
                        type= "text"
                        id= "7"
                        name= "marks_type"
                        value= {props.matriculation.marks_type}
                        select="true"
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.marks_type && {error:true, helperText:props.Errors.marks_type})}
                        >
                        {currency2.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}

                        
                    
                        
                    </TextField>

                    <TextField 
                        
                        label= "OBTAINED MARKS"
                        type= "text"
                        id= "8"
                        name= "obtained_marks"
                        value= {props.matriculation.obtained_marks}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.obtained_marks && {error:true, helperText:props.Errors.obtained_marks})}
                    >
                        
                    </TextField>

                    <TextField 
                        
                        label= "MAXIMUM MARKS"
                        type= "text"
                        id= "9"
                        name= "maximum_marks"
                        value= {props.matriculation.maximum_marks}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.maximum_marks && {error:true, helperText:props.Errors.maximum_marks})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>

                    <TextField 
                        
                        label= ""
                        type= "file"
                        id= "10"
                        accept= "application/pdf"
                        name= "file"
                        defaultValue= {props.matriculation.file}
                        inputProps={{ accept: ".pdf" }}
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.city_of_institution && {error:true, helperText:props.Errors.city_of_institution})}
                    >
                        
                    </TextField>
                    </div>
                </Grid>
            
        )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Matriculation Details
            </Typography>
            <CardContent>

                <Grid container>{rendermatriculationFields}</Grid>

            </CardContent>
        </>
    );
}
