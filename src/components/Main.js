import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (

    <main>
      <div className="mainTitle">
        <h2>Which Pizza do you fancy today?</h2>
        <h3>Free Delivery on Orders Over €30</h3>
      </div>
      <hr></hr>
      <div>
        <div>
          {products.map((product) => (

            <Product key={product.id} product={product} onAdd={onAdd} ></Product>
          ))}
        </div>
      </div>
    </main>
  );
}

