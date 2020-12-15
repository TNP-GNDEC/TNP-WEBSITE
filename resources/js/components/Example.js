import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppBar from "./Navbar"




function Example() {
    return (
        <Router>
            <>
            <div>
                
                    <AppBar />
                

            </div>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    
    ReactDOM.render(<Example />, document.getElementById('example'));
}
