import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

   
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
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    fields:{
        width: "80%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533",
      },
      focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
      },
      
}));


export default function ProfileDetails(props) {
    const classes = useStyles();
    // As Input type of DOB input field is date so the placeholder of input field(Enter DATE OF BIRTH) and of calender(yyyy-mm-dd) are overlapping
    // to avoid that placeholder will be rendered dynamically by using onBlur and onFocus function inside TextField;
    const [DateLabel, setDateLabel] = React.useState("");

    
    

    const fields = [
        {
            label: "FIRST NAME*",
            type: "text",
            id: 1,
            select: false,
            shrink: "",
            value: props.Profile.first_name,
            options: [],
            validate: props.Errors.first_name
        },
        {
            label: "LAST NAME",
            type: "text",
            id: 2,
            select: false,
            shrink: false,
            value: props.Profile.last_name,
            options: [],
            validate: false
        },
        {
            label: "DATE OF BIRTH (dd-mm-yyyy)*",
            type: "date",
            id: 3,
            shrink: true,
            select: false,
            value: props.Profile.dob,
            options: [],
            validate: props.Errors.dob
        },
        {
            label: "AADHAR NO.*",
            type: "text",
            id: 4,
            select: false,
            shrink: false,
            value: props.Profile.aadhar,
            options: [],
            validate: props.Errors.aadhar
        },

        {
            label: "HEIGHT (in cm)*",
            type: "text",
            id: 5,
            shrink: false,
            select: false,
            value: props.Profile.height,
            options: [],
            validate: props.Errors.height
        },
        {
            label: "WEIGHT (in kg)*",
            type: "tel",
            id: 6,
            shrink: false,
            select: false,
            value: props.Profile.weight,
            options: [],
            validate: props.Errors.weight
        },
        {
            label: "BLOOD GROUP*",
            type: "text",
            id: 7,
            shrink: false,
            select: true,
            value: props.Profile.blood_group,
            options: [
                { label: "A+", value: "A+" },
                { label: "A-", value: "A-" },
                { label: "B+", value: "B+" },
                { label: "B-", value: "B-" },
                { label: "O+", value: "O+" },
                { label: "O-", value: "O-" },
                { label: "AB+", value: "AB+" },
                { label: "AB-", value: "AB-" }
            ],
            validate: props.Errors.blood_group
        },
        {
            label: "GENDER*",
            type: "text",
            id: 8,
            shrink: false,
            select: "true",
            value: props.Profile.gender,
            options: [
                { value: "Male", label: "MALE" },
                { value: "Female", label: "FEMALE" }
            ],
            validate: props.Errors.gender
        },
        {
            label: "MARITAL STATUS*",
            type: "text",
            id: 9,
            shrink: false,
            select: "True",
            value: props.Profile.marital_status,
            options: [
                { value: "Married", label: "MARRIED" },
                { value: "Unmarried", label: "UNMARRIED" }
            ],
            validate: props.Errors.marital_status
        },

        {
            label: "FARMING BACKGROUND*",
            type: "text",
            id: 10,
            shrink: false,
            select: "True",
            value: props.Profile.farming_background,
            options: [
                { value: 1, label: "YES" },
                { value: 0, label: "NO" }
            ],
            validate: props.Errors.farming_background
        },

        {
            label: "DISABILITY*",
            type: "text",
            id: 11,
            shrink: false,
            select: "True",
            value: props.Profile.disability,
            options: [
                { value: 1, label: "YES" },
                { value: 0, label: "NO" }
            ],
            validate: props.Errors.disability
        },
        {
            label: "RURAL AREA*",
            type: "text",
            id: 12,
            shrink: false,
            select: "True",
            value: props.Profile.ruralarea,
            options: [
                { value: 1, label: "YES" },
                { value: 0, label: "NO" }
            ],
            validate: props.Errors.ruralarea
        }
        
    ];

    const renderPersonalFields = () =>
        fields.map(field => (
            <>
                <Grid
                    key={field.label}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField
                        type={field.type}
                        className={classes.fields}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        id="outlined-basic"
                        variant="outlined"
                        label={field.label}
                        defaultValue={field.value}
                        select={field.select}
                        {...(field.validate && {error:true, helperText:field.validate})}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                        {field.options.map(option => {
                            return (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            );
                        })}
                    </TextField>
              
                </Grid>
               
            </>
            
        ));
    
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Profile Details
            </Typography>
            <CardContent>
                <Grid container>{renderPersonalFields()}</Grid>
            
                
            </CardContent>
        </>
    );
}
