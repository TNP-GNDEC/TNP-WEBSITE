import React,{useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import Footer from '../HomeComponent/SideComponents/Footer';
import Notisfication from './Notisfication';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import intro from '../../../images/3.jpg';

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.palette.primary.light,
    minHeight: "100vh",
  },
  box: {
    marginTop: theme.spacing(0)
  },
  container:{
    width: "100%"
  },
  loginCard:{
    width: "75%",
    margin: "auto",
    marginTop: "45px",
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #00000033",
    background: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  hero:{
    width: "50%",
    marginTop: "20px",
    marginBottom: "20px",
    ['@media (max-width:960px)']: {
      display: "none",
  },
  },
  pic:{
    width: "100%",
    borderRadius: "3%",
  },
  paper: {
    width: "40%",
    boxShadow: "none",
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    ['@media (max-width:960px)']: {
      width: "100%",
  },
  },
  icon:{
    fontSize: "90px",
  },
  heading:{
    color: "#193b68",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(0),
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
    borderRadius: "5px",
    boxShadow: "0px 15px 25px #038ed433",
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
    
  },
  notchedOutline: {
    borderColor: "#757575",
  },
  focused: {
    borderColor: theme.palette.secondary.main,
  },
  
  link: {
    color: theme.palette.primary.main,
  }
}));

export default function Email() {
  const classes = useStyles();
  const [state , setState] = useState({
    email: ""
})
const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState({isOpen:false, message:"", type:""});

const validate = () => {
  let temp = {}
  temp.email = state.email ? "": "Required."
  setErrors({
    ...temp
  })

  return true
}

const handleEmailChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
}

const handleFormSubmit= async (event)=>{
    event.preventDefault();
    if(validate()){}
    axios.post('/forget-password', {
      email: state.email,
  })
  .then((response) => {
    if(response.data.alert){
      setNotify({isOpen:true, message:response.data.alert, type:'error'})
    }
    if(response.data.msg){
      setNotify({isOpen:true, message:response.data.msg, type:'success'})
    }
  })
  .catch((error) => {
      console.log(error);
  });
  };
  return (
    <div className={classes.root}>
    <Header />
    <Container className={classes.container}>
      <CssBaseline />
      <div className={classes.loginCard}>
        <div className={classes.hero}>
          <img src={intro} className={classes.pic} />
        </div>
      <Box boxShadow={2} className={classes.paper}>
        <Typography component="h2" variant="h4" className={classes.heading}>
          Forget Password
        </Typography>
        <form onSubmit={(event) => handleFormSubmit(event)} className={classes.form}>
        <Notisfication notify={notify} setNotify={setNotify} />
          <TextField    
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            defaultValue={state.email}
            onChange={handleEmailChange}
            {...(errors.email && {error:true, helperText:errors.email})}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Box>
      </div>
    </Container>
    <Footer />
    </div>
  );
}