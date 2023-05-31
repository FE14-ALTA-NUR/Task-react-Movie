import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FavState } from "../redux/Favorit";
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
  movieId: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const detail = useSelector(
    (state: { detail: FavState }) => state.detail
  );

  console.log(detail.items)
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const API_KEY = 'a37dc4ea97f3cd0d8bad3a9b9022cf56';
        const url = `https://api.themoviedb.org/3/movie/${detail.items}?api_key=${API_KEY}`;
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
   
    <div className='m-3 flex flex-wrap'>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {movie.title}
                        <div className="badge badge-secondary">{movie.vote_average}⭐</div>
                    </h2>
                    <p>Release Date: {movie.release_date}</p>
                    <div className="card-actions justify-end">
                        
                        {/* <button className="btn" onClick={handleDetailId}>Detail</button> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default MovieDetail;
