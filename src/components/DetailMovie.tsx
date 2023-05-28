import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    poster_path: string | null;
}

interface MovieDetailProps {
  movieId: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const API_KEY = 'a37dc4ea97f3cd0d8bad3a9b9022cf56';
        const url = `https://api.themoviedb.org/3/movie/502356?api_key=${API_KEY}`;
        const response = await axios.get<Movie>(url);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      {/* Render other movie details as needed */}
    </div>
  );
};

export default MovieDetail;
