// Imports
import React from 'react';
import { headsets } from '../data.js'
import Headset from './ui/Headset.jsx';

//component for displaying discounted headsets.
const Discounted = () => {
    return (
        // Section for displaying discounted headsets.
        <section id="recent">
            <div className="container">
                <div className="row">
                    {/* Section title */}
                    <h2 className="section_title">Discounted <span className="blue">Headsets</span></h2>
                    <div className="headsets">
                        {/* 
                            - Filter the list of headsets to include only those with a sale price.
                            - Randomly sort the filtered list.
                            - Take the first 8 headsets from the sorted list.
                            - Map each headset to the Headset component for rendering.
                        */}
                        {headsets
                        .filter(headset => headset.salePrice)
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 8)
                        .map(headset => <Headset headset={headset} key={headset.id} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Export the Discounted component as the default export.
export default Discounted;
