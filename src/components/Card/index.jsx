import React, { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({
  id,
  title,
  price,
  imageUrl,
  onAdd,
  onFavorite,
  isFavorite = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [favoriteItems, setFavoriteItems] = useState(isFavorite);

  const onClickAdd = () => {
    onAdd({ id, title, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setFavoriteItems(!favoriteItems);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={168}
          height={262}
          viewBox="0 0 168 262"
          backgroundColor="#f5f5f5"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
          <rect x="0" y="166" rx="3" ry="3" width="150" height="20" />
          <rect x="117" y="208" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="203" rx="8" ry="8" width="100" height="15" />
          <rect x="0" y="228" rx="8" ry="8" width="80" height="15" />
        </ContentLoader>
      ) : (
        <div>
          {' '}
          <img
            onClick={onClickFavorite}
            src={favoriteItems ? './img/favorite.svg' : './img/unliked.svg'}
            alt="unliked"
            width={32}
            height={32}
          />
          <img
            className={styles.cardImg}
            src={imageUrl}
            alt="img"
            width={150}
            height={150}
          />
          <h5>{title}</h5>
          <div className={styles.cardInfo}>
            <div>
              <p>Price:</p>
              <b>{price} ₾.</b>
            </div>
            <img
              onClick={onClickAdd}
              src={isItemAdded(id) ? './img/added.svg' : './img/add.svg'}
              alt="plus"
              width={32}
              height={32}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
