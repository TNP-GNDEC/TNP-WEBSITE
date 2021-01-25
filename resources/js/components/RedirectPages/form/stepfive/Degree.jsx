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


export default function Degree(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "USER ID",
            type: "text",
            id: 1,
            select: "",
            value: props.Degree.user_id,
            options: []
        },
        {
            label: " SGPA IN 1ST SEM",
            type: "text",
            id: 2,
            select: "",
            value: props.Degree.sgpa_in_1st_sem,
            options: []
        },
        {
            label: "CREDITS IN 1ST SEM",
            type: "text",
            id: 3,
            select: "",
            value: props.Degree.credits_in_1st_sem,
            options: []
        },
        {
            label: "SGPA IN 2ND SEM",
            type: "text",
            id: 4,
            select: "",
            value: props.Degree.sgpa_in_2nd_sem,
            options: []
        },
        
        {
            label: "CREDITS IN 2ND SEM",
            type: "text",
            id: 5,
            select: "",
            value: props.Degree.credits_in_2nd_sem,
            options: []
        },
        {
            label: "SGPA IN 3RD SEM",
            type: "text",
            id: 6,
            select: "",
            value: props.Degree.sgpa_in_3rd_sem,
            options: [

            ]
        },
        {
            label: "CREDITS IN 3RD SEM",
            type: "text",
            id: 7,
            select: "",
            value: props.Degree.credits_in_3rd_sem,
            options: []
        },
        {
            label: "SGPA IN 4TH SEM",
            type: "text",
            id: 8,
            select: "",
            value: props.Degree.sgpa_in_4th_sem,
            options: []
        },
        {
            label: "CREDITS IN 4TH SEM",
            type: "text",
            id:9,
            select: "",
            value: props.Degree.credits_in_4th_sem,
            options: [
             
            ]
        },
        {
            label: " SGPA IN 5TH SEM",
            type: "text",
            id: 10,
            select: "",
            value: props.Degree.sgpa_in_5th_sem,
            options: []
        },
        {
            label: "CREDITS IN 5TH SEM",
            type: "text",
            id: 11,
            select: "",
            value: props.Degree.credits_in_5th_sem,
            options: []
        },
        {
            label: "SGPA IN 6TH SEM",
            type: "text",
            id: 12,
            select: "",
            value: props.Degree.sgpa_in_6th_sem,
            options: []
        },
        
        {
            label: "CREDITS IN 6TH SEM",
            type: "text",
            id: 13,
            select: "",
            value: props.Degree.credits_in_6th_sem,
            options: []
        },
        {
            label: "SGPA IN 7TH SEM",
            type: "text",
            id: 14,
            select: "",
            value: props.Degree.sgpa_in_7th_sem,
            options: [

            ]
        },
        {
            label: "CREDITS IN 7TH SEM",
            type: "text",
            id: 15,
            select: "",
            value: props.Degree.credits_in_7th_sem,
            options: []
        },
        {
            label: "SGPA IN 8TH SEM",
            type: "text",
            id: 16,
            select: "",
            value: props.Degree.sgpa_in_8th_sem,
            options: []
        },
        {
            label: "CREDITS IN 8TH SEM",
            type: "text",
            id:17,
            select: "",
            value: props.Degree.credits_in_8th_sem,
            options: [
             
            ]
        },
        {
            label: "AGGREGATE SGPA",
            type: "text",
            id:18,
            select: "",
            value: props.Degree.aggregate_sgpa,
            options: [
             
            ]
        },
        {
            label: "AGGREGATE CREDITS ",
            type: "text",
            id:19,
            select: "",
            value: props.Degree.aggregate_credits,
            options: [
             
            ]
        },

        {
            label: "AGGREGATE PERCENTAGE ",
            type: "text",
            id:20,
            select: "",
            value: props.Degree  .aggregate_percentage,
            options: [
             
            ]
        },

        {
            label: "",
            type: "file",
            id:21,
            select: "",
            value: props.Degree .dmc,
            options: [
             
            ]
        },

       

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
                        type={field.type}
                        id="outlined-basic"
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        select={field.select}
                        inputProps={{ accept: ".pdf" }}
                        style={{ minWidth: "230px" ,maxWidth:"230px"}}
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
            🎓 DEGREE  DETAILS 
            </Typography>
            <CardContent>
                <Grid container>{renderDegreeFields()}</Grid>
            </CardContent>
        </>
    );
}
