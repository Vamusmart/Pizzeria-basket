import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (

        <div className="card" >
            <img src={product.image} alt={product.name} />
            <div>
                <h3 className="cardTitle">{product.name}</h3>
                <p className="cardText">€{product.price}</p>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        </div>

    );
}