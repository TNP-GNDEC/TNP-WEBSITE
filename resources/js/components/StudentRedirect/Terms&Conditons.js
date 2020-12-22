import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';

import { blue, red } from '@material-ui/core/colors';
const useStyles = makeStyles({
  root: {
    minWidth: 500,
    fontSize:20,
    border:'none',
    boxShadow:'none',
  },
  
  title: {
    fontSize: 2,
    color:'#038ed4',
    textAlign:'center',

    
    
  },
 
  checkbox:{
      display:'flex',
      paddingLeft:'5px',
      fontSize:'20px'
      
     
      
  },
  para:{
 padding:'5px 0px 0px 5px',
  },
button:{
   
    padding: '8px 30px 8px 30px',
    fontsize: '30px',
    margin: '0px 0px 0px 800px',
    borderRadius:'30px',
    color:'#ffffff',
    background:'#038ed4',
    '&:hover':{
        color:"#ffffff",
      },
},

});

   
export default function SimpleCard() {
  const classes = useStyles();
   
  return (
      
    <Card className={classes.root}>
           
      <CardContent>
      <div className={classes.title} >
        <h1> TERMS AND CONDITIONS</h1>
        </div>
        <div>
            <ol>
                <li>
                    Please clear your browser cache before filling form.<br></br>
                    </li>
                   For Desktop Browsers Press ctrl + f5 or clear browser History<br></br>
                   For Mobile Browsers Press  clear browser History<br></br>
                   For TNP Homescreen App Delete App and  clear browser History<br></br>
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
                    Then year gap should be mentioned properly.For eg if you have dropped one year after your 12th of Diploma then year gap is '1'.
                </li>
                <li>
                    Students should fill their active and passive Bacllogs correctly.
                </li>
                <li>
                    For active Backlogs put SGPA as 0.
            
                </li>
                <li>
                    Students must fill their 10th CGPA or percentage depending upon their examination boards.
                </li>
                <li>
                    Don't forget the documents else stritct action must be taken against you.
                </li>
            </ol>
        </div>
        <div className={classes.checkbox}>
       
  <input type="checkbox" /><b>
      <div className={classes.para} ><p>I Agree to the terms and conditions given</p>
      </div></b>
</div>
<div >
<button type="button" className={classes.button}><b>I Agree</b></button> 
</div>
      </CardContent>
      
      
    </Card>
    
    
  );
}
