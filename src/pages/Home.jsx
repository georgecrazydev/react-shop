import React from 'react';
import Card from '../components/Card';

function Home({
  goods,
  searchValue,
  onSearchInput,
  setSearchValue,
  onAddFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderGoods = () => {
    const filteredGoods = goods.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredGoods).map((item, index) => (
      <Card
        onFavorite={(obj) => onAddFavorite(obj)}
        onAdd={(obj) => onAddToCart(obj)}
        key={index}
        {...item}
        loading={isLoading}
      />
    ));
  };
  return (
    <div className="content">
      <div className="contentTop">
        <h1>
          {searchValue
            ? `Search by order : ${searchValue}`
            : 'All the clothing'}
        </h1>
        <div className="search">
          <input
            onChange={onSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search..."
          />
          <img src="./img/search.svg" alt="search" width={15} height={15} />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue('');
              }}
              className="buttonClose"
              src="./img/close.svg"
              alt="search"
              width={15}
              height={15}
            />
          )}
        </div>
      </div>
      <div className="cardItems">{renderGoods()}</div>
    </div>
  );
}

export default Home;
