// Imports
import React from 'react';
import EmptyCart from '../assets/empty_cart.svg';
import { Link } from 'react-router-dom';

//component for rendering the shopping cart.
const Cart = ({ cart, changeQuantity, removeItem }) => {
    // Function to calculate the total price of items in the cart.
    const total = () => {
        let price = 0;
        cart.forEach(item => {
            // Calculate the price based on sale price if available, otherwise use the original price.
            price += (item.salePrice || item.originalPrice) * item.quantity
        })
        return price;
    }

    return (
        <div id="headsets_body">
            <main id="headsets_main">
                <div className="headsets container">
                    <div className="row">
                        <div className="headset_selected-top">
                            <h2 className="cart_title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart_header">
                                <span className="cart_headset">Headset</span>
                                <span className="cart_quantity">Quantity</span>
                                <span className="cart_total">Price</span>
                            </div>
                            <div className="cart_body">
                                {
                                    // Map through the items in the cart and render cart item details.
                                    cart.map(headset => {
                                        return (
                                            <div className="cart_item">
                                                <div className="cart_headset">
                                                    <img src={headset.url} alt="" className="cart_headset-img" />
                                                    <div className="cart_headset-info">
                                                        <span className="cart_headset-title">
                                                            {headset.title}
                                                        </span>
                                                        <span className="cart_headset-price">
                                                            &#x20B9;{(headset.salePrice || headset.originalPrice).toFixed(2)}
                                                        </span>
                                                        <button className="cart_headset-remove" onClick={() => removeItem(headset)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart_quantity">
                                                    <input type="number"
                                                        min={0}
                                                        max={99}
                                                        className="cart_input"
                                                        value={headset.quantity}
                                                        onChange={(event) => changeQuantity(headset, event.target.value)} />
                                                </div>
                                                <div className="cart_total">
                                                    &#x20B9;{((headset.salePrice || headset.originalPrice).toFixed(2) * headset.quantity)}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* Display a message and a button if the cart is empty */}
                            {cart.length === 0 && <div className="cart_empty">
                                <img src={EmptyCart} alt="" className="cart_empty-img" />
                                <h2>You don't have any headsets in your cart!</h2>
                                <Link to="/headsets">
                                    <button className="btn">
                                        Browse Headsets
                                    </button>
                                </Link>
                            </div>}
                        </div>
                        {/* Display the total price and checkout button if the cart is not empty */}
                        {cart.length > 0 && <div className="total">
                            <div className="total_item total_sub-total">
                                <span>Sub Total</span>
                                <span>&#x20B9;{(total() * 0.78125).toFixed(2)}</span>
                            </div>
                            <div className="total_item total_tax">
                                <span>Tax</span>
                                <span>&#x20B9;{(total() * 0.21875).toFixed(2)}</span>
                            </div>
                            <div className="total_item total_price">
                                <span>Total</span>
                                <span>&#x20B9;{(total()).toFixed(2)}</span>
                            </div>
                            {/* Button to proceed to checkout (currently alerts a message) */}
                            <button className="btn btn_checkout no-cursor" onClick={() => alert("I'm still working on it!")}>
                                Proceed to checkout
                            </button>
                        </div>}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
