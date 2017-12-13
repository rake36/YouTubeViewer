// ES6
// 1 component per file!

import React from 'react';          // core component stuff
import ReactDOM from 'react-dom';   // dom manipulation stuff
import SearchBar from './components/search_bar';

const API_KEY = '<My You Tube API KEY>';
// npm install --save youtube-api-search


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
