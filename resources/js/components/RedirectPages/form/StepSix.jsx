import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CusButton from "./CusButton";
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    heading: {
        paddingTop: "20px"
    },
    para:{
        color: "#000"
    },
    input: {
        height: "40px",
        width: "100%",
        borderRadius: "20px",
        "&:focus":{
            outline: "none"
        },
        border: "1px solid #038ed4",
        boxShadow: "0px 5px 15px #038ed433"
    },
    field: {
        width: "60%",
        paddingTop: "40px",
        margin: "auto"
    },
    box: {
        margin: "30px auto",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
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
        margin: "40px auto",
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus":{
            outline: "none"
        },
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
               <button className={classes.button} variant="contained" color="primary">
  HOME
</button>
</div>          
                        </div>
                    
                
            
        </Card>
    );
}
