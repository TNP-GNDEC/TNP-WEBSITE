import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from './Theme'
import Footer from "./Footer";
import Cards from './PostCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppBar from "./Navbar"

function Example() {
    return (
        <div>
            <Router>
            <>
            <div>
                
                    <AppBar />
                
            </div>
            </>
            </Router>
                <Cards />
                <Footer />
        </div>
    );
    }

export default Example;

if (document.getElementById('example')) {
    
    ReactDOM.render(<Example />, document.getElementById('example'));
}
