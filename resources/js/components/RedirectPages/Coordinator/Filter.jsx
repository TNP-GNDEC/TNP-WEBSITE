import React, { useEffect, useState } from 'react';
import { classnames, DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const useStyles = makeStyles(theme => ({
  first:{
    padding:"25px 1px 1px 25px "
   
    },
  second:{
    padding:"25px 1px 1px 50px "
   
   },
   third:{
    padding:"25px 1px 1px 75px "
    
   },
   fourth:{
    padding:"25px 1px 1px 100px "
    
   },
   first1:{
    padding:"25px 1px 1px 25px "
   
    },
  second1:{
    padding:"25px 1px 1px 50px "
   
   },
   third1:{
    padding:"25px 1px 1px 75px "
    
   },
   fourth1:{
    padding:"25px 1px 1px 100px "
    
   },
   first2:{
    padding:"25px 1px 1px 25px "
   
    },
  second2:{
    padding:"25px 1px 1px 50px "
   
   },
   third2:{
    padding:"25px 1px 1px 75px "
    
   },
   head:{
    color:"#038ed4",
   },
   
}));



export default function BasicToolbarFilteringGrid() {
  const classes = useStyles();
  const [cols,setcols] = useState({
    aadhar: false,
    address: false,
    blood_group: false,
    board: false,
    branch_type: false,
    category: false,
    city: false,
    created_at: false,
    crn: false,
    disability: false,
    district: false,
    dob:false,
    farming_background: false,
    father_mobile: false,
    father_name: false,
    file: false,
    first_name: false,
    gender: false,
    height: false,
    hostler: false,
    id: false,
    institution_name: false,
    last_name: false,
    leet: false,
    marital_status: false,
    marks_type: false,
    maximum_marks: false,
    mobile: false,
    mother_mobile: false,
    mother_name: false,
    obtained_marks: false,
    pincode: false,
    shift: false,
    state: false,
    stream: false,
    training_sem: false,
    updated_at: false,
    urn: false,
    user_id: false,
    username: false,
    uuid: false,
    weight: false,
    whatsapp: false,
    year_of_passing: false,
  });


  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'user_id', headerName: 'User Id'},
    { field: 'urn', headerName: 'urn'},
    { field: 'crn',headerName: 'crn'},
  ];
  
  const [rowData, setRowData] = useState([]);
  // const columns = [{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'}] 
  const fetchDetails = async () => {
    const res = await axios.get(`/filterData`);
    setRowData(res.data.details);
    console.log(res.data);
}
// const riceFilterModel = {
//   items: [{ columnField: rowData, operatorValue: 'contains', value: 'rice' }],
// };

