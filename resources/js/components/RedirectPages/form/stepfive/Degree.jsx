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
            label: "USER ID",
            type: "text",
            id: 1,
            select: "",
            value: props.Degree.user_id,
            options: [],
            required:true,
        },
        {
            label: " SGPA IN 1ST SEM",
            type: "text",
            id: 2,
            select: "",
            value: props.Degree.sgpa_sem1,
            options: [],
            required:true,
            

        },
        {
            label: "CREDITS IN 1ST SEM",
            type: "text",
            id: 3,
            select: "",
            value: props.Degree.credits_sem1,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 2ND SEM",
            type: "text",
            id: 4,
            select: "",
            value: props.Degree.sgpa_sem2,
            options: [],
            required:true,
        },
        
        {
            label: "CREDITS IN 2ND SEM",
            type: "text",
            id: 5,
            select: "",
            value: props.Degree.credits_sem2,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 3RD SEM",
            type: "text",
            id: 6,
            select: "",
            value: props.Degree.sgpa_sem3,
            options: [],
            required:true,
        },
        {
            label: "CREDITS IN 3RD SEM",
            type: "text",
            id: 7,
            select: "",
            value: props.Degree.credits_sem3,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 4TH SEM",
            type: "text",
            id: 8,
            select: "",
            value: props.Degree.sgpa_sem4,
            options: [],
            required:true,
        },
        {
            label: "CREDITS IN 4TH SEM",
            type: "text",
            id:9,
            select: "",
            value: props.Degree.credits_sem4,
            options: [],
            required:true,
        },
        {
            label: " SGPA IN 5TH SEM",
            type: "text",
            id: 10,
            select: "",
            value: props.Degree.sgpa_sem5,
            options: [],
            required:true,
        },
        {
            label: "CREDITS IN 5TH SEM",
            type: "text",
            id: 11,
            select: "",
            value: props.Degree.credits_sem5,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 6TH SEM",
            type: "text",
            id: 12,
            select: "",
            value: props.Degree.sgpa_sem6,
            options: [],
            required:true,
        },
        
        {
            label: "CREDITS IN 6TH SEM",
            type: "text",
            id: 13,
            select: "",
            value: props.Degree.credits_sem6,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 7TH SEM",
            type: "text",
            id: 14,
            select: "",
            value: props.Degree.sgpa_sem7,
            options: [],
            required:true,
        },
        {
            label: "CREDITS IN 7TH SEM",
            type: "text",
            id: 15,
            select: "",
            value: props.Degree.credits_sem7,
            options: [],
            required:true,
        },
        {
            label: "SGPA IN 8TH SEM",
            type: "text",
            id: 16,
            select: "",
            value: props.Degree.sgpa_sem8,
            options: [],
            required:true,
        },
        {
            label: "CREDITS IN 8TH SEM",
            type: "text",
            id:17,
            select: "",
            value: props.Degree.credits_sem8,
            options: [],
            required:true,
        },
        {
            label: "AGGREGATE SGPA",
            type: "text",
            id:18,
            select: "",
            value: props.Degree.aggregate_sgpa,
            options: [],
            required:true,
        },
        {
            label: "AGGREGATE CREDITS ",
            type: "text",
            id:19,
            select: "",
            value: props.Degree.aggregate_credits,
            options: [],
            required:true,
        },

        {
            label: "AGGREGATE PERCENTAGE ",
            type: "text",
            id:20,
            select: "",
            value: props.Degree.aggregate_percentage,
            options: [],
            required:true,
        },

        // {
        //     label: "",
        //     type: "file",
        //     id:21,
        //     select: "",
        //     value: props.Degree.dmc,
        //     options: [
             
        //     ]
        // },

       

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
                Degree  Details
            </Typography>
            <CardContent>
                <Grid container>{renderDegreeFields()}</Grid>
            </CardContent>
        </>
    );
}
