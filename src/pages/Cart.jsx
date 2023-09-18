import React from 'react';
import EmptyCart from '../assets/empty_cart.svg';
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity, removeItem }) => {

    const subTotal = () => {
        let price = 0;
        cart.forEach(item => {
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
                                                <div className="cart_total">&#x20B9;{((headset.salePrice || headset.originalPrice).toFixed(2) * headset.quantity)}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
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
                        {cart.length > 0 && <div className="total">
                            <div className="total_item total_sub-total">
                                <span>Sub Total</span>
                                <span>&#x20B9;{subTotal()}</span>
                            </div>
                            <div className="total_item total_tax">
                                <span>Tax</span>
                                <span>&#x20B9;{(subTotal() * 0.18).toFixed(2)}</span>
                            </div>
                            <div className="total_item total_price">
                                <span>Total</span>
                                <span>&#x20B9;{(subTotal() * 1.18).toFixed(2)}</span>
                            </div>
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
