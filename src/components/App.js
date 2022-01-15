import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/serach', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
    
  };


  render () {
    return (
      <div><SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;