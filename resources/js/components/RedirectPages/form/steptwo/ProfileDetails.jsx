import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
        padding: "20px 0px"
    }
}));

export default function ProfileDetails(props) {
    const classes = useStyles();
    // As Input type of DOB input field is date so the placeholder of input field(Enter DATE OF BIRTH) and of calender(yyyy-mm-dd) are overlapping
    // to avoid that placeholder will be rendered dynamically by using onBlur and onFocus function inside TextField;
    const [DateLabel, setDateLabel] = React.useState("");

    const fields = [
        {
            label: "FIRST NAME",
            type: "text",
            id: 1,
            select: false,
            value: props.Profile.first_name,
            options: [],
            required: true
        },
        {
            label: "LAST NAME",
            type: "text",
            id: 2,
            select: false,
            value: props.Profile.last_name,
            options: [],
            required: false
        },
        {
            label: "DATE OF BIRTH",
            type: "date",
            id: 3,
            select: false,
            value: props.Profile.dob,
            options: [],
            required: true,
        
        },
        {
            label: "AADHAR NO.",
            type: "text",
            id: 4,
            select: false,
            value: props.Profile.aadhar,
            options: [],
            required: true
        },

        {
            label: "HEIGHT (in cm)",
            type: "text",
            id: 5,
            select: false,
            value: props.Profile.height,
            options: [],
            required: true
        },
        {
            label: "WEIGHT (in kg)",
            type: "tel",
            id: 6,
            select: false,
            value: props.Profile.weight,
            options: [],
            required: true
        },
        {
            label: "BLOOD GROUP",
            type: "text",
            id: 7,
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
            required: true
        },
        {
            label: "GENDER",
            type: "text",
            id: 8,
            select: "true",
            value: props.Profile.gender,
            options: [
                { value: "male", label: "MALE" },
                { value: "female", label: "FEMALE" }
            ],
            required: true
        },
        {
            label: "MARITAL STATUS",
            type: "text",
            id: 9,
            select: "True",
            value: props.Profile.marital_status,
            options: [
                { value: "married", label: "MARRIED" },
                { value: "unmarried", label: "UNMARRIED" }
            ],
            required: true
        },

        {
            label: "FARMING BACKGROUND",
            type: "text",
            id: 10,
            select: "True",
            value: props.Profile.farming_background,
            options: [
                { value: 1, label: "YES" },
                { value: 0, label: "NO" }
            ],
            required: true
        },

        {
            label: "DISABILITY",
            type: "text",
            id: 11,
            select: "True",
            value: props.Profile.disability,
            options: [
                { value: 1, label: "YES" },
                { value: 0, label: "NO" }
            ],
            required: true
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
                        id="outlined-basic"
                        variant="outlined"
                        label={field.label}
                        format={field.id==3?"yyyy/mm/dd":""}
                        value={field.value}
                        select={field.select}
                        style={{ minWidth: "230px", maxWidth:"230px" }}
                        required={field.required}
                        InputLabelProps={ field.id==3? {
                            shrink: true,
                          } : {}}
                        inputProps={ field.id==4? {maxLength:16, minLength:16} : {}}
                        // onBlur={() => {
                        //     console.log(`I am blurred and ready to process`);
                        //     field.id==3 && setDateLabel("");
                        // }}
                        // onClick={() => {
                        //     console.log("Onfocus Call me ");
                        //     field.id==3 && setDateLabel("DATE OF BIRTH");
                        // }}
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
                PROFILE DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderPersonalFields()}</Grid>
            </CardContent>
        </>
    );
}
