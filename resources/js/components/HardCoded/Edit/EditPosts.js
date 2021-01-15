import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class EditPosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleEditorInput =  ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
        this.setState({
            description: data,
        });
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
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data={this.state.description}
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