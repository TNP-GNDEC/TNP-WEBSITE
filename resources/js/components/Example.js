import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
<<<<<<< HEAD
/* for global custom theme */
import { Theme } from './Theme'
=======
import Footer from "./Footer";
>>>>>>> c82ba60a0e4cb148298b64f573e16c471edaa1d4

function Example() {
    return (
        <div>
<<<<<<< HEAD
            <Navigation/>
=======
            <Navigation />
            <Footer />
>>>>>>> c82ba60a0e4cb148298b64f573e16c471edaa1d4
        </div>
        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
