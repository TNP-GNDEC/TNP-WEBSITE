import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Data2021 from "./PlacementRecord/2021";
import Data2020 from "./PlacementRecord/2020";
import Data2019 from "./PlacementRecord/2019";
import Data2018 from "./PlacementRecord/2018";
import Data2017 from "./PlacementRecord/2017";
import Data2016 from "./PlacementRecord/2016";
import Data2015 from "./PlacementRecord/2015";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    
  },
  tabs: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "6px",
    "&:focus":{
      outline: "none",
    }
  },
  tab:{
    paddingLeft: "10px"
  },
  posts:{
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.tabs}>
        <Tabs
          className={classes.tab}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="2021" {...a11yProps(0)} />
          <Tab label="2020" {...a11yProps(1)} />
          <Tab label="2019" {...a11yProps(2)} />
          <Tab label="2018" {...a11yProps(3)} />
          <Tab label="2017" {...a11yProps(4)} />
          <Tab label="2016" {...a11yProps(5)} />
          <Tab label="2015" {...a11yProps(6)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Data2021 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Data2020 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Data2019 />
      </TabPanel> 
      <TabPanel value={value} index={3}>
        <Data2018 />
      </TabPanel> 
      <TabPanel value={value} index={4}>
        <Data2017 />
      </TabPanel> 
      <TabPanel value={value} index={5}>
        <Data2016 />
      </TabPanel> 
      <TabPanel value={value} index={6}>
        <Data2015 />
      </TabPanel> 
    </div>
  );
}