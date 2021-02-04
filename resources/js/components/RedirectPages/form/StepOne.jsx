import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CusButton from "./CusButton";
 import Button from '@material-ui/core/Button';
import Notisfication from '../../Auth/Notisfication';

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
        paddingTop: "20px",
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
        margin: "30px auto",
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
    alert:{
        width: "60%",
        margin: "auto"
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
    const [notify, setNotify] = useState({isOpen:false, message:"", type:""});

    const handleChange = (e) => {
        const email= e.target.value   
        setEmail(email);
      }
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        var uuid= localStorage.getItem("useruuid")
        var id= localStorage.getItem("userid")
        console.log(uuid)
        axios.post(`/api/email/verify/${uuid}`, {
          email: email,
          id: id
    
      })
      .then((response) => {
        if(response.data.msg){
            setNotify({isOpen:true, message:response.data.msg, type:'success'})
          }
        if(response.data.alert){
        setNotify({isOpen:true, message:response.data.alert, type:'error'})
        }
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
                    <h1>Email Verification</h1>
                </b>
                <b>
                    <p className={classes.para}>
                        Kindly enter your personal email id instead your college
                        mail id
                    </p>
                </b>
                <div>
                    <form
                        className={classes.field}
                        autoComplete="off"
                        onSubmit={(event) => handleFormSubmit(event)}
                    >
                        <Notisfication notify={notify} setNotify={setNotify} className={classes.alert} />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection:"column"
                            }}
                        >   
                            <label for="email"></label>
                            <input
                                className={classes.input}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email..."
                                defaultValue={email}
                                onChange={handleChange}
                                required
                            />
                            
                        </div>
                        <button 
                              type="submit" 
                              className={classes.button}>Verify!</button> 
                    </form>
                </div>
            </div>
        </Card>
    );
}
