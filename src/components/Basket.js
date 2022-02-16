import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.10;
  const deliveryPrice = itemsPrice > 30 ? 0 : 3;
  const totalPrice = itemsPrice + taxPrice + deliveryPrice;
  return (
    <aside>
      <h2 className="checkOut">Cart Items</h2>
      <hr></hr>

      <div>
        {cartItems.length === 0 && <div className="checkOut">Your basket is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>

            <div className="checkOutProducts">{item.name}


              <button onClick={() => onRemove(item)} className="addRemove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="addRemove">
                +
              </button>
              <button onClick={() => onDelete(item)} className="delete">
                x
              </button>
            </div>
            <div>
              {item.qty} x €{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>

              <div>Items Price €{itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Tax Price €{taxPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Delivery €{deliveryPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>
                <strong>Total Price €{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="checkOut">
              <button onClick={() => alert('Implement Checkout!')} >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}