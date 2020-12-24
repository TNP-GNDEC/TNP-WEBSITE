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
    minWidth: 'auto',
    fontSize:25,
    border:'none',
    boxShadow:'none',
    background:'#E8E8E8',
    
  },
  
  title: {
    fontSize: 2,
    color:'#038ed4',
    textAlign:'center',
},
 
 Checkbox:{
      
      margin:'27px 10px 20px 20px',
      paddingTop:'0px',
     
},
  para:{
padding:'0px 10px 0px 0px',
paddingTop:'0px',
display:'inline-block',
 
  },
button:{
   
    padding: '10px 50px 10px 50px',
    fontsize:30,
    margin: '200px 0px 100px 350px',
    background:'#038ed4',
    
    
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
                   For Desktop Browsers Press :<code><b>ctrl + f5 or clear browser History.</b></code><br></br>
                   For Mobile Browsers : <code><b>clear browser History.</b></code><br></br>
                   For TNP Homescreen App : <code><b>Delete App and  clear browser History.</b></code><br></br>
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
                    Don't forget the documents else stritct action must be taken against you.
                </li>
            </ol>
        </div>
        
    
        <Checkbox className={classes.Checkbox}
        
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

       
           <div className={classes.para} ><b><p>I Agree to the terms and conditions given above. </p></b>
      </div>

      <Button  className={classes.button} variant="contained" color="primary">
  I Agree
</Button>

      </CardContent>
      
      
    </Card>
    
    
  );
}
