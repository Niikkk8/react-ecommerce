import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Price from "./Price";

const Headset = ({ headset }) => {
    const [img, setImg] = useState();

    useEffect(() => {
        const image = new Image();
        image.src = headset.url;

        image.onload = () => {
            setTimeout(() => {
                setImg(image);
            }, 350)
        }
    })

    return (
        <div className="headset">
            {
                img ? (
                    <>
                        <Link to={`/headsets/${headset.id}`}>
                            <figure className="headset_img-wrapper">
                                <img src={img.src} alt="" className="headset_img" />
                            </figure>
                        </Link>
                        <div className="headset_title">
                            <Link to={`/headsets/${headset.id}`} className="headset_title-link">
                                {headset.title}
                            </Link>
                        </div>
                        <Rating rating={headset.rating} />
                        <Price
                            originalPrice={headset.originalPrice}
                            salePrice={headset.salePrice}
                        />
                    </>
                ) : (
                    <>
                        <div className="headset_img-skeleton"></div>
                        <div className="skeleton headset_title-skeleton"></div>
                        <div className="skeleton headset_rating-skeleton"></div>
                        <div className="skeleton headset_price-skeleton"></div>
                    </>
                )
            }
        </div>
    )
}
export default Headset