import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
/* for global custom theme */
import { Theme } from './Theme'

function Example() {
    return (
        <div>
            <Navigation/>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
