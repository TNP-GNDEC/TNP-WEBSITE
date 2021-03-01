<<<<<<< HEAD
// import React, { useEffect, useState } from 'react';
// import { DataGrid, GridToolbar } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({

// }));



// export default function BasicToolbarFilteringGrid() {
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'user_id', headerName: 'User Id', width: 130 },
//     { field: 'urn', headerName: 'urn', width: 130 },
//     { field: 'crn',headerName: 'crn'},
//   ];

//   const [rowData, setRowData] = useState([]);
//   // const columns = [{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'},{field: 'id'}] 
//   const fetchDetails = async () => {
//     const res = await axios.get(`/filterData`);
//     setRowData(res.data.details);
//     console.log(res.data);
// }
// const riceFilterModel = {
//   items: [{ columnField: rowData, operatorValue: 'contains', value: 'rice' }],
// };

// useEffect(()=> {
//     fetchDetails();
// },[])

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//     <DataGrid
//       filterModel={riceFilterModel}
//       showToolbar
//       rows={rowData}
//       columns={columns} 
//       pageSize={5}
//       components={{
//         Toolbar: GridToolbar,
//       }}
//     />
//   </div>
//   );
// }


// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import FormControl from '@material-ui/core/FormControl';
// import clsx from 'clsx';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// // import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
// import { DataGrid } from '@material-ui/data-grid';

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 650,
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 300,
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     margin: 2,
//   },
//   noLabel: {
//     marginTop: theme.spacing(3),
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];


// // const rows = [
// //   {name:'Frozen yoghurt', calories:159, fat:6.0, carbs:24, protein:4.0},
// //   {name:'Eclair', calories:159, fat:6.0, carbs:24, protein:4.0},
// //   {name:'Cupcake', calories:159, fat:6.0, carbs:24, protein:4.0},
// //   {name:'Gingerbread', calories:159, fat:6.0, carbs:24, protein:4.0},


// // {'Ice cream sandwich', 237, 9.0, 37, 4.3},
// // {'Eclair', 262, 16.0, 24, 6.0},
// // {'Cupcake', 305, 3.7, 67, 4.3},
// // {'Gingerbread', 356, 16.0, 49, 3.9},
// // ];


// // const data = [
// //   { Dessert_name: "hello", calories: 1, fats: 1, carbs: 1, protien: 1 },
// //   { Dessert_name: "hello", calories: 2, fats: 2, carbs: 2, protien: 2 },
// //   { Dessert_name: "hello", calories: 3, fats: 3, carbs: 3, protien: 3 },
// //   { Dessert_name: "hello", calories: 4, fats: 4, carbs: 4, protien: 4 },
// //   { Dessert_name: "hello", calories: 5, fats: 5, carbs: 5, protien: 5 },
// //   { Dessert_name: "hello", calories: 6, fats: 6, carbs: 6, protien: 6 },

// // ]

// const columns = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   // {
//   //   field: 'fullName',
//   //   headerName: 'Full name',
//   //   description: 'This column has a value getter and is not sortable.',
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (params) =>
//   //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   // },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// const names = [
//   'id',
//   'lastName',
//   'firstName',
//   'age',
//   // 'protien'
//   // 'Ralph Hubbard',
//   // 'Omar Alexander',
//   // 'Carlos Abbott',
//   // 'Miriam Wagner',
//   // 'Bradley Wilkerson',
//   // 'Virginia Andrews',
//   // 'Kelly Snyder',
// ];

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// let colum=[];

// export default function DenseTable() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);
//   const [isTrue, setTrue] = React.useState(false);

//   const handleChange = (event) => {
//     setPersonName(event.target.value);
//   };

//   // const handleChangeMultiple = (event) => {
//   //   const { options } = event.target;
//   //   const value = [];
//   //   for (let i = 0, l = options.length; i < l; i += 1) {
//   //     if (options[i].selected) {
//   //       value.push(options[i].value);
//   //     }
//   //   }
//   //   setPersonName(value);
//   // };

//   React.useEffect(() => {
//     console.log("personalName :   ", personName)
//   }, [personName])

//   const renderHeadings = () => (
//     personName.map((heading) => {
//       return (
//         <TableCell key={heading} align="center">{heading}</TableCell>
//       )
//     })
//   )

//   const renderTableData = () => {
//     return (
//       rows.map((row) => (

