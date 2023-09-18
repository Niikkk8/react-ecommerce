import { Link } from "react-router-dom";
import React from "react";
import Rating from "./Rating";
import Price from "./Price";

const Headset = ({ headset }) => {
    return (
        <div className="headset">
            <Link to={`/headsets/${headset.id}`}>
                <figure className="headset_img-wrapper">
                    <img src={headset.url} alt="" className="headset_img" />
                </figure>
            </Link>
            <div className="headset_title">
                <Link to={`/headsets/${headset.id}`} className="headset_title-link">{headset.title}</Link>
            </div>
            <Rating rating={headset.rating} />
            <Price salePrice={headset.salePrice} originalPrice={headset.originalPrice}/>
        </div >
    )
}

export default Headset;