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
            <div className='flex flex-box m-10'>
                
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={movie.img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            </div>
           
        );
    }
}

export default MovieItem;