//         <TableRow key={row.name}>
//           <TableCell component="th" scope="row">
//             {row.name}
//           </TableCell>
//           <TableCell align="right">{row.calories}</TableCell>
//           <TableCell align="right">{row.fat}</TableCell>
//           <TableCell align="right">{row.carbs}</TableCell>
//           <TableCell align="right">{row.protein}</TableCell>
//         </TableRow>
//       )
//       )
//     )
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     for(var i=0 ; i<personName.length ; i++){
//       const a =   { field: personName[i], headerName: personName[i] };
//       colum.push(a);

//       if(i == personName.length-1 ){
//         setTrue(true)
//       }

//     }


//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <FormControl className={clsx(classes.formControl, classes.noLabel)}>
//           <Select
//             multiple
//             displayEmpty
//             value={personName}
//             onChange={handleChange}
//             onClick={ () => { setTrue(false); colum=[]; }}
//             input={<Input />}
//             renderValue={(selected) => {
//               if (selected.length === 0) {
//                 return <em>Placeholder</em>;
//               }

//               return selected.join(', ');
//             }}
//             MenuProps={MenuProps}
//             inputProps={{ 'aria-label': 'Without label' }}
//           >\
//             <MenuItem disabled value="">
//               <em>Placeholder</em>
//             </MenuItem>
//             {names.map((name) => (
//               <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
//                 {name}
//               </MenuItem>
//             ))}
//           </Select>
//           <button type="submit"> Submit </button>

//         </FormControl>
//       </form>

//       <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={isTrue?rows:[]} columns={isTrue?colum:[]} pageSize={5}  />
//     </div>


//       </div>
//   )
// }


//       <TableContainer component={Paper}>
//         <Table className={classes.table} size="small" aria-label="a dense table">
//           <TableHead>
//             <TableRow>
//               {isTrue ? renderHeadings() : ""}
//               {/* <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
//               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//               <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {isTrue ? renderTableData() : ""}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }





// 
// rows.map((row) => (

//   <TableRow key={row.name}>
//     <TableCell component="th" scope="row">
//       {row.name}
//     </TableCell>
//     <TableCell align="right">{row.calories}</TableCell>
//     <TableCell align="right">{row.fat}</TableCell>
//     <TableCell align="right">{row.carbs}</TableCell>
//     <TableCell align="right">{row.protein}</TableCell>
//   </TableRow>


// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5}  />
//     </div>
//   );
// }


// last code here

// import * as React from 'react';
// import { DataGrid, GridToolbar } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

// const riceFilterModel = {
//   items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
// };

// const currencies = [
//   {
//     value: "",
//     label: 'No Filter',
//   },
//   {
//     value: 'equals',
//     label: 'Equals to (=)',
//   },
//   {
//     value: 'greater',
//     label: 'greter than',
//   },
//   {
//     value: 'less',
//     label: 'Less than',
//   },
// ];


// export default function BasicToolbarFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });
//   const [currency, setCurrency] = React.useState("");
//   const [value, setValue] = React.useState("");
//   const [ready, setReady] = React.useState(false);
//   // const [filtered_data, setFilteredData] = React.useState({})
//   var filtered_data = {}

//   const filterRows = () => {
//     if (currency == "less") {
//       const filteredRows = data.rows.filter(obj => obj.quantity < value)
//       const filteredColums = data.columns
//       filtered_data = { columns: filteredColums, rows: filteredRows }
//       console.log(filtered_data)
//       return true;
//     }

//   }

//   const handleValueChange = (event) => {
//     const a = event.target.value
//     setValue(a);
//   }

//   React.useEffect(() => { console.log("changed currency", currency) }, [currency])
//   React.useEffect(() => { console.log("changed value", value) }, [value])


//   const handleChange = (event) => {
//     const a = event.target.value
//     setCurrency(a);
//   };

//   // const handleFilterFormSubmit = (e) => {
//   //   e.preventDefault();
//   //  if( filterRows() ){
//   //    setReady(true);
//   //  }
//   // }
//   return (
//     <>
//       <div>
//         <form
//         //  onSubmit={ handleFilterFormSubmit}
//         >
//           <TextField
//             id="standard-select-currency"
//             select
//             label="Select"
//             defaultValue={currency}
//             onChange={handleChange}
//             helperText="Please select Filter"
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>

//           <TextField id="standard-basic" label="Value"
//             defaultValue={value}
//             name="value"
//             onChange={handleValueChange}
//           />
//           <button type="submit">Filter</button>
//         </form>
//       </div>
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//           {... ready ? filtered_data : {} }
//           //  {...data}
//           filterModel={riceFilterModel}
//           components={{
//             Toolbar: GridToolbar,
//           }}
//         />
//         {/* {console.log(printKarde())} */}
//       </div>
//     </>
//   );
// }






import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const riceFilterModel = {
  items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
};

const filters = [
  {
    value: '',
    label: 'NONE',
  },
  {
    value: 'equals',
    label: '=',
  },
  {
    value: 'greater',
    label: '>',
  },
  {
    value: 'less',
    label: '<',
  },
];
=======
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
import TextField from '@material-ui/core/TextField';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
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
  selectall:{
    display:"inline",
    margin:"100px "
  }
}));
>>>>>>> d598764756cbac4133923f3981163dccd8f33119


