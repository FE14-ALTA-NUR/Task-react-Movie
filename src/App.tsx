import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
// import MovieDetail from './components/DetailMovie';

class App extends React.Component {
  render() {
    return (
      <div className="p-4">
        <Header/>
        {/* <MovieDetail/> */}
        <MovieList />
      </div>
    );
  }
}

export default App;
