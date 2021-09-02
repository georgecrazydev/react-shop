import React, { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../context';

import Info from './Info';

function Drawer({ closeCart, cartItems, onRemove }) {
  const { setCartItems } = useContext(AppContext);

  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://612ce387ab461c00178b5f65.mockapi.io/orders',
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      cartItems.forEach((item) => {
        axios.delete(
          `https://612ce387ab461c00178b5f65.mockapi.io/cart/${item.id}`
        );
      });
    } catch (error) {
      alert('Error 404');
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTop">
          <h3>Basket</h3>
          <img
            onClick={closeCart}
            className="closeButton"
            src="img/close.svg"
            alt="close"
            width={32}
            height={32}
          />
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="drawerItems">
              {cartItems.map((item) => {
                return (
                  <div className="drawerItem" key={item.id}>
                    <img src={item.imageUrl} alt="img" width={70} height={70} />
                    <div>
                      <p>{item.title}</p>
                      <b>{item.price} ₾.</b>
                    </div>
                    <img
                      onClick={() => {
                        onRemove(item.id);
                      }}
                      className="closeButton"
                      src="img/close.svg"
                      alt="close"
                      width={32}
                      height={32}
                    />
                  </div>
                );
              })}
            </div>
            <div className="drawerBottom">
              <ul>
                <li>
                  <p>Total:</p>
                  <div></div>
                  <b>{totalPrice} ₾.</b>
                </li>
                <li>
                  <p>Tax 10%:</p>
                  <div></div>
                  <b>{totalPrice * 0.05} ₾.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="buttonSubmit"
              >
                <span>Checkout</span>
                <img src="img/arrow.svg" alt="arrow" width={14} height={12} />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? ' Order is processed!' : 'Cart is empty'}
            description={
              isOrderCompleted
                ? `Your order # ${orderId} will be delivered by courier soon`
                : 'Add at least one pair of clothing'
            }
            image={isOrderCompleted ? 'img/order.png' : 'img/empty.png'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
