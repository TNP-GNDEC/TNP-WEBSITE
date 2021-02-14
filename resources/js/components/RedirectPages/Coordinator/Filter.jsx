import React, { useEffect } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    
}));

const riceFilterModel = {
  items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
};

export default function BasicToolbarFilteringGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const fetchDetails = async () => {
    var token= localStorage.getItem("token");
    const res = await axios.get(`/filterData`);
    console.log(res.data.details);
}

useEffect(()=> {
    fetchDetails();
},[])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        filterModel={riceFilterModel}
        showToolbar
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
