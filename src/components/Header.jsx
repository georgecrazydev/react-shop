import { Link } from 'react-router-dom';

function Header({ openCart }) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img src="./img/logo.svg" alt="logo" width={40} height={40} />

          <div>
            <h3>React shop</h3>
            <p>Best clothing shop</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={openCart}>
          <img src="./img/cart.svg" alt="cart" width={20} height={20} />
          <span>250 ₾.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="./img/liked.svg" alt="liked" width={20} height={20} />
          </Link>
        </li>
        <li>
          <img src="./img/user.svg" alt="user" width={20} height={20} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
