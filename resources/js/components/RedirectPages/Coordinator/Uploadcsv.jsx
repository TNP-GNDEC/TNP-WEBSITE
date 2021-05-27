import React from 'react';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
}));

const Uploadcsv = () => {
  const classes = useStyles();
  

    const hiddenFileInput = React.useRef(null);
    
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      handleFile(fileUploaded);
     
    };

    const handleFile = (file) => {
      var data;
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
          data = results;
          axios.post('/api/registerstudent', {
            data: data
        })
      .then((response) => {
        console.log(response)
          
      })
      .catch((error) => {
          console.log(error);
      });
        }
      });
      
    }
    return (
      <>
        <Button 
          onClick={handleClick}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          >
          Upload CSV
        </Button>
        <input type="file"
               ref={hiddenFileInput}
               onChange={handleChange}
               style={{display:'none'}} 
        /> 
        <div>
     
     </div>
      </>
    );
  };
  export default Uploadcsv;