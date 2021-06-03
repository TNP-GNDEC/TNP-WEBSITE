import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
        width: "30%",

    },
    inputs: {
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        padding: "10px 0px",
        width: "100%",
    },
    fields: {
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

export default function matriculationDetails(props) {
    const classes = useStyles();



    const currencies = [
        {
            value: "1",
            label: "CBSE"
        },
        {
            value: "2",
            label: "ICSE"
        },
        {
            value: "3",
            label: "PSEB"
        }
    ];
    const marksTypes = [
        {
            value: "1",
            label: "CGPA"
        },
        {
            value: "2",
            label: "PERCENTAGE"
        }

    ];

    const fields = [
        {
            label: "BOARD",
            type: "text",
            id: 1,
            name: "board",
            value: props.matriculation.board,
            select: "true"
        },

        {
            label: "INSTITUTION NAME",
            type: "text",
            id: 2,
            name: "institution_name",
            value: props.matriculation.institution_name
        },
        {
            label: "CITY OF INSTITUTION",
            type: "text",
            id: 3,
            name: "city",
            value: props.matriculation.city
        },
        {
            label: "STATE OF INSTITUTION",
            type: "text",
            id: 4,
            name: "state",
            value: props.matriculation.state
        },
        {
            label: "PINCODE OF INSTITUTION",
            type: "text",
            id: 5,
            name: "pincode",
            value: props.matriculation.pincode
        },
        {
            label: "YEAR OF PASSING",
            type: "text",
            id: 6,
            name: "year_of_passing",
            value: props.matriculation.year_of_passing
        },
        {
            label: "MARKS TYPE",
            type: "text",
            id: 7,
            name: "marks_type",
            value: props.matriculation.marks_type
        },
        {
            label: "OBTAINED MARKS",
            type: "text",
            id: 8,
            name: "obtained_marks",
            value: props.matriculation.obtained_marks
        },
        {
            label: "MAXIMUM MARKS",
            type: "text",
            id: 9,
            name: "maximum_marks",
            value: props.matriculation.maximum_marks
        },
        // {
        //     label: "",
        //     type: "file",
        //     id: 10,
        //     accept: "application/pdf",
        //     name: "file",
        //     defaultValue: props.matriculation.file
        // }
    ];


    const rendermatriculationFields = (
        // fields.map(field => (
        //     <>
        <Grid container>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="BOARD"
                    type="text"
                    id="1"
                    name="board"
                    defaultValue={props.matriculation.board}
                    // select="true"
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.board && { error: true, helperText: props.Errors.board })}
                >
                    {/* {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))} */}

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="INSTITUTION NAME"
                    type="text"
                    id="2"
                    name="institution_name"
                    defaultValue={props.matriculation.institution_name}


                    variant="outlined"


                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.institution_name && { error: true, helperText: props.Errors.institution_name })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="CITY OF INSTITUTION"
                    type="text"
                    id="3"
                    name="city"
                    defaultValue={props.matriculation.city}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.city && { error: true, helperText: props.Errors.city })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="STATE OF INSTITUTION"
                    type="text"
                    id="4"
                    name="state"
                    defaultValue={props.matriculation.state}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.state && { error: true, helperText: props.Errors.state })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="PINCODE OF INSTITUTION"
                    type="text"
                    id="5"
                    name="pincode"
                    defaultValue={props.matriculation.pincode}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.pincode && { error: true, helperText: props.Errors.pincode })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="YEAR OF PASSING"
                    type="text"
                    id="6"
                    name="year_of_passing"
                    defaultValue={props.matriculation.year_of_passing}


                    variant="outlined"



                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.year_of_passing && { error: true, helperText: props.Errors.year_of_passing })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="MARKS TYPE"
                    type="text"
                    id="7"
                    name="marks_type"
                    defaultValue={props.matriculation.marks_type}
                    select="true"
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.marks_type && { error: true, helperText: props.Errors.marks_type })}
                >
                    {marksTypes.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="OBTAINED MARKS"
                    type="text"
                    id="8"
                    name="obtained_marks"
                    defaultValue={props.matriculation.obtained_marks}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    {...(props.Errors.obtained_marks && { error: true, helperText: props.Errors.obtained_marks })}
                >

                </TextField>
            </Grid>
            <Grid
                xs={12}
                sm={6}
                lg={4}
                item
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
                    label="MAXIMUM MARKS"
                    type="text"
                    id="9"
                    name="maximum_marks"
                    value={props.matriculation.maximum_marks}
                    shrink={props.matriculation.marks_type === "1" ? true : false}
                    variant="outlined"
                    onChange={
                        props.handleInputChange
                    }
                    disabled={props.matriculation.marks_type === "1" ? true : false}

                    {...(props.Errors.maximum_marks && { error: true, helperText: props.Errors.maximum_marks })}
                >
                </TextField>

            </Grid>
            
            {(props.matriculation.marks_type == "1") && (parseFloat(props.matriculation.obtained_marks) > 0) ?
                <Grid
                    xs={12}
                    sm={6}
                    lg={4}
                    item
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
                        label="PERCENTAGE"
                        type="text"
                        id="10"
                        name="percentage"
                        value={(parseFloat(props.matriculation.obtained_marks) * 9.5).toFixed(2) }
                        variant="outlined"
                        disabled={true}
                        helperText="Conversion factor is 9.5, if any other contact at tpo@gndec.ac.in"
                    >

                    </TextField>
                </Grid>
                : ""
            }
            {(props.matriculation.marks_type == "2") && (parseFloat(props.matriculation.obtained_marks) > 0) && (parseFloat(props.matriculation.maximum_marks)) > 0 ?
                <Grid
                    xs={12}
                    sm={6}
                    lg={4}
                    item
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
                        label="PERCENTAGE"
                        type="text"
                        id="10"
                        name="percentage"
                        value={((parseFloat(props.matriculation.obtained_marks) / parseFloat(props.matriculation.maximum_marks)) * 100).toFixed(2) }
                        variant="outlined"
                        disabled={true}

                    >

                    </TextField>
                </Grid>
                : ""

            }

        </Grid>

    )
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Matriculation  Details
            </Typography>
            <CardContent>

                {rendermatriculationFields}

            </CardContent>
        </>
    );
}
