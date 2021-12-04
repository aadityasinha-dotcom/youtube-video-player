import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const responce = await axios
        .get('http://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',     //client id
            }
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
