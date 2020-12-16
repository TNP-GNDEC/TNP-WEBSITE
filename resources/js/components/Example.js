import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
import { Theme } from './Theme'
import Footer from "./Footer";

function Example() {
    return (
        <div>
            <Navigation />
            <Footer />
        </div>
        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
