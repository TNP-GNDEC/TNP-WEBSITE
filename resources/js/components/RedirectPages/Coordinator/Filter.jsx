import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    
}));



export default function BasicToolbarFilteringGrid() {
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
    <>
    </>
  //   <div style={{ height: 400, width: '100%' }}>
  //   <DataGrid
  //     rows={rowData}
  //     columns={columns} 
  //     pageSize={5}
  //   />
  // </div>
  );
}
