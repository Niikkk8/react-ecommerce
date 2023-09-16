import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return(
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section_title">
                        Why choose <span className="blue">EarGear</span>
                    </h2>
                    <div className="highlight_wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Easy and Quick"
                            para="Get your headsets delivered almost instantly."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="headphones" />} 
                            title="1500+ Headsets"
                            para="EarGear has a wide range of headsets available, just the way you need it."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags" />} 
                            title="Affordable"
                            para="Get your hands on a pair of headsets for as small as &#x20B9;999."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;