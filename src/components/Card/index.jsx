import React, { useState } from 'react';

import styles from './Card.module.scss';

function Card({ title, price, img, onAdd }) {
  const [add, setAdd] = useState(false);

  const onClickAdd = () => {
    onAdd({ title, price, img });
    setAdd(!add);
  };

  return (
    <div className={styles.card}>
      <img src="./img/unliked.svg" alt="unliked" width={32} height={32} />
      <img
        className={styles.cardImg}
        src={img}
        alt="img"
        width={150}
        height={150}
      />
      <h5>{title}</h5>
      <div className={styles.cardInfo}>
        <div>
          <p>Price:</p>
          <b>{price} gel.</b>
        </div>
        <img
          onClick={onClickAdd}
          src={add ? './img/added.svg' : './img/add.svg'}
          alt="plus"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}

export default Card;
