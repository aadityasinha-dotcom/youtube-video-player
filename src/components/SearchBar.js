import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            values={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} 
                        />
                        <Validator />
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
