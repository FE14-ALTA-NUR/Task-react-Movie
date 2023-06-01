import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DetailMovieState } from "../redux/DetailMovie";
import { useSelector } from "react-redux";
import Header from '../components/Header';

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

interface MovieDetailProps {
  movieId?: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const detail = useSelector(
    (state: { detail: DetailMovieState }) => state.detail
  );

  console.log(detail)
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const API_KEY = 'a37dc4ea97f3cd0d8bad3a9b9022cf56';
        const url = `https://api.themoviedb.org/3/movie/${detail.value}?api_key=${API_KEY}`;
        const response = await axios.get<Movie>(url);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='w-screen'>
    <Header/>
   
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="py-6">{movie.overview}</p>
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovieDetail;
