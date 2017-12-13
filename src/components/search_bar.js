import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />;
// };

// to maintain state, need a class component
// use ES6 Class
class SearchBar extends Component {

    constructor(props) {
        super(props);

        // this is how we initialize state in a class component
        this.state = { term: '' };
        // always use setState to modify state
    }

    // Every react class component must have render method that returns JSX
    render() {
        // on<the name of the event>. always wrap with curly braces.
        // return <input onChange={this.onInputChange} />
        // return <input onChange={event => console.log(event.target.value)} />

        // return (
        //     <div>
        //         <input onChange={event => this.setState({ term: event.target.value })} />
        //         Value of the input: {this.state.term}
        //     </div>
        // );

        // if value being set by state, then this is a controlled input element
        //  onChange re-renders the component due to the setState call, which then allows value to read from state
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
