// ES6

import React from 'react';          // core component stuff
import ReactDOM from 'react-dom';   // dom manipulation stuff

// 1. Create a new component

// const: ES2016 - immutable/constant

// no quotes?? it's ok => JSX - looks like html, but is really javascript

// This is a type, not an instance
// function() => () ES6 syntax, which changes semantics of 'this'

const App = () => {
    return <div>Hi!</div>;
}

// 2. inject this component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

// querySelector does not seem to apply to all elements...