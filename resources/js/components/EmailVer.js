import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import form from "@material-ui/core/Box";
import TextField from "@material-ui/core/Box";
const useStyles = makeStyles(theme => ({
    heading: {
        margin: "60px",
        color: "#038ed4"
    },
    input: {
        height: "50px",
        width: "100%",
        margin: "50px ",
        borderRadius: "20px",
        textAlign: "Center"
    },
    field: {
        height: "200px",
        background: "#DADADA"
    },
    otp: {
        padding: "8px 70px 8px 70px",
        // margin: "0px  0px 0px  1290px ",
        margin:"0 auto",
        // display: "flex"
    },
    box: {
        margin: "0 auto",
        width: "50%",
        alignContent: "center",
        background: "#DADADA	",
        color: "BLUE ",
        textAlign: "center",
        borderRadius: "20px",

        ":hover": {
            backgroundColor: "primary.main",

            margin: "0px"
        }
    },
    root: {
        width: "100%"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        padding: "16px 0 0"
    },
    button: {
        // marginRight: theme.spacing(1)
        margin:"0 auto"
    },
    spacer: {
        flex: "1 1 auto"
    },
    completed: {
        display: "inline-block"
    },
    instructions: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    outter: {
        background: "#F0F0F0",
        margin: "0px 0px px 0px"
    }
}));

const steps = [
    "Email verification",
    "Personal Details",
    "Matriculation",
    "12th or Diploma",
    "Verify"
];

export default function HorizontalNonLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [email, setEmail] = React.useState("");

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStep = step => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

  const handleChange = (e) => {
    const email= e.target.value   
    setEmail(email)
    console.log(email)
  }

  const handleFormSubmit = (e) => {
    event.preventDefault();
    var uuid= localStorage.getItem("useruuid")
    var id= localStorage.getItem("userid")
    axios.post(`/api/email/verify/${uuid}`, {
      email: email,
      id: id

  })
  .then((response) => {
    var user=response.data
    console.log(response.data)
      
  })
  .catch((error) => {
      console.log(error);
  });
  }
    return (
        <Card className={classes.outter}>
            <div className={classes.root}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton
                                color="#038ed4"
                                onClick={handleStep(index)}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Card className={classes.box}>
                    <div className={classes.heading}>
                        <b>
                            <h1>Email verification</h1>
                        </b>
                        <b>
                            <p>
                                Kindly enter your personal email id instead your
                                college mail id
                            </p>
                        </b>
                        <div>
                            <form
                                className={classes.field}
                                noValidate
                                autoComplete="off"
                                onSubmit={(event) => handleFormSubmit(event)}
                            >
                                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <label for="email"></label>
                                    <input
                                        className={classes.input}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        defaultValue={email}
                                        onChange={handleChange} 
                            
                                    />
                                </div>
                                <Button
                                  className={classes.otp}
                                  variant="contained"
                                  color="primary"
                                  type="submit">SEND OTP</Button>
                            </form>
                        </div>
                    </div>
                </Card>
                <div className={classes.buttonDiv} style={{display:"flex", alignItems:"center", justifyContent:"center" , paddingTop:"30px" }}>
                    
                </div>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <div className={classes.buttonWrapper}>
                                <div className={classes.spacer} />
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography className={classes.instructions}>
                                Step {activeStep + 1}
                            </Typography>
                            <div className={classes.buttonWrapper}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                <div className={classes.spacer} />
                                <Button
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography
                                            variant="caption"
                                            className={classes.completed}
                                        >
                                            Step {activeStep + 1} already
                                            completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() ===
                                            totalSteps() - 1
                                                ? "Finish"
                                                : "Complete Step"}
                                        </Button>
                                    ))}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </Card>
    );
                                            }
