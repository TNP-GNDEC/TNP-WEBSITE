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
  
}));

export default function TwelthDetails(props) {
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
            value: props.Twelth.BOARD,
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
          
            value: props.Twelth.INSTITUTION_NAME,
        },
        {
            label: "JEE RANK * FILL NA IF NOT APPERRED",
            type: "text",
            id: 3,
           
            value: props.Twelth.JEE_RANK,
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 4,
            
            value: props.Twelth.CITY_OF_INSTITUTION,
        },
        {
            label: "STATE OF INSTITUTION",
            type: "text",
            id: 5,
         
            value: props.Twelth.STATE_OF_INSTITUTION,
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 6,
           
            value: props.Twelth.PINCODE_OF_INSTITUTION,
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 7,
           
            value: props.Twelth.YEAR_OF_PASSING,
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 8,
    
            value: props.Twelth.OBTAINED_MARKS,
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 9,
          
            value: props.Twelth.MAXIMUM_MARKS,
        },
        {
            label:"",
            type: "file",
            id: 10,
            inputid:"pdf-file",
        
            
          
            
        }
    ];

    const renderTwelthFields = () =>
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
                        select={field.select}
                        inputProps={{ accept: '.pdf' }}
                        style={{ minWidth: "230px" ,maxWidth:"230px" }}
                        disabled={field.disabled}
                        value={field.value}
                       
                       
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
                XII DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderTwelthFields()}
                
                </Grid>
            </CardContent>
        </>
    );
}

