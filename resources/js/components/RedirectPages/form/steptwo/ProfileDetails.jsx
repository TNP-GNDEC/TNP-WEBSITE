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
    const fields = [
        {
            label: "FIRST NAME",
            type: "text",
            id: 1,
            select: "",
            value: props.Profile.first_name,
            options: []
        },
        {
            label: "LAST NAME",
            type: "text",
            id: 2,
            select: "",
            value: props.Profile.last_name,
            options: []
        },
        {
            label: "DATE OF BIRTH",
            type: "date",
            id: 3,
            select: "",
            value: props.Profile.dob,
            options: []
        },
        {
            label: "AADHAR NO.",
            type: "text",
            id: 4,
            select: "",
            value: props.Profile.aadhar,
            options: []
        },
        
        {
            label: "HEIGHT (in cm)",
            type: "text",
            id: 5,
            select: "",
            value: props.Profile.height,
            options: []
        },
        {
            label: "WEIGHT (in kg)",
            type: "tel",
            id: 6,
            select: "",
            value:props.Profile.weight,
            options: []
        },
        {
            label: "BLOOD GROUP",
            type: "text",
            id: 7,
            select: "",
            value: props.Profile.blood_group,
            options: []
        },
        {
            label: "GENDER",
            type: "text",
            id: 8,
            select: "true",
            value: props.Profile.gender,
            options: [
                { value:"male", label: "MALE" },
                { value: "female", label: "FEMALE" }
            ]
        },
        {
            label: "MARITAL STATUS",
            type: "text",
            id:9,
            select: "True",
            value: props.Profile.marital_status,
            options: [
                { value: "married", label: "MARRIED" },
                { value: "unmarried", label: "UNMARRIED" }
            ]
        },

        {
            label: "FARMING BACKGROUND",
            type: "text",
            id: 10,
            select: "True",
            value: props.Profile.farming_background,
            options: [
                { value:true, label: "YES" },
                { value: false, label: "NO" }
            ]
    
        },

        {
            label: "DISABILITY",
            type: "text",
            id: 11,
            select: "True",
            value: props.Profile.disability,
            options: [
                { value:true, label: "YES" },
                { value:false, label: "NO" }
            ]
        },

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
                        value={field.value}
                        select={field.select}
                        style={{ minWidth: "230px" }}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >{
                        field.options.map(option => {
                                return (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                );
                            })
                        }
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
