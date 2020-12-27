import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Explore from "../../HomeComponent/LeftBar/Explore";
class createExplore extends React.Component {
    state = {
        title: '',
        link: '',
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    saveData = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addExploreItems", this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }

    render(){
        return(
            <div className="layout">
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.saveData}>
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
                                    
                                    Add Item to Explore Card
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Explore />
            </div>
        )
    }
}

export default createExplore;