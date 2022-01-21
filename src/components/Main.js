import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (

    <main className="block col-12">
      <h2>What Pizza do you fancy today?</h2>
      <h10>Free Delivery on Orders Over €30</h10>
      <hr></hr>
      <div>
        <div className="row">
          {products.map((product) => (

            <Product key={product.id} product={product} onAdd={onAdd} ></Product>
          ))}
        </div>
      </div>
    </main>
  );
}

