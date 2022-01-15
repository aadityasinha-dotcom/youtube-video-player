import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit = (term) => {

  };

  render () {
    return (
      <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
    );
  }
}

export default App;