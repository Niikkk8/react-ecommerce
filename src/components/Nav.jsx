import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EarGearLogo from '../assets/ear_gear-logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = () => {
    function openMenu(){
        document.body.classList += " menu-open";
    }
    function closeMenu(){
        document.body.classList.remove("menu-open")
    }

    return (
        <div>
            <nav>
                <div className="nav_container">
                    <img src={EarGearLogo} alt="" className="logo" />
                    <ul className="nav_links">
                        <li className="nav_list">
                            <Link to="/" className="nav_link nav_link-hover">Home</Link>
                        </li>
                        <li className="nav_list">
                            <Link to="/headsets" className="nav_link nav_link-hover">Headsets</Link>
                        </li>
                        <button className="btn_menu" onClick={openMenu}>
                            <FontAwesomeIcon icon="bars" />
                        </button>
                        <li className="nav_icon">
                            <Link to="/cart" className="nav_link nav_link-primary">
                                <FontAwesomeIcon icon="shopping-cart" />
                            </Link>
                            <span className="cart_length">2</span>
                        </li>
                    </ul>
                    <div className="menu_backdrop">
                        <button className="btn_menu btn_menu-close" onClick={closeMenu}>
                            <FontAwesomeIcon icon="times" />
                        </button>
                        <ul className="menu_links">
                            <li className="menu_list">
                                <Link to="/" className="menu_link">Home</Link>
                            </li>
                            <li className="menu_list">
                                <Link to="/headsets" className="menu_link">Headsets</Link>
                            </li>
                            <li className="menu_list">
                                <Link to="/cart" className="menu_link">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;