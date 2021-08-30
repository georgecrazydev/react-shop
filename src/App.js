import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
  const [goods, setGoods] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://612ce387ab461c00178b5f65.mockapi.io/goods')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGoods(data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...cartItems, obj]);
  };

  return (
    <div className="wrapper">
      {cart && (
        <Drawer
          closeCart={() => {
            setCart(false);
          }}
          cartItems={cartItems}
        />
      )}
      <Header
        openCart={() => {
          setCart(true);
        }}
      />
      <div className="content">
        <div className="contentTop">
          <h1>All the clothing</h1>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <img src="./img/search.svg" alt="search" width={15} height={15} />
          </div>
        </div>
        <div className="cardItems">
          {goods.map((item, index) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.imgUrl}
              key={index}
              onAdd={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
