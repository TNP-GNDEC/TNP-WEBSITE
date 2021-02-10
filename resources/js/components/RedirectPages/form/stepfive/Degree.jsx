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


export default function Degree(props) {
    const classes = useStyles();

const fields = [
    {
        
        label: "INSTITUTION NAME",
        type: "text",
        id: 1,
        value: props.Degree.institution_name
    },
    {
        label: "CITY OF INSTITUTE",
        type: "text",
        id: 2,
        value: props.Degree.city
    },
    {
        label: "STATE OF INSTITUTE",
        type: "text",
        id: 3,
        value: props.Degree.state
    },
    {
        label: "PINCODE OF INSTITUTION",
        type: "text",
        id: 4,
        value: props.Degree.pincode
    },
    {
        label: "OBTAINED MARKS",
        type: "text",
        id: 6,
        value: props.Degree.obtained_marks
    },
    {
        label: "MAXIMUM MARKS",
        type: "text",
        id: 7,
        value: props.Degree.maximum_marks
    },
    {
        label: "MARKS TYPE",
        type: "text",
        id: 5,
        value: props.Degree.marks_type
    },
    // {
    //     label:"",
    //     type: "file",
    //     id: 10,
    //     // name: "first_name",
    //     inputid:"pdf-file",
    //     value: props.Degree.file,
    // }
];

    const renderDegreeFields = () =>
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
                    className={classes.fields}
                    InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          focused: classes.focused
                        }
                    }}
                        type={field.type}
                        id="outlined-basic"
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        select={field.select}
                        required={field.required}
                        inputProps={{ accept: ".pdf" }}
                        
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                    </TextField>
                </Grid>
            </>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Degree  Details
            </Typography>
            <CardContent>
                <Grid container>{renderDegreeFields()}</Grid>
            </CardContent>
        </>
    );
}
