import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [goods, setGoods] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        'https://612ce387ab461c00178b5f65.mockapi.io/cart'
      );
      const favoritesResponse = await axios.get(
        'https://612ce387ab461c00178b5f65.mockapi.io/favorites'
      );
      const goodsResponse = await axios.get(
        'https://612ce387ab461c00178b5f65.mockapi.io/goods'
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setGoods(goodsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://612ce387ab461c00178b5f65.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://612ce387ab461c00178b5f65.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Failed to add to favorites');
    }
  };

  const onRemoveCart = (id) => {
    axios.delete(`https://612ce387ab461c00178b5f65.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://612ce387ab461c00178b5f65.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          'https://612ce387ab461c00178b5f65.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favorites');
    }
  };

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        goods,
        cartItems,
        favorites,
        isItemAdded,
        onAddFavorite,
        onAddToCart,
        setCart,
        setCartItems,
      }}
    >
      <div className="wrapper">
        {cart && (
          <Drawer
            closeCart={() => {
              setCart(false);
            }}
            onRemove={onRemoveCart}
            cartItems={cartItems}
          />
        )}
        <Header
          openCart={() => {
            setCart(true);
          }}
        />
        <Route path="/" exact>
          <Home
            goods={goods}
            cartItems={cartItems}
            searchValue={searchValue}
            onSearchInput={onSearchInput}
            setSearchValue={setSearchValue}
            onAddFavorite={onAddFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites">
          <Favorites onAddFavorite={onAddFavorite} onAddToCart={onAddToCart} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
