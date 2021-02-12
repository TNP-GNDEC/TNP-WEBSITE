import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (
      <Editor
     
       apiKey="dilopey7hbixosst6zf2chcwvoa46lburdwmrnh4s1exrihe"
  
        initialValue="<p></p>"
        init={{
          height: 650,
          menubar: true,
          plugins: [
            'autosave', 
            'image',
            'forecolor backcolor',
            'table',
             'lists advlist',
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'spellchecker',
          ],
          toolbar:
            
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
          
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
