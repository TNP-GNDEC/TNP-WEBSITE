import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
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
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px",
        mixWidth:"230px",
        

    },
  

}));

export default function MatriculationDetails(props) {
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
            value:'3',
            label:'PSEB',
        }
      ];
     
    const fields = [
        
        {
            
            label: "BOARD",
            type: "text",
            id: 1,  
   
            // name: "board",
            value: props.Matriculation.board,
            select: "true",
           
            
            
        },
        
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            // name: "Institution",
            value: props.Matriculation.institution_name,
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 3,
            // name: "Institution",
            value: props.Matriculation.city,
        },
        {

            label: "STATE OF INSTITUTION",
            type: "text",
            id: 4,
            // name: "Institution",
            value: props.Matriculation.state,
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 5,
            // name: "Year_of_passing",
            value: props.Matriculation.year_of_passing,
        },
        {
            label: "MARKS TYPE",
            type: "text",
            id: 6,
            
            
            // name: "Marks_type",
            value: props.Matriculation.marks_type,
           
            
           
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 7,
            // name: "Obtained_marks",
            value: props.Matriculation.obtained_marks,

        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 8,
            // name: "maximum_marks",
            value: props.Matriculation.maximum_marks,
        },
        {
           label:"",
           type: "FILE" ,
           id: 9,
           accept:"application/pdf" ,
           
           
            
            
            value: props.Matriculation.file,

        
        }
    ];

    const renderMatriculationFields = () =>
        fields.map(field => (
            <>
                 <Grid container   
           
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
                        value={field.value}
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
                MATRICULATION DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderMatriculationFields()}
               
                
                </Grid>
            </CardContent>
        </>
    );
}
