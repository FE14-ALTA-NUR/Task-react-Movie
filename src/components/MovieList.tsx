import React from 'react';
import axios, { AxiosResponse } from 'axios';

import Card from './Card';
interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

interface MovieListState {
  movies: Movie[];
}

class MovieList extends React.Component<{}, MovieListState> {
  state: MovieListState = {
    movies: [],
  };

  componentDidMount() {
    this.fetchNowPlayingMovies();
  }

  fetchNowPlayingMovies = () => {
    const API_KEY = 'a37dc4ea97f3cd0d8bad3a9b9022cf56';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((response: AxiosResponse) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        console.error('Error fetching now playing movies:', error);
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="grid grid-cols-3 gap-4">

        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
          
        ))}
      </div>
    );
  }
}

export default MovieList;