import React from "react";
import axios from "axios";
import { EditorState, convertToRaw, ContentState, createWithContent } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditPosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: '',
        editorState: EditorState.createEmpty(),
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
    getSavedEditorData(data){
        this.setState({editorState: EditorState.createWithContent(data)});
    }

    updatePost = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/addPost/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/addPost/${id}/edit`);
        this.setState({title: res.data.posts.title});
        this.setState({type: res.data.posts.type});
        this.setState({description: res.data.posts.description});
        const descript = res.data.posts.description;
        const blocksFromHtml = htmlToDraft(descript);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        this.setState({editorState: EditorState.createWithContent(contentState)});
        
    }

    render(){
        return(
            <div className="layout">
                
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.updatePost}>
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
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <div className="App">
                                    <Editor
                                            editorState={this.state.editorState}
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            onEditorStateChange={this.onEditorStateChange}
                                     />
                                </div>
                            
                                {/* <textarea type="text" name="description" className="form-control highlight"
                                value={this.state.description} onChange={this.handleInput} 
                                placeholder="Write the Description" required/> */}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    Edit Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default EditPosts;