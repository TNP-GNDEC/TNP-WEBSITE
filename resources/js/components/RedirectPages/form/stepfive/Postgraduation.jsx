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


export default function Postgraduation(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "USER ID",
            type: "text",
            id: 1,
            select: "",
            value: props.Post.user_id,
            options: [],
            required:"true",
        },
        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            select: "",
            value: props.Post.institution_name,
            options: [],
            required:"true",

        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 3,
            select: "",
            value: props.Post.city_of_institution,
            options: [],
            required:"true",
        },
        {
            label: "STATE OF INSTITUTION ",
            type: "text",
            id: 4,
            select: "",
            value: props.Post.state_of_institution,
            options: [],
            required:"true",
        },
        
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 5,
            select: "",
            value: props.Post.pincode_of_institution,
            options: [],
            required:"true",
        },
        {
            label: "MARKS TYPE",
            type: "text",
            id: 6,
            select: "true",
            value: props.Post.marks_type,
            options: [
                { value:"cgpa", label: "CGPA" },
                { value: "percentage", label: "PERCENTAGE" }
            ],
            required:"true",
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 7,
            select: "",
            value: props.Post.obtained_marks,
            options: [],
            required:"true",
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 8,
            select: "",
            value: props.Post.maximum_marks,
            options: [],
            required:"true",
        },
        // {
        //     label: "",
        //     type: "file",
        //     id:9,
        //     select: "",
        //     value: props.Post.dmc,
        //     options: [
             
        //     ]
        // },

       

    ];

    const renderPostFields = () =>
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
                Postgraduation Details
            </Typography>
            <CardContent>
                <Grid container>{renderPostFields()}</Grid>
            </CardContent>
        </>
    );
}
