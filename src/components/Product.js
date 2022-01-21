import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (

        <div className="card" style={{ width: '22em', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">€{product.price}</p>
                <div>
                    <button onClick={() => onAdd(product)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>

    );
}