import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    
}));



export default function BasicToolbarFilteringGrid() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user_id', headerName: 'User Id', width: 130 },
    { field: 'urn', headerName: 'urn', width: 130 },
    { field: 'crn',headerName: 'crn'},
  ];
  
  const [rowData, setRowData] = useState([]);
  // const columns = [{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'}] 
  const fetchDetails = async () => {
    const res = await axios.get(`/filterData`);
    setRowData(res.data.details);
    console.log(res.data);
}
const riceFilterModel = {
  items: [{ columnField: rowData, operatorValue: 'contains', value: 'rice' }],
};

useEffect(()=> {
    fetchDetails();
},[])

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      filterModel={riceFilterModel}
      showToolbar
      rows={rowData}
      columns={columns} 
      pageSize={5}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  </div>
  );
}
