import React from 'react';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Now Playing Movies</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
