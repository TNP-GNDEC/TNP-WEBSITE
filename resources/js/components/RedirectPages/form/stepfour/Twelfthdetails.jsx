import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';

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
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    inputs:{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "20px 0px",
        width: "100%",
    }
}));

export default function TwelfthDetails(props) {
    const classes = useStyles();
    const currencies = [
        {
            value:'1',
            label:'CBSE',
        },
        {
            value:'2',
            label:'ICSE',
        },
        {
            value:'2',
            label:'PSEB',
        }
      ];
    const fields = [
        {
            label: "BOARD",
            type: "text",
            id: 1,
            // name: "first_name",
            value: props.twelfth.board,
            select: "true",
            options: [
                
                {
                    value:"ONE",
                    label:"CBSE",
                },
                {
                    value:"TWO",
                    label:"ICSE",
                },
                {
                    value:"THREE",
                    label:"PSEB",
                }
            ]
        },
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            value: props.twelfth.institution_name,
        },
        {
            label: "JEE RANK * FILL NA IF NOT APPERRED",
            type: "text",
            id: 3,
            value: props.twelfth.jee_rank,
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 4,
            value: props.twelfth.city_of_institution,
        },
        {
            label: "STATE OF INSTITUTION",
            type: "text",
            id: 5,
            value: props.twelfth.state_of_institution,
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 6,
            value: props.twelfth.pincode,

        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 7,
            value: props.twelfth.year_of_passing,

        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 8,
            value: props.twelfth.obtained_marks,
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 9,
          
            value: props.twelfth.maximum_marks,
        },
        // {
        //     label:"",
        //     type: "file",
        //     id: 10,
        //     inputid:"pdf-file",
        //     value: props.twelfth.file,  
        // }
    ];

    const rendertwelfthFields  = (
        // fields.map(field => (
        //     <>
                <Grid    container
                
                    // item
                    // xs={12}
                    // sm={6}
                    // lg={4}
                    className={classes.textFieldContainer}
                >
                    <div className={classes.inputs}>
                     <TextField 
                        
                        label= "BOARD"
                        type="text"
                        id= "1"
                        name= "board"
                        defaultValue= {props.twelfth.board}
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
                        defaultValue= {props.twelfth.institution_name}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.institution_name && {error:true, helperText:props.Errors.institution_name})}
                    >
                        
                        
                    </TextField>
                    <TextField 
                        
                        label= "JEE RANK * FILL NA IF NOT APPERRED"
                        type= "text"
                        id= "3"
                        name= "jee_rank"
                        defaultValue= {props.twelfth.jee_rank}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.jee_rank && {error:true, helperText:props.Errors.jee_rank})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>
                    <TextField 
                        
                        label= "CITY OF INSTITUTION"
                        type= "text"
                        id= "4"
                        name= "city_of_institution"
                        defaultValue= {props.twelfth.city_of_institution}
                        
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.city_of_institution && {error:true, helperText:props.Errors.city_of_institution})}
                    >
                        
                    </TextField>
                    <TextField 
                        
                        label= "STATE OF INSTITUTION"
                        type= "text"
                        id= "5"
                        name= "state_of_institution"
                        defaultValue= {props.twelfth.state_of_institution}
                        
                        
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
                        id= "6"
                        name= "pincode"
                        defaultValue= {props.twelfth.pincode}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.pincode && {error:true, helperText:props.Errors.pincode})}
                    >
                        
                    </TextField>
                    </div>
                    <div className={classes.inputs}>
    <TextField
                    label= "MAXIMUM MARKS"
                        type= "text"
                        id= "7"
                        name= "maximum_marks"
                        defaultValue= {props.twelfth.maximum_marks}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.maximum_marks && {error:true, helperText:props.Errors.maximum_marks})}
                    >
                        
                    </TextField>
                    
                     
                    <TextField 
                        
                        label= "OBTAINED MARKS"
                        type= "text"
                        id= "8"
                        name= "obtained_marks"
                        defaultValue= {props.twelfth.obtained_marks}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.obtained_marks && {error:true, helperText:props.Errors.obtained_marks})}
                    >
                        
                    </TextField>
                    <TextField 
                        
                        label= ""
                        type= "file"
                        id= "9"
                        name= ""
                        defaultValue= {props.twelfth.file}
                        
                        
                        variant="outlined"
                        
                        style={{ minWidth: "230px", maxWidth: "230px" }}
                        
                        onChange={
                            props.handleInputChange
                        }
                        {...(props.Errors.file&& {error:true, helperText:props.Errors.file})}
                    >
                        
                    </TextField>
                        </div>
                    {/* <TextField
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        select={field.select}
                        inputProps={{ accept: '.pdf' }}
                        style={{ minWidth: "230px" ,maxWidth:"230px" }}
                        disabled={field.disabled}
                        value={field.defaultValue}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                      {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                 

                    </TextField>  */}
                     
                </Grid>
            // </>
        )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                XII DETAILS
            </Typography>
            <CardContent>
                <Grid container>{rendertwelfthFields}
                
                </Grid>
            </CardContent>
        </>
    );
}