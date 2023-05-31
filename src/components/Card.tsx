import React from 'react';

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

const MovieItem = ({ movie }: MovieItemProps) => {
    return (
        <div className='m-3 flex flex-wrap ' >

            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {movie.title}
                        <div className="badge badge-secondary">{movie.vote_average}⭐</div>
                    </h2>
                    <p>Release Date : {movie.release_date}</p>
                    {/* <p>{movie.overview} {movie.id}</p> */}
                    <div className="card-actions justify-end">
                        
                    <button className="btn btn-outline">❤️</button>
                    <button className="btn">Detail </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
