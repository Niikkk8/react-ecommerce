import React from 'react';
import { headsets } from '../data.js'
import Headset from './ui/Headset.jsx';

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section_title">Discounted <span className="blue">Headsets</span></h2>
                    <div className="headsets">
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

export default Discounted;
