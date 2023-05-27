import React from 'react';

interface Movie {
    id: number;
    title: string;
    rating: number;
    img: string;
}

interface MovieItemProps {
    movie: Movie;
}

class MovieItem extends React.Component<MovieItemProps> {
    render() {
        const { movie } = this.props;

        return (
            <div className='m-3 flex flex-column flex-wrap'>

                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src={movie.img} alt="movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {movie.title}
                            <div className="badge badge-secondary">{movie.rating}⭐</div>
                        </h2>
                        <p>{movie.title}</p>
                        <div className="card-actions justify-end">
                            
                        <button className="btn btn-primary">Watch Now</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MovieItem;
