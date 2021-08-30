function Drawer({ closeCart, cartItems }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTop">
          <h3>Basket</h3>
          <button className="buttonClose" onClick={closeCart}>
            <img src="./img/close.svg" alt="close" width={13} height={13} />
          </button>
        </div>
        <div className="drawerItems">
          {cartItems.map((item, index) => {
            return (
              <div className="drawerItem" key={index}>
                <img src={item.img} alt="img" width={70} height={70} />
                <div>
                  <p>{item.title}</p>
                  <b>{item.price} gel.</b>
                </div>
                <button className="buttonClose">
                  <img
                    src="./img/close.svg"
                    alt="close"
                    width={13}
                    height={13}
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="drawerBottom">
          <ul>
            <li>
              <p>Total:</p>
              <div></div>
              <b>100 gel.</b>
            </li>
            <li>
              <p>Tax 10%:</p>
              <div></div>
              <b>10 gel.</b>
            </li>
          </ul>
          <button className="buttonSubmit">
            <span>Checkout</span>
            <img src="./img/arrow.svg" alt="arrow" width={14} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
