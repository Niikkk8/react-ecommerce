// Imports
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Price from "./Price";

//component for rendering headset information.
const Headset = ({ headset }) => {
    //hold the image data.
    const [img, setImg] = useState();

    //useEffect hook to load the image when the component is mounted.
    useEffect(() => {
        // Create a new Image object.
        const image = new Image();
        // Set the source URL of the image to the headset's URL.
        image.src = headset.url;

        // Once the image is loaded, set it as the component's image after a delay.
        image.onload = () => {
            setTimeout(() => {
                setImg(image);
            }, 350)
        }
    })

    //Render the headset information.
    return (
        <div className="headset">
            {
                //Check if the image has been loaded.
                img ? (
                    <>
                        {/* Link to the detailed page of the headset */}
                        <Link to={`/headsets/${headset.id}`}>
                            <figure className="headset_img-wrapper">
                                {/* Display the headset image */}
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
                    // If the image is not loaded, display skeletons.
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

export default Headset;