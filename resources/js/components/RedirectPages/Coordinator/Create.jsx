import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Editor from "./Editor";

class CreatePosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
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
                                <Editor />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    Add Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePosts;