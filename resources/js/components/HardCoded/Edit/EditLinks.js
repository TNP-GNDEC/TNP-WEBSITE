import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class EditLinks extends React.Component {
    state = {
        title: '',
        link: '',
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    updateData = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/addLinksItems/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/addLinksItems/${id}/edit`);
        this.setState({title: res.data.data.title});
        this.setState({type: res.data.data.link});
    }

    render(){
        return(
            <div className="layout">
                
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.updateData}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Link:</label>
                                <input type="text" name="link" className="form-control highlight"
                                value={this.state.link} onChange={this.handleInput} 
                                placeholder="Enter the link" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                  
                                    Edit Links Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default EditLinks;