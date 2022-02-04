import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Navbar from './components/Navbar';
import data from './data';


import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (

    <>
      <Navbar></Navbar>
      <div>
        <Header countCartItems={cartItems.length}></Header>
        <div className="mainFlexContainer" id="content">
          <div>
            <Main products={products} onAdd={onAdd}></Main>
          </div>
          <div class="flexitem" id="canvas-right">
            <div class="fixedBasket">
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Basket>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;