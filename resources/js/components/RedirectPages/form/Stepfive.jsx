import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CusButton from "./CusButton";
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import Button from '@material-ui/core/Button';

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
        margin: "0 auto"
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
        margin: "0 auto"
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
export default function StepOne() {
    const [email, setEmail] = React.useState("");
    const handleChange = (e) => {
        const email= e.target.value   
        setEmail(email)
        console.log(email)

      }
    
      const handleFormSubmit = (e) => {
        event.preventDefault();
        var uuid= localStorage.getItem("useruuid")
        var id= localStorage.getItem("userid")
        console.log(uuid)
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
    
    const classes = useStyles();
    return (
        
        <Card className={classes.box}>
            <div className={classes.heading}>
                <b>
                    <h1>THANK YOU</h1>
                </b>
                <div>
                <SentimentSatisfiedRoundedIcon />
               </div>
               <div>
               <Button  variant="contained" color="primary">
  HOME
</Button>
</div>          
                        </div>
                    
                
            
        </Card>
    );
}
