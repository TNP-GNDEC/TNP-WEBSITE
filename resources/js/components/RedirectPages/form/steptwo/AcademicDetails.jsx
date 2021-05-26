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
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px",
        width: "30%",
    },
    fields: {
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

export default function Details(props) {
    const classes = useStyles();

    const renderArray = (f) => {
        if(f.id === 4){
            if(props.academics.course === "B.Tech"){
                return f.options;
            }
            else if (props.academics.course === "M.Tech"){
                return f.options2;
            }
            else if (props.academics.course === "MCA"){
                return f.options3;
            }
 
        }
        else if(f.id === 9){
            if(props.academics.course === "M.Tech"){
                return [ { label:"THIRD", value:"3" }, { label:"FOURTH", value:"4" } ];
            }
            else{
                return f.options ;
            }

        }

        else {
            return f.options;
        }
    }

    const fields = [
        {
            label: "UNIVERSITY ROLL NO.",
            type: "text",
            id: 1,
            value: props.academics.univ_roll,
            select: "",
            disabled: "true",
            options: []
        },
        {
            label: "COLLEGE ROLL NO.",
            type: "text",
            id: 2,
            value: props.academics.college_roll,
            select: "",
            disabled: "true",
            options: []
        },
        {
            label: "COURSE*",
            type: "text",
            id: 3,
            value: props.academics.course,
            select: "true",
            validate: props.Errors.course,
            options: [
                // {
                //     value: "",
                //     label: "Choose"
                // },
                {
                    value: "B.Tech",
                    label: "B.TECH"
                },
                {
                    value: "M.Tech",
                    label: "M.TECH"
                },
                {
                    value: "MCA",
                    label: "MCA"
                }
            ]
        },
        {
            label: "STREAM*",
            type: "text",
            id: 4,
            value: props.academics.stream,
            select: "true",
            validate: props.Errors.stream,
            options: [
                {
                    value: "Cse",
                    label: "COMPUTER SCIENCE AND ENGINEERING"
                },
                {
                    value: "It",
                    label: "INFORMATION TECHNOLOGY"
                },
                {
                    value: "Ece",
                    label: "ELECTRONICS AND COMMUNICATION"
                },
                {
                    value: "Civil",
                    label: "CIVIL"
                },
                {
                    value: "Mechanical",
                    label: "MECHANICAL"
                },
                {
                    value: "Production",
                    label: "PRODUCTION"
                },

                {
                    value: "Electrical",
                    label: "ELECTRICAL"
                }
            ],


            options2: [
                {
                    value: "STUCTURAL ENGINEERING (FULL TIME)",
                    label: "STUCTURAL ENGINEERING (FULL TIME)"
                },
                {
                    value: "GEOTECHNICAL ENGINEERING (FULL TIME)",
                    label: "GEOTECHNICAL ENGINEERING (FULL TIME)"
                },
                {
                    value: "ENVIRONMENTAL SCIENCE AND ENGG. (FULL TIME)",
                    label: "ENVIRONMENTAL SCIENCE AND ENGG. (FULL TIME)"
                },
                {
                    value: "ELECTRONICS AND COMMUNICATION ENGG. (FULL TIME)",
                    label: "ELECTRONICS AND COMMUNICATION ENGG. (FULL TIME)"
                },
                {
                    value: "PRODUCTION ENGINEERING (FULL TIME)",
                    label: "PRODUCTION ENGINEERING (FULL TIME)"
                },
                {
                    value: "MECHANICAL ENGINEERING (FULL TIME)",
                    label: "MECHANICAL ENGINEERING (FULL TIME)"
                },
                {
                    value: "COMPUTER SCIENCE AND ENGG. (FULL TIME)",
                    label: "COMPUTER SCIENCE AND ENGG. (FULL TIME)"
                },
                {
                    value: "COMPUTER SCIENCE AND IT (FULL TIME)",
                    label: "COMPUTER SCIENCE AND IT (FULL TIME)"
                },
                {
                    value: "SOIL MECH. AND FOUNDATION ENGG.(PART TIME)",
                    label: "SOIL MECH. AND FOUNDATION ENGG.(PART TIME)"
                },

            ],
        options3:[
            {
                value: "Computer applications",
                label: "COMPUTER APPLICATIONS"
            },
        ]
        },

        {
            label: "SHIFT*",
            type: "text",
            id: 5,
            value: props.academics.shift,
            select: "true",
            options: [
                {
                    value: "Morning",
                    label: "MORNING"
                },
                {
                    value: "Evening",
                    label: "EVENING"
                }
            ],
            validate: props.Errors.shift
        },
        {
            label: "SECTION*",
            type: "text",
            id: 6,
            value: props.academics.section,
            select: "",
            options: [],
            validate: props.Errors.section
        },
        {
            label: "LEET*",
            type: "text",
            id: 7,
            value: props.academics.leet,
            select: "true",
            options: [
                {
                    value: 1,
                    label: "YES"
                },
                {
                    value: 0,
                    label: "NO"
                }
            ],
            validate: props.Errors.leet
        },
        {
            label: "HOSTLER*",
            type: "text",
            id: 8,
            value: props.academics.hostler,
            select: "true",
            options: [
                {
                    value: 1,
                    label: "YES"
                },
                {
                    value: 0,
                    label: "NO"
                }
            ],
            validate: props.Errors.hostler
        },

        {
            label: "TRAINING SEM*",
            type: "text",
            id: 9,
            value: props.academics.training_sem,
            select: "true",
            options: [
                {
                    value: "7",
                    label: "SEVEN"
                },
                {
                    value: "8",
                    label: "EIGHT"
                }
            ],
            validate: props.Errors.training_sem
        }
    ];

    // Rendering the Input fields
    const renderFields = () =>
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
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                            }
                        }}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        select={field.select}
                        disabled={field.disabled}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                        {...(field.validate && { error: true, helperText: field.validate })}
                    >
                        {

                            ( field.id > 3 && props.academics.course == null  ? [{ label: "CHOOSE COURSE FIRST", value: "" }] : renderArray(field)).map(option => {
                               console.log(props.academics.course);
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
                Academic Details
            </Typography>
            <CardContent>
                <Grid container>{renderFields()}</Grid>
            </CardContent>
        </>
    );
}
