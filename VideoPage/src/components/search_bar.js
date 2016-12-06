import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input></input>;
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term} 
                    onChange={this.onInputChange.bind(this)} />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

}

export default SearchBar;
