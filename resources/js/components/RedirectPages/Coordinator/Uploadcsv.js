import React from 'react';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';

const Uploadcsv = () => {
  
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
          console.log(data.data)
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
        <Button onClick={handleClick}>
          Upload a file
        </Button>
        <input type="file"
               ref={hiddenFileInput}
               onChange={handleChange}
               style={{display:'none'}} 
        /> 
      </>
    );
  };
  export default Uploadcsv;