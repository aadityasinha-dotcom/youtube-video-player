import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import imageList from "./imageList";

class App extends React.Component {
    state = { images: null };


    onSearchSubmit = async (term) => {
        const responce = await unsplash.get('/search/photos',{
            params: { query: term }
        });

        this.setState({ images: responce.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSumbit={this.onSearchSubmit} />
                <imageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