useEffect(()=> {
    fetchDetails();
},[])

  return (
 <Card >
 <FormLabel><h1 className={classes.head}>Select Required Fields</h1></FormLabel>
 <FormGroup aria-label="position" >

 <FormControl component="fieldset">
  
      <FormGroup aria-label="position" row >
      <div className={classes.first}>
      <FormGroup aria-label="position" >
        <FormControlLabel
          value="aadhar"
          control={<Checkbox color="primary" />}
          label="Aadhar"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="address"
          control={<Checkbox color="primary" />}
          label="Address"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="blood_group"
          control={<Checkbox color="primary" />}
          label="Blood Group"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="borad"
          control={<Checkbox color="primary" />}
          label="Borad"
          labelPlacement="end"
        />
      
      </FormGroup>
      </div>
      <div className={classes.second}>
      <FormGroup>
    
      <FormControlLabel
          value="branch_type"
          control={<Checkbox color="primary" />}
          label="Branch Type"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="address"
          control={<Checkbox color="primary" />}
          label="Address"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="category"
          control={<Checkbox color="primary" />}
          label="Category"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="city"
          control={<Checkbox color="primary" />}
          label="City"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.third}>
      <FormGroup>
      <FormControlLabel
          value="created_at"
          control={<Checkbox color="primary" />}
          label="Created At"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="crn"
          control={<Checkbox color="primary" />}
          label="CRN"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="disabilty"
          control={<Checkbox color="primary" />}
          label="Disabilty"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="district"
          control={<Checkbox color="primary" />}
          label="District"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.fourth}>
      <FormGroup>
      <FormControlLabel
          value="dob"
          control={<Checkbox color="primary" />}
          label="DOB"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="farming_background"
          control={<Checkbox color="primary" />}
          label="Farming Background"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="father_mobile"
          control={<Checkbox color="primary" />}
          label="Father's Mobile"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="father_name"
          control={<Checkbox color="primary" />}
          label="Father's Name"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
   
      </FormGroup>
     
    </FormControl>
   
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row >
      <div className={classes.first1}>
      <FormGroup aria-label="position" >
        <FormControlLabel
          value="file"
          control={<Checkbox color="primary" />}
          label="File"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="first_name"
          control={<Checkbox color="primary" />}
          label="First Name"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="gender"
          control={<Checkbox color="primary" />}
          label="Gender"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="height"
          control={<Checkbox color="primary" />}
          label="Height"
          labelPlacement="end"
        />
      
      </FormGroup>
      </div>
      <div className={classes.second1}>
      <FormGroup>
      <FormControlLabel
          value="hostler"
          control={<Checkbox color="primary" />}
          label="Hostler"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="id"
          control={<Checkbox color="primary" />}
          label="ID"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="institution_name"
          control={<Checkbox color="primary" />}
          label="Institution Name"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="last_name"
          control={<Checkbox color="primary" />}
          label="Last Name"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.third1}>
      <FormGroup>
      <FormControlLabel
          value="leet"
          control={<Checkbox color="primary" />}
          label="Leet"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="marital_status"
          control={<Checkbox color="primary" />}
          label="Marital Status"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="marks_type"
          control={<Checkbox color="primary" />}
          label="Marks Type"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="maximum_marks"
          control={<Checkbox color="primary" />}
          label="Maximum Marks"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.fourth1}>
      <FormGroup>
      <FormControlLabel
          value="mobile"
          control={<Checkbox color="primary" />}
          label="Mobile"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="mother_mobile"
          control={<Checkbox color="primary" />}
          label="Mother's Mobile"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="mother_name"
          control={<Checkbox color="primary" />}
          label="Mother's Name"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="obtained_marks"
          control={<Checkbox color="primary" />}
          label="Obtained Marks           "
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      </FormGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row >
      <div className={classes.first2}>
      <FormGroup aria-label="position" >
        <FormControlLabel
          value="pincode"
          control={<Checkbox color="primary" />}
          label="Pincode"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="state"
          control={<Checkbox color="primary" />}
          label="State"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="stream"
          control={<Checkbox color="primary" />}
          label="Stream"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="training_sem"
          control={<Checkbox color="primary" />}
          label="Training Sem"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.second1}>
      <FormGroup>
      <FormControlLabel
          value="updated_at"
          control={<Checkbox color="primary" />}
          label="Updated At"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="urn"
          control={<Checkbox color="primary" />}
          label="URN"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="user_id"
          control={<Checkbox color="primary" />}
          label="User Id"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="user_name"
          control={<Checkbox color="primary" />}
          label="User Name"
          labelPlacement="end"
        />
      </FormGroup>
      </div>
      <div className={classes.third1}>
      <FormGroup>
      <FormControlLabel
          value="uuid"
          control={<Checkbox color="primary" />}
          label="U Uid"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="weight"
          control={<Checkbox color="primary" />}
          label="Weight"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="watsapp"
          control={<Checkbox color="primary" />}
          label="Watsaap"
          labelPlacement="end"
        />
      
        <FormControlLabel
          value="year_of_passing"
          control={<Checkbox color="primary" />}
          label="Year Of Passing"
          labelPlacement="end"
        />
      </FormGroup>
     </div>
      </FormGroup>
      
    </FormControl>
    
    </FormGroup>
  </Card>
  );
}
