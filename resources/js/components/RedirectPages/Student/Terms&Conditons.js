import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme)=>({
  root: {
    width: "90%",
    margin: "2% 5%",
    boxShadow: "0px 15px 25px #00000033",
  },
  
  title: {
      fontSize: "25px",
    color: theme.palette.primary.dark,
    textAlign:'center',
  },
  ol:{
      fontSize: "16px",
  },
  code:{
      color: theme.palette.primary.main,
  },
 
 Checkbox:{
     display: "flex",

},
para:{
     paddingTop: "15px"
  },
button:{
    width: "150px",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: "0px 15px 25px #034ed433",
    borderRadius: "50px",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
},


}));

   
export default function SimpleCard() {
  const classes = useStyles();
  const handleSubmit =  () => {
    window.location.href = window.origin+ "/forms";
  }
   
  return (
      
    <Card className={classes.root}>
           
      <CardContent>
      <div >
        <h1 className={classes.title}> TERMS AND CONDITIONS</h1>
      </div>
        <div>
            <ol className={classes.ol}>
                <li>
                    Please clear your browser cache before filling form.<br></br>
                    </li>
                   For Desktop Browsers Press :<code className={classes.code}><b>ctrl + f5 or clear browser History.</b></code><br></br>
                   For Mobile Browsers : <code className={classes.code}><b>clear browser History.</b></code><br></br>
                   For TNP Homescreen App : <code className={classes.code}><b>Delete App and  clear browser History.</b></code><br></br>
                   <li>
                       Students must fill details accurately.
                   </li>
                   <li>
                       The creditals that you mention should match with your orignal documents.
                   </li>
                    <l1>
                    NO redudancy should be there in the information provided.
                   </l1>
                   <li>
                       Students should make sure that their Email's and mobile numbers are filled correctly.
                   </li>
                <li>
                    Students must check the gazettes properly before filling  the semester details.
                </li>
                <li>
                    Students must enter height in centimeters and weight in kgs.
                </li>
                <li>
                    The format of Date of Birth should be (dd/mm/yyyy).
                </li>
                <li>
                    Initials of name must be in upper-case.
                </li>
                <li>
                    The validity of category  certificate must be checked before filling.
                </li>
              
                
                <li>
                    Students must fill their 10th CGPA or percentage depending upon their examination boards.
                </li>
                <li>
                    Don't forget the documents else strict action must be taken against you.
                </li>
            </ol>
        </div>
        
        <div className={classes.Checkbox}>
        <Checkbox
        required="true"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

       
    <div className={classes.para} ><b><p>I Agree to the terms and conditions given above. </p></b>
      </div>
      </div>

      <Button  className={classes.button} variant="contained" onClick={handleSubmit}>
  Next
</Button>

      </CardContent>
      
      
    </Card>
    
    
  );
}