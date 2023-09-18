import React from 'react';

const Price = ({salePrice, originalPrice}) => {
    return (
        <div className="headset_price">
            {
                salePrice ? (
                    <>
                        <span className="headset_price-normal">&#x20B9;{originalPrice}</span>&#x20B9;{salePrice}
                    </>
                ) : (<>&#x20B9;{originalPrice}</>)
            }
        </div>
    );
}

export default Price;
