import React from 'react';

const Cart = () => {
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
                                <div className="cart_item">
                                    <div className="cart_headset">
                                        <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="cart_headset-img" />
                                        <div className="cart_headset-info">
                                            <span className="cart_headset-title">
                                                Crack the coding interview
                                            </span>
                                            <span className="cart_headset-price">
                                                &#x20B9;20
                                            </span>
                                            <button className="cart_headset-remove">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart_quantity">
                                        <input type="number"min={0} max={99} className="cart_input" />
                                    </div>
                                    <div className="cart_total">&#x20B9;20</div>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <div className="total_item total_sub-total">
                                <span>Sub Total</span>
                                <span>&#x20B9;90</span>
                            </div>
                            <div className="total_item total_tax">
                                <span>Tax</span>
                                <span>&#x20B9;10</span>
                            </div>
                            <div className="total_item total_price">
                                <span>Total</span>
                                <span>&#x20B9;100</span>
                            </div>
                            <button className="btn btn_checkout no-cursor" onClick={() => alert("Have a great day!")}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
