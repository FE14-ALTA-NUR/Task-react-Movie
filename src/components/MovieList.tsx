import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Card from './Card';
// import Layout from './Layout';

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = () => {
    const API_KEY = 'a37dc4ea97f3cd0d8bad3a9b9022cf56';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching now playing movies:', error);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-screen p-5">
    {movies.map((movie) => (
      <Card key={movie.id} movie={movie} />
    ))}
  </div>
  
  );
};

export default MovieList;
