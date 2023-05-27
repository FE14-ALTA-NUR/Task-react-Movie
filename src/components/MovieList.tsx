import React from 'react';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
  render() {
    // Sample movie data
    const movies = [
      { id: 1, title: 'ini adalah contoh judul film paling laris', rating: 7.5, img: 'https://cdn1-production-images-kly.akamaized.net/1uaACs5LpFTiCgDRScrNcBPmvLk=/375x500/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4403395/original/057153600_1682043901-MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY_._V1_FMjpg_UX1000_.jpg' },
      { id: 2, title: 'ini adalah contoh judul film paling laris', rating: 7.5, img: 'https://cdn1-production-images-kly.akamaized.net/1uaACs5LpFTiCgDRScrNcBPmvLk=/375x500/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4403395/original/057153600_1682043901-MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY_._V1_FMjpg_UX1000_.jpg' },
      { id: 3, title: 'ini adalah contoh judul film paling laris', rating: 7.5, img: 'https://cdn1-production-images-kly.akamaized.net/1uaACs5LpFTiCgDRScrNcBPmvLk=/375x500/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4403395/original/057153600_1682043901-MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY_._V1_FMjpg_UX1000_.jpg' },
     
    ];

    return (
      <div>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
