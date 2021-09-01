import React, { useContext } from 'react';
import AppContext from '../context';

import Card from '../components/Card';

function Favorites() {
  const { favorites, onAddFavorite, onAddToCart } = useContext(AppContext);

  return (
    <div className="content">
      <div className="contentTop">
        <h1>My bookmarks</h1>
      </div>
      <div className="cardItems">
        {favorites.map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddFavorite(obj)}
            onAdd={(obj) => onAddToCart(obj)}
            isFavorite={true}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
