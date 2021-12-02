import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('http://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID'     //client id
            }
        }).then((response) => {
            console.log(response);
        })
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
