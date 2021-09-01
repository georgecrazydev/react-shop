import React, { useContext } from 'react';
import AppContext from '../context';

function Info({ title, image, description }) {
  const { setCart } = useContext(AppContext);

  return (
    <div className="greenButton">
      <div className="drawerEmpty">
        <img src={image} alt="empty" width={120} height={120} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button
        className="buttonBack"
        onClick={() => {
          setCart();
        }}
      >
        <span>Back</span>
        <img src="./img/arrowLeft.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default Info;

//   <h4>Cart is empty</h4>
// <p>Add at least one pair of clothing</p>
