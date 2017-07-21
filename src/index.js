import React from 'react';
import ReactDOM from 'react-dom'; //lib

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCFqD9M9nYqPNkTgRCAvTm8M5OBHnBsL-0' ;



//Boilerplate . vanilla.js
//https://babeljs.io/

//Create new component . produce some HTML
const App = ()=> {
    //this
    return ( 
    <div>
        <SearchBar />
    </div>
    ); //jsx
};
// class ; not instance 

    // const App = function () {
    //     return React.createElement(
    //         "div",
    //         null,
    //         "Hi! Gina"
    //     );
    // };
//take this componet's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));