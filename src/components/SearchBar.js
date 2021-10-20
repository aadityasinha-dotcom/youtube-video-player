import React from "react";

class SearchBar extends React.Component {
    onInputChange (event) {
        console.log(event.target.value);
    }
    // hello frands

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
