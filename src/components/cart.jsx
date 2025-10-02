import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeFromCart,incrementQuantity,decrementQuantity } from "../shoppingSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container5">
      <h2
        className="d-flex justify-content-center align-items-center p-3"
        style={{ gap: "20px" }}
      >
        Your Cart
        <Link className="cart1 nav-link" to="/products">
          <img
              src="https://cdn-icons-png.flaticon.com/128/7915/7915208.png" style={{ width: "40px", height: "40px" }}
            className="cart1-icon"
            alt="cart"
          />
        </Link>
      </h2>

      {cartItems.length === 0 ? (
        <p className="pcart">
          Your cart is empty.
          <img
            src="https://cdn-icons-png.flaticon.com/128/11010/11010851.png"
            style={{ width: "70px", height: "70px" }}
            alt="empty-cart"
          />
        </p>
      ) : (
        <div className="row justify-content-center">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center carts"
            >
              <div className="cart-item p-3 text-center  ">
                <img
                  src={item.image}
                  alt={item.name}
                 
                />
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>

               
                <div
                  className="d-flex justify-content-center align-items-center mb-2"
                  style={{ gap: "10px" }}
                >
                  <button
                    className="btnA"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btnA"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

               
                <p>Total: ${item.price * item.quantity}</p>

                <button
                  className="btnR"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}


          <div className="col-12 text-center">
            <h4>Grand Total: ${totalPrice .toFixed(2)}</h4>
            <Link to="/checkout">
  <button className="btnC">Checkout</button>
</Link>
         
          </div>
        </div>
      )}
    </div>
  );
};


export default Cart;
