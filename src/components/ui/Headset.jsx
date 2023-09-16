import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import React from "react";

const Headset = ({ headset }) => {
    return (
        <div className="headset">
            <Link to="/headsets/1">
                <figure className="headset_img-wrapper">
                    <img src={headset.url} alt="" className="headset_img" />
                </figure>
            </Link>
            <div className="headset_title">
                <Link to="/headsets/1" className="headset_title-link">{headset.title}</Link>
            </div>
            <div className="headset_ratings">
                {
                    new Array(Math.floor(headset.rating)).fill(0).map((_, index)=><FontAwesomeIcon icon="star" key={index}/>)
                }
                {
                    !Number.isInteger(headset.rating) && <FontAwesomeIcon icon="star-half-alt" />
                }
            </div>
            <div className="headset_price">
                {
                    headset.salePrice ? (
                        <>
                            <span className="headset_price-normal">&#x20B9;{headset.originalPrice}</span>&#x20B9;{headset.salePrice}
                        </>
                    ) : (<>&#x20B9;{headset.originalPrice}</>)
                }
        </div>
        </div >
    )
}

export default Headset;