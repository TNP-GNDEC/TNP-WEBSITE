import React from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../../css/app.css';
import CreateTag from './CreateTag';
const useStyles = theme => ({
    description:{
        
    }
});

class CreatePosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: '',
        editorState: EditorState.createEmpty(),
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
        const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        this.saveEditorContent(html);
      };
    
    saveEditorContent(data){
        this.setState({description: data});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            alert("Added Successfully");
        }
    }

    
    render(){
        const { editorState } = this.state;
        const {classes} = this.props;
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
                                    <option value="" selected>Select the Type</option>
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <div className={classes.description} >
                                    <Editor
                                        editorState={editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                    />
                                </div>
                            </div>
                            <CreateTag />
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

export default withStyles(useStyles)(CreatePosts);
