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
           


            value: props.tweflth.year_of_passing,

            value: props.Twelth.PINCODE_OF_INSTITUTION,

            value: props.twelfth.pincode,

        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 7,
           

            value: props.Twelth.YEAR_OF_PASSING,

            value: props.twelfth.year_of_passing,

        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 8,
    
            value: props.tweflth.obtained_marks,
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 9,
          
            value: props.tweflth.maximum_marks,
        },
        {
            label:"",
            type: "file",
            id: 10,
            inputid:"pdf-file",
            value: props.twelfth.file,  
        }
    ];

    const rendertwelfthFields = () =>
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
                <Grid container>{rendertwelfthFields()}
                
                </Grid>
            </CardContent>
        </>
    );
}

