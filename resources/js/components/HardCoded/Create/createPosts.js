import React from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../../../css/app.css';

class CreatePosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleEditorInput =  ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
        this.setState({
            description: data,
        });
    } 
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            window.location.reload();
            alert("Added Successfully");
        }
    }

    
    render(){
        return(
            <div className="layout">
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.savePost}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" 
                                value={this.state.type} onChange={this.handleInput}
                                required>
                                    <option value="none" selected disabled hidden>Select</option>
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <div className="App" >
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        config={{         
                                            toolbar: ["undo", "redo", "bold", "italic", "blockQuote", "ckfinder", "imageTextAlternative", "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells"]
                                          }}
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={this.handleEditorInput}                                        
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                        
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    Add Post
                                </button>
                                {/* <Button variant="contained" color="primary">
                                  Add Post
                                </Button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePosts;
