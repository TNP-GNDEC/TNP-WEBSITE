import React from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepOne from "../components/RedirectPages/form/StepOne";
import StepTwo from "./RedirectPages/form/steptwo/StepTwo";
import StepThree from "./RedirectPages/form/stepthree/StepThree";
import StepFour from "./RedirectPages/form/stepfour/StepFour";
import StepFive from "./RedirectPages/form/stepfive/Stepfive.jsx";
import StepSeven from "./RedirectPages/form/StepSix";
import StepSix from "../components/RedirectPages/form/stepsix/StepSix";

import Header from "../components/RedirectPages/form/Header";
import Footer from "./HomeComponent/SideComponents/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      paddingTop: '90px',
      minHeight: "100vh",
      paddingBottom: "60px",
      background: theme.palette.primary.light
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    body:{
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    info: {
      position: "relative",
      width: "90%",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0px 12px 20px #00000033",
      display: "block",
      background: theme.palette.secondary.main,
      paddingBottom: "10px",
      ['@media (max-width:830px)']: {
        display: "none"
      }
    },
    alert: {
      margin: "auto",
      width: "95%",
    },
    stepper:{
      position: "relative",
      width: "100%",
      margin: "auto",
      borderRadius: "10px",
    },
    step:{
      "&:focus":{
        outline: "none"
      }
    },
  }));
  
  function getSteps() {
    return ['Email Verification','Personal Details', 'Matriculation','12 or Diploma','Degree','Post Graduation','Verify'];
  }
  
  function getStepContent(step, next, complete,back) {
    switch (step) {
      case 0:
        return <StepOne Next={next} Complete={complete} />;
      case 1:
        return <StepTwo Next={next} Complete={complete} /> ;
      case 2:
        return <StepThree Next={next} Complete={complete} Back={back} />;
      case 3:
        return <StepFour />;
      case 4:
        return <StepFive />;
      case 5:
        return <StepSix />
      case 6:
        return <StepSeven />;
      default:
        return 'Unknown step';
    }
  }
  
  export default function HorizontalNonLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = getSteps();
  
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
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
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
  
    return (
      
      <div className={classes.root}>
        <div>
        <Header />
        </div>
        <div className={classes.info}>
        <Stepper className={classes.stepper} nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)} completed={completed[index]} className={classes.step}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
          <Alert severity="info" className={classes.alert}>
                Fields with '*' are mandatory to fill & You cannot edit the data after completing all the steps, Please fill the data carefully!!
          </Alert>
        </div>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {/* <Typography className={classes.body}>{getStepContent(activeStep)}</Typography> */}
              <div className={classes.body}>  {getStepContent(activeStep, handleNext, handleComplete, handleBack) }</div>
              {/* <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button variant="contained" color="primary" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                    </Button>
                  ))}
              </div> */}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }