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
   
   
}));

export default function DiplomaDetails(props) {
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
            value: props.diploma.board,
            
            select: "true",
            options: [
                {
                    value:"ONE",
                    label:"CBSE"
                },
                {
                    value:"TWO",
                    label:"ICSE"
                },
                {
                    value:"THREE",
                    label:"PSEB"
                }
            ]
            
        },
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            // name: "first_name",
            value: props.diploma.institution_name
        },
        {
            label: "CITY OF INSTITUTE",
            type: "text",
            id: 3,
            // name: "first_name",
            value: props.diploma.city_of_institute
        },
        {
            label: "STATE OF INSTITUTE",
            type: "text",
            id: 4,
            // name: "first_name",
            value: props.diploma.state_of_institite
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 5,
            // name: "first_name",
            value: props.diploma.pincode
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 6,
            // name: "first_name",
            value: props.diploma.year_of_passing
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 7,
            // name: "first_name",
            value: props.diploma.obtained_marks
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 8,
            // name: "first_name",
            value: props.diploma.maximum_marks
        },
        {
            label: "STREAM OF DIPLOMA",
            type: "text",
            id: 9,
            // name: "first_name",
            value: props.diploma.stream
        },
        {
            label:"",
            type: "file",
            id: 10,
            // name: "first_name",
            inputid:"pdf-file",
            defaultValue: props.Diploma.file,
        }
    ];

    const renderDiplomaFields = () =>
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
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        defaultValue={field.value}
                        select={field.select}
                        style={{ minWidth: "230px" ,maxWidth:"230px"}}
                        disabled={field.disabled}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                      
                      {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                 

                    
                        </TextField>
                </Grid>
            </>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                DIPLOMA DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderDiplomaFields()}
               
               </Grid>
            </CardContent>
           
        </>
    );
}
