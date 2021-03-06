import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { columnLookupSelector } from '@material-ui/x-grid';

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


const fields = [
  {
    value: '',
    label: 'NONE',
  },
  {
    value: 'commodity',
    label: 'Commodity',
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
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  var filteredD = data.rows;



  const [value, setValue] = React.useState();
  const [filter, setFilter] = React.useState('');
  const [filteredData, setFilteredData] = React.useState({ rows: [], columns: [] })
  const [ready, setReady] = React.useState(false)
  const [filtersData, setFiltersdata] = React.useState({});
  const [currentField, setCurrentField] = React.useState("")

  const handleChange = (event) => {
    setFilter(event.target.value);
    const filter = { filter: event.target.value }
    setFiltersdata((prevState) => ({ ...prevState, [currentField]: filter }))
  };

  const handleValueChange = (e) => {
    setValue(e.target.value)
    var current = currentField
    var f = filtersData[current]
    f["value"] = e.target.value
    // console.log("me : ",f)

    setFiltersdata((prevState) => ({ ...prevState, [currentField]: f }))

    // setFiltersdata({  })
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (filterData()) {
      console.log("form submitted")
      console.log("ready for  : ", filteredD)
      setReady(true);
    }

  }

  const ResetFields = () => {
    setFilter(""); setValue(""); setCurrentField("");

  }

  const handleCurrentFieldChange = (e) => {
    setCurrentField(e.target.value)
  }



  const filterData = () => {


    if (filtersData != {}) {

      var filtered = filteredD

      if ("quantity" in filtersData) {
        if (filtersData.quantity.filter === "greater") {
          filtered = filtered.filter((entry) => entry.quantity > parseFloat( filtersData.quantity.value ))
        }

        if (filtersData.quantity.filter === "less") {
          filtered = filtered.filter((entry) => entry.quantity < parseFloat( filtersData.quantity.value ))
        }
      }

      if("commodity" in filtersData)
      {
      if (filtersData.commodity.filter === "equals") {
        console.log("inside 2 : ", filtered)
        filtered = filtered.filter((entry) => entry.commodity == filtersData.commodity.value)
        console.log("after 2 : ", filtered)

      }

    }
    filtered = { rows: filtered, columns: data.columns }
    setFilteredData({ ...filtered })
    console.log("filtered here : ", filtered)
  }


    else
      console.log("in else")

    return true;
  }
  // const final = (filterData) =>{
  //   for (const [key, value] of Object.entries(filterData)) {
  //     console.log(`${key}: ${value}`);
  // }



  React.useEffect(() => {
    console.log("ye hai value : ", value)
  }, [value])

  React.useEffect(() => {
    console.log("ye hai filter : ", filter)
  }, [filter])

  React.useEffect(() => {
    console.log("filteredData here", filteredData)
  }, [filteredData])


  React.useEffect(() => {
    console.log("current field here", currentField)
  }, [currentField])


  React.useEffect(() => {
    console.log("setting : ", filtersData)
  }, [filtersData])
  filteredData
  return (

    <>

      <form onSubmit={handleFilterSubmit}>

        {/* {console.log("prnt data : " , data)} */}

        {/* filter value */}
        <TextField
          id="field"
          select
          label="Select"
          value={currentField}
          onChange={handleCurrentFieldChange}
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
        <TextField id="standard-basic" label="value" value={value} onChange={handleValueChange} />
        <button type="submit"  onClick={ResetFields}>FILTER</button>
      </form>


      <div style={{ height: 400, width: '100%' }}>
        {/* {console.log("data : " , data.columns)} */}
        {/* {console.log("filtered : ", filteredData)} */}
        <DataGrid
          {...ready ? filteredData : data}
          // filterModel={riceFilterModel}filteredData
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>

    </>
  );
}
