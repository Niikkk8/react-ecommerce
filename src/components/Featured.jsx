import React from "react";
import Headset from './ui/Headset.jsx'
import { headsets } from '../data.js'

const Featured = () => {

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section_title">Featured <span className="blue">Headsets</span></h2>
                    <div className="headsets">
                        {
                            headsets.filter(headset => headset.rating === 5)
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 4)
                            .map(headset => <Headset headset={headset} key={headset.id}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;