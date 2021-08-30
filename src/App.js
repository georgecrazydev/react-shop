import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content">
        <div className="contentTop">
          <h1>All the clothing</h1>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <img src="./img/search.svg" alt="search" width={15} height={15} />
          </div>
        </div>
        <div className="cardItems">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
