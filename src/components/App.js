import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('',{
            
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSumbit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
