import React from "react";

class SearchBar extends React.Component {
    state = { term = ' ' };

    onInputChange = (event) => {      //method to take input
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {   //method to submit input
        event.preventDefault();

        // TODO: make sure we call
        // callback from parent component
    }
    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;