const fields = [
  {
    value: '',
    label: 'NONE',
  },
  {
    value: 'id  ',
    label: 'Id',
  },
  {
    value: 'quantity',
    label: 'Quantity',
  },
  {
    value: 'desk',
    label: 'Desk',
  },
];

export default function BasicToolbarFilteringGrid() {
<<<<<<< HEAD
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });


  const [value, setValue] = React.useState();
  const [filter, setFilter] = React.useState('');
  const [filteredData , setFilteredData] = React.useState(data)
  const [ready, setReady] = React.useState(false)
  const [fieldType , setFieldType] = React.useState({});

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const handleFilterSubmit = (e) =>{
      e.preventDefault();
      if( filterData() ){
      console.log("form is submitted")
      setReady(true);
      }
  }

  const handleFieldChange = (e) =>{

    const name = e.target.name;
    const value = e.target.value;
    setFieldType((prevState) =>(
      {
        ...prevState,
        [name] : value 
      }
    ))
  }

  const filterData = () =>{
    if(filter == "greater"){
      const filteredRows =  filterData.rows.filter( (entry) => entry.quantity > parseInt(value))
      const filtered = {rows : filteredRows , columns : data.columns }
      console.log("before")
      setFilteredData(filtered)
      console.log("after")

    }


    if(filter == "less"){
      const filteredRows =  data.rows.filter( (entry) => entry.quantity < parseInt(value))
      const filtered = {rows : filteredRows , columns : data.columns }
      console.log("before")
      setFilteredData(filtered)
      console.log("after")

    }


    if(filter == "equals"){
      const filteredRows =  data.rows.filter( (entry) => entry.quantity == parseInt(value))
      const filtered = {rows : filteredRows , columns : data.columns }
      console.log("before")
      setFilteredData(filtered)
      console.log("after")

    }
    

    if(filter == ""){
      // const filteredRows =  data.rows.filter( (entry) => entry.quantity == parseInt(value))
      const filtered = {rows : data.rows , columns : data.columns }
      console.log("before")
      setFilteredData(filtered)
      console.log("after")

    }
    return true;
  }

  React.useEffect( ()=>{
    console.log("ye hai value : ", value )
  }, [value] )

  React.useEffect( ()=>{
    console.log("ye hai filter : ", filter )
  }, [filter] )

  React.useEffect( ()=>{
    console.log("filteredData here", filteredData)
  }, [filteredData] )

=======
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
>>>>>>> d598764756cbac4133923f3981163dccd8f33119


  return (
<<<<<<< HEAD

    <>

      <form onSubmit={handleFilterSubmit}> 

        {/* {console.log("prnt data : " , data)} */}

  {/* filter value */}
        <TextField
          id="field"
          select
          label="Select"
          value={fieldType}
          onChange={handleFieldChange}
        >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

    {/* filter value */}

        <TextField
          id="standard-select-filter"
          select
          label="Select"
          value={filter}
          onChange={handleChange}
          helperText="Please select your filter"
        >
          {filters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

    {/* value field */}
        <TextField id="standard-basic" label="value" value={value} onChange={ handleValueChange} />
        
        <button type="submit">FILTER</button>
      </form>

      <div style={{ height: 400, width: '100%' }}>
        {/* {console.log("data : " , data.rows)} */}
        <DataGrid
          {... ready ? filteredData : {rows:[] , columns:[] }}
          filterModel={riceFilterModel}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>

    </>
=======
 <Card >
   

 <FormLabel><h1 className={classes.head}>Select Required Fields</h1></FormLabel>
 <div className={classes.selectall}>
 <FormControlLabel
          value="select_all"
          control={<Checkbox color="primary" />}
          label="Select All"
          labelPlacement="end"
        />
        </div>
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
>>>>>>> d598764756cbac4133923f3981163dccd8f33119
  );
}
