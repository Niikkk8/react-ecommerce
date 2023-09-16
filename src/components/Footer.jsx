import React from 'react';
import Logo from '../assets/ear_gear-logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row_column">
                    <Link to="/">
                        <figure className="footer_logo">
                            <img src={Logo} alt="" className="footer_logo-img" />
                        </figure>
                    </Link>
                    <div className="footer_list">
                        <Link to="/" className="footer_link">Home</Link>
                        <span className="footer_link no-cursor">Home</span>
                        <Link to="/headsets" className="footer_link">Headsets</Link>
                        <Link to="/cart" className="footer_link">Cart</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
