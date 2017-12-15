require('dotenv').config()
// npm install dotenv --S
// Note: Reading from .env via filesystem not going to work for a web app...

// ES6
// 1 component per file!



import React from 'react';          // core component stuff
import ReactDOM from 'react-dom';   // dom manipulation stuff
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// npm install --save youtube-api-search
//  create .env file with appropriate settings
// https://www.npmjs.com/package/dotenv
const API_KEY = 'AIzaSyCPfClJS0Ehqc8C3Jq9FEZx0ipAhC5bUM8'; //process.env.REACT_APP_YOUTUBE_API_KEY;
// showProcessEnv();

YTSearch({key: API_KEY, term: 'algorithms'}, function(data){
    console.log(data);
});

// 1. Create a new component

// const: ES2016 - immutable/constant

// no quotes?? it's ok => JSX - looks like html, but is really javascript

// This is a type, not an instance
// function() => () ES6 syntax, which changes semantics of 'this'

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

// 2. inject this component into the DOM
// querySelector does not seem to apply to all elements...
ReactDOM.render(<App />, document.querySelector('.container'));  

function showProcessEnv() {
    console.log(process.env);
}

