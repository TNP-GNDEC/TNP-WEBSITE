import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Button from "@material-ui/core/Button";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  but: {
      padding: "2px",
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'TNP' },
    { key: 1, label: 'POST' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleAdd = (chipToAdd) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root} elevation={0}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              size="small"
              icon={icon}
              color="primary"
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Paper elevation={0} className={classes.root}>
            <form>
                <input type="text" name="tag" placeholder="Enter Tag" />
                <Button type="submit" variant="contained" color="primary">Add Tag</Button>
            </form>
      </Paper>
    </Paper>
  );
}