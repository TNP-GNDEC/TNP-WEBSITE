import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "../HomeComponent/SideComponents/Footer";
import Notisfication from './Notisfication';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import {  InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useHistory } from 'react-router-dom';

import intro from '../../../images/2.jpg';

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
    marginBottom: "55px",
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #00000033",
    background: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    ['@media (max-height:585px)']: {
      marginTop: "25px"
  },
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
  loader:{
    width: "30%",
    margin: "auto",
    height: "30%",
    textAlign: "center",
    marginTop: "200px"
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
    padding: theme.spacing(1),
  },
  loader:{
    width: "100%",
    textAlign: "center"

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

const SignIn= () => {
  const history = useHistory();
  const classes = useStyles();
  const [state , setState] = useState({
    username : "",
    password : ""
})
  const [checkAuth, setAuth] = useState(true);
  const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState({isOpen:false, message:"", type:""});
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(true);

const validate = () => {
  let temp = {}
  temp.username = state.username ? "": "Required."
  temp.password = state.password.length>5 ? "": "Password must be atleast 6 characters long."
  setErrors({
    ...temp
  })
  var ok ="";
  return Object.keys(temp).every(x => temp[x].valueOf() == ok.valueOf());
}
const handlenameChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
  console.log(history)

}

const handlepasswordChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))

}
const fetchUser = async (token) => {
  const user = await axios.get(`/api/getUsers`, {headers: { 'Authorization': 'Bearer ' + token }  });
  const role = user.data.user['role_id'];
  if(role===1){
    fetchSteps(token);
  }
  if(role ===2){
    history.push('/coordinator')
  }
}

const fetchSteps = async (token) => {
  const step = await axios.get(`/api/formStatus`, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const form_step = step.data.step['form_step'];
  if(form_step === 6){
    window.location.href = window.origin+ "/verify";
  }
  else{
    window.location.href = window.origin+ "/student";
  }
}
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
const handleFormSubmit= async (event)=>{
    event.preventDefault();
    setLoading(true);
    if(validate()){
    axios.post('/api/login', {
      username: state.username,
      password: state.password,
  })
  .then((response) => {
    setLoading(false);
    if(response.data.alert){
      setNotify({isOpen:true, message:response.data.alert, type:'error'})
    }
    var user=response.data.current_user
    var JWTtoken=response.data.access_token
    localStorage.setItem('token', JWTtoken);
    localStorage.setItem('role', user.role_id);
    console.log(localStorage.getItem('role'));
      if(user.role_id===1){
        localStorage.setItem('student', user.role_id);
        fetchSteps(JWTtoken);
      }
      if(user.role_id===2){
        localStorage.setItem('admin', user.role_id);
        window.location.href = window.origin + "/coordinator";
      }
        
  })
  .catch((error) => {
      console.log(error);
  });
  }
  };
  useEffect(()=>{
    var istoken = localStorage.getItem('token');
    if(istoken !== null){
      fetchUser(istoken);
    }
    setAuth(false);
  },[])
  if(checkAuth){
      return (<div className={classes.root}>
       <div className={classes.loader}>
       <CircularProgress size="100px" color="#193b68" />
       </div>
       </div>)
  }
  return (
    <div className={classes.root}>
    <Header />
    <div className={classes.card}>
    <div className={classes.container}>
      <CssBaseline />
      <div className={classes.loginCard}>
        <div className={classes.hero}>
          <img src={intro} className={classes.pic} />
        </div>
      <Box boxShadow={2} className={classes.paper}>
        <Typography component="h2" variant="h4" className={classes.heading}>
          Sign In
        </Typography>
        <form onSubmit={(event) => handleFormSubmit(event)} className={classes.form}>
          <Notisfication notify={notify} setNotify={setNotify} />
          <TextField    
            variant="outlined"
            className={classes.input}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            fullWidth
            label="Username"
            name="username"
            defaultValue={state.username}
            onChange={handlenameChange} 
            {...(errors.username && {error:true, helperText:errors.username})}
          />
          <TextField
            variant="outlined"
            className={classes.input}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            id="standard-adornment-password"
            autoComplete="current-password"
            defaultValue={state.password}
            
            onChange={handlepasswordChange} 
            {...(errors.password && {error:true, helperText:errors.password})}
            InputProps={{ 
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Grid container>
            <Grid item xs>
              <Link className={classes.link} to="/forgetPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
          {/* <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          /> */}
          {loading ? (
            <div className={classes.loader}>
            <CircularProgress />
            </div>
          ):(
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          )}
        </form>
      </Box>
      </div>
    </div>
    </div>
     <Footer />
    </div>

  );
}
export default SignIn;