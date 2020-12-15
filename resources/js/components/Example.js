import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
import Cards from './PostCards';

function Example() {
    return (
        <div>
            {/* <Navigation /> */}
            <Cards />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
