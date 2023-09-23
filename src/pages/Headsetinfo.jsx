// Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Headset from "../components/ui/Headset.jsx"

//component for displaying detailed information about a headset.
const Headsetinfo = ({ headsets, addToCart, cart }) => {
    // Get the 'id' parameter from the route URL.
    const { id } = useParams();
    // Find the specific headset based on the 'id' parameter.
    const headset = headsets.find(headset => +headset.id === +id)

    // Function to add the selected headset to the shopping cart.
    function addHeadsetToCart(headset) {
        addToCart(headset)
    }

    // Function to check if the headset is already in the shopping cart.
    function headsetExistsInCart() {
        return cart.find(headset => headset.id === +id)
    }

    return (
        <div id="headsets_main">
            <main id="headsets_main">
                <div className="headsets_container">
                    <div className="row">
                        <div className="headset_selected-top">
                            {/* Link to navigate back to the list of headsets */}
                            <Link to="/headsets" className="headset_link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/headsets" className="headset_link">
                                <h2 className="headset_selected-title-top">Headsets</h2>
                            </Link>
                        </div>
                        <div className="headset_selected">
                            <figure className="headset_selected-figure">
                                <img
                                    src={headset.url}
                                    alt=""
                                    className="headset_selected-img"
                                />
                            </figure>
                            <div className="headset_selected-description">
                                <h2 className="headset_selected-title">
                                    {headset.title}
                                </h2>
                                <Rating rating={headset.rating} />
                                <div className="headset_selected-price">
                                    <Price originalPrice={headset.originalPrice} salePrice={headset.salePrice} />
                                </div>
                                <div className="headset_summary">
                                    <h3 className="headset_summary-title">Summary</h3>
                                    <p className="headset_summary-para">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Incidunt atque laudantium, exercitationem, quis adipisci
                                        iste dignissimos illo quam facilis esse mollitia aut?
                                        Obcaecati id, eum error provident nostrum nam? Eius!
                                    </p>
                                    <p className="headset_summary-para">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Incidunt atque laudantium, exercitationem, quis adipisci
                                        iste dignissimos illo quam facilis esse mollitia aut?
                                        Obcaecati id, eum error provident nostrum nam? Eius!
                                    </p>
                                </div>
                                {
                                    // Check if the headset is already in the cart and display the appropriate button.
                                    headsetExistsInCart() 
                                    ? (
                                        <Link to={`/cart`} className="headset_link">
                                            <button className="btn">Checkout</button> 
                                        </Link>
                                    )
                                    : (
                                        <button className="btn" onClick={() => addHeadsetToCart(headset)}>Add to Cart</button>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="headsets_container">
                    <div className="row">
                        <div className="headset_selected-top">
                            <h2 className="headset_selected-title-top">
                                Recommended Headsets
                            </h2>
                        </div>
                        <div className="headsets">
                            {
                                // Filter and display recommended headsets (rating of 5) excluding the selected one.
                                headsets
                                    .filter(headset => headset.rating === 5 && +headset.id !== +id)
                                    .slice(0, 4)
                                    .map(headset => <Headset headset={headset} key={headset.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Headsetinfo;
