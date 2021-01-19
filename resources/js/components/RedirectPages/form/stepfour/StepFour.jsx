import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TwelthDetails from './Twelthdetails'
import DiplomaDetails from './Diplomadetails'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(3),

        color: theme.palette.text.primary,
        background:"#F0F0F0 ",
        margin:"20px",
       
        
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,

        width: "400px",
        height: "70px"
    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    cardStyles: {
        paddding: "18px 20px"
    },
    pos: {
        float: "right"
    }
}));

export default function StepTwo() {
    const classes = useStyles();

    const [twelth, setProfile] = React.useState({
        BOARD: "",
        INSTITUTION_NAME:"",
        JEE_RANK :"",
        CITY_OF_INSTITUTE:"",
        STATE_OF_INSTITUTE:"",
        YEAR_OF_PASSING: "",
        OBTAINED_MARKS:"",
        MAXIMUM_MARKS:"",
        UPLOAD:"(UPLAOD SCANNED CERTIFICATE)",
    });

    const [diploma, setParent] = React.useState({
        BOARD:"",
        INSTITUTION_NAME:"",
        CITY_OF_INSTITUTE:"",
        STATE_OF_INSTITUTE:"",
        YEAR_OF_PASSING:"",
        OBTAINED_MARKS:"",
        MAXIMUM_MARKS: "",
        STREAM_OF_DIPLOMA:"",
        UPLOAD:"(UPLAOD SCANNED CERTIFICATE)"
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();        
        const id=localStorage.getItem("userid")
        axios.post(`/api/diplomaortwelth/${id}`, {
            diploma: diploma,
            twelth: twelth,    
      })}

    const handleProfileChangeInput = (e, id) => {
        console.log("I am called");
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...twelth,  BOARD: value });
                break;
            case 2:
                setProfile({ ...twelth,  INSTITUTION_NAME: value });
                break;
            case 3:
                setProfile({ ...twelth, JEE_RANK : value });
                break;
            case 4:
                setProfile({ ...twelth, CITY_OF_INSTITUTE:value });
                break;
            case 5:
                setProfile({ ...twelth,  STATE_OF_INSTITUTE:value });
                break;
            case 6:
                setProfile({ ...twelth,  YEAR_OF_PASSING:value });
                break;
                case 7:
                    setProfile({ ...twelth,    OBTAINED_MARKS:value });
                    break;
                    case 8:
                setProfile({ ...twelth,  MAXIMUM_MARKS:value });
                break;
                case 9:
                setProfile({ ...twelth, });
                break;
            default:
                break;
        }
    };

    const handleParentChangeInput = (e, id) => {
        console.log("I am called for parent");
        const value = e.target.value;
        switch (id) {
            case 1:
                setParent({ ...diploma, BOARD: value });
                break;
            case 2:
                setParent({ ...diploma, INSTITUTION_NAME: value });
                break;
            case 3:
                setParent({ ...diploma,  CITY_OF_INSTITUTE:value });
                break;
            case 4:
                setParent({ ...diploma,    STATE_OF_INSTITUTE:value });
                break;
            case 5:
                setParent({ ...diploma, YEAR_OF_PASSING: value });
                break;
            case 6:
                setParent({ ...diploma, OBTAINED_MARKS: value });
                break;
            case 7:
                setParent({ ...diploma, MAXIMUM_MARKS: value });
                break;

            case 8:
                setParent({ ...diploma, STREAM_OF_DIPLOMA: value });
                break;
            case 9:
                setParent({ ...diploma, });
                break;
                    
            default:
                break;
        }
    };

    React.useEffect(() => {
        console.log("Do something after profile has changed", diploma);
    }, [diploma]);
    React.useEffect(() => {
        console.log("Do something after profile has changed", twelth);
    }, [twelth]);
    const renderPersonalFields = () =>
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
                        className={classes.input}
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        onChange={e => {
                            field.change(e, field.id);
                        }}
                    />

                </Grid>
            </>
        ));
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <Grid container className={classes.container}>
                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                        <TwelthDetails Twelth={twelth} handleInputChange={handleProfileChangeInput}/>
                        
                    </Card>
                </Grid>

                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                        {<DiplomaDetails Diploma={diploma} handleInputChange={handleParentChangeInput}/> }
                        
                    </Card>
                </Grid>

                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                    </Card>
                </Grid>
            </Grid>
            <Button className={classes.pos} type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </form>
        </div>
    );
}
