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

export default function Details(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "UNIVERSITY ROLL NO.",
            type: "text",
            id: 1,
            value: props.academics.university_roll,
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
            label: "COURSE",
            type: "text",
            id: 3,
            value: props.academics.course,
            select: "true",
            options: [
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
            label: "STREAM",
            type: "text",
            id: 4,
            value: props.academics.stream,
            select: "true",
            options: [
                {
                    value: "cse",
                    label: "COMPUTER SCIENCE AND ENGINEERING"
                },
                {
                    value: "it",
                    label: "INFORMATION TECHNOLOGY"
                },
                {
                    value: "ece",
                    label: "ELECTRONICS AND COMMUNICATION"
                },
                {
                    value: "civil",
                    label: "CIVIL"
                },
                {
                    value: "mech",
                    label: "MECHANICAL"
                },
                {
                    value: "production",
                    label: "PRODUCTION"
                }
            ],

            // optionsMtech: [
            //     {
            //         value: "production(full time)",
            //         label: "PRODUCTION(Full Time)"
            //     },
            //     {
            //         value: "industrial(full time)",
            //         label: "INDUSTRIAL(Full Time)"
            //     },
            //     {
            //         value: "power(full time)",
            //         label: "POWER(Full Time)"
            //     },
            //     {
            //         value: "structural(full time)",
            //         label: "STRUCTURAL(Full Time)"
            //     },
            //     {
            //         value: "geo-technical(full time)",
            //         label: "GEO-TECHNICAL(Full Time) "
            //     },
            //     {
            //         value: "computer science (full time)",
            //         label: "Computer Sci(Full Time)"
            //     },
            //     {
            //         value: "computer science (part time)",
            //         label: "Computer Sci(Part Time)"
            //     },
            //     {
            //         value: "production",
            //         label: "Production(Part Time )"
            //     },
            //     {
            //         value: "electronics(part time)",
            //         label: "Electronics(Part Time)"
            //     },

            //     {
            //         value: "electronics(full time)",
            //         label: "Electronics(Full Time)"
            //     },
            //     {
            //         value: "soil mechanism & foundation(part time)",
            //         label: "Soil Mechanics & Foundation(Part Time)"
            //     },
            //     {
            //         value: "electrical(part time)",
            //         label: "Electrical (Part Time)"
            //     },
            //     {
            //         value: "industrial(part time)",
            //         label: "INDUSTRIAL(Part Time)"
            //     },
            //     {
            //         value: "business administration(full time)",
            //         label: "Business Administration(Full Time)"
            //     },
            //     {
            //         value: "environmental science",
            //         label: "Environmental Science"
            //     }
            // ]
            optionsMtech: [
                {
                    value: "cse",
                    label: "COMPUTER SCIENCE AND ENGINEERING (Full time)"
                },
                {
                    value: "it",
                    label: "INFORMATION TECHNOLOGY(Full Time)"
                },
                {
                    value: "ece",
                    label: "ELECTRONICS AND COMMUNICATION"
                },
                {
                    value: "civil",
                    label: "CIVIL"
                },
                {
                    value: "mechanical",
                    label: "MECHANICAL"
                },
                {
                    value: "production",
                    label: "PRODUCTION"
                }
            ]
        },

        {
            label: "SHIFT",
            type: "text",
            id: 5,
            value: props.academics.shift,
            select: "true",
            options: [
                {
                    value: "morning",
                    label: "MORNING"
                },
                {
                    value: "evening",
                    label: "EVENING"
                }
            ]
        },
        {
            label: "SECTION",
            type: "text",
            id: 6,
            value: props.academics.section,
            select: "",
            options: []
        },
        {
            label: "LEET",
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
            ]
        },
        {
            label: "HOSTLER",
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
            ]
        },

        {
            label: "TRAINING SEM",
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
            ]
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
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        error={false}
                        label={field.label}
                        value={field.value}
                        select={field.select}
                        style={{ minWidth: "230px" }}
                        disabled={field.disabled}
                        required={true}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                        {
                        /* if the course will not be selected it will show no options in select of its preceeding Textfields */}
                        {/* {field.id == 4 ||
                        field.id == 5 ||
                        field.id == 8 ||
                        field.id == 7 ||
                        (field.id == 9 && props.academics.course == "") ? (
                            <MenuItem> Please select course first</MenuItem>
                        ) : (
                            (field.id === 4 &&
                            props.academics.course == "M.Tech"
                                ? field.optionsMtech
                                : props.academics.course == "MCA"
                                ? [{ value: "computers", label: "COMPUTERS" }]
                                : field.options)  */}
                               {
                               
                               (field.id>3 && props.academics.course=="" ? [ {label:"CHOOSE COURSE FIRST" , value:"" }] : field.options  ).map(option => {
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
                ACADEMIC DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderFields()}</Grid>
            </CardContent>
        </>
    );
}
