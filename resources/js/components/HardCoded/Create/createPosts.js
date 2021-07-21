import React from "react";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-tagsinput/react-tagsinput.css'
import '../../../../css/app.css';
import TagsInput from 'react-tagsinput'

const useStyles = theme => ({
    layout:{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: theme.palette.secondary.main,
        padding: "20px 20px",
        borderRadius: "12px"
    },
    label:{
        color: theme.palette.primary.dark,
        fontWeight: "600"
    },
    btn:{
        border: "none",
        borderRadius: "16px",
        textDecoration: "none",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        padding: "5px 30px",
        marginTop:"15px",
        boxShadow: "0px 15px 25px #038ed433",
    }
});

class CreatePosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: '',
        editorState: EditorState.createEmpty(),
        tags: [],
    }
    handleChange(tags) {
        this.setState({tags})
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
        let payload = {...this.state}
        delete payload.editorState;
        const res = await axios.post("/addPost", payload);
        if(res.data.status === 200){
            alert("Added Successfully");
            location.reload();
        }
    }

    
    render(){
        const { editorState } = this.state;
        const {classes} = this.props;
        return(
            <div className={classes.layout}>
                <div className="actionDiv">
                    <div className={classes.Formdiv}>
                        <form onSubmit={this.savePost}>
                            <div className="form-group">
                                <label className={classes.label}>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label className={classes.label}>Type:</label>
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
                                <label className={classes.label}>Description:</label>
                                <div className={classes.description} >
                                    <Editor
                                        editorState={editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                        toolbar={{
                                            options: ['inline', 'colorPicker', 'list', 'textAlign', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                                            inline: { inDropdown: true },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            link: { inDropdown: true },
                                            history: { inDropdown: true },
                                        }}
                                    />
                                </div>
                            </div>
                            <label className={classes.label}>Tags:</label>
                            <TagsInput value={this.state.tags} onChange={tags => this.handleChange(tags)} />
                            <div className="form-group">
                                <button type="submit" className={classes.btn}>
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
