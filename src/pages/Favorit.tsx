// import React from 'react';
import { useSelector } from 'react-redux';
import { FavState } from '../redux/Favorit';

const FavoritMovie = () => {
  const favorit = useSelector((state: FavState) => state.favItems);

  console.log(favorit);
  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorit.length > 0 ? (
        <ul>
          {favorit.map((item) => (
            <li key={item.favId}>{item.favId}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritMovie;
