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
    })
  };

  render () {
    return (
      <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
    );
  }
}

export default App;