import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { detail } from '../redux/DetailMovie';
import { addFavorit, favItem } from '../redux/Favorit';

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string | null;
}

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleDetailId = () => {
    dispatch(detail(movie.id));
    console.log(movie.id);
    navigate('/detail');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    const item: favItem = {
      favId: movie.id,
    };
    dispatch(addFavorit(item));
  };

  return (
    <div className="m-3 flex flex-wrap">
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
            <button className={`btn btn-outline ${isLiked ? 'bg-secondary' : ''}`} onClick={handleLike}>
              ❤️
            </button>
            <button className="btn" onClick={handleDetailId}>
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
