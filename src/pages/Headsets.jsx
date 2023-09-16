import React, {useState} from 'react';
import Headset from '../components/ui/Headset';

const Headsets = ({ headsets: initialHeadsets}) => {
    const [headsets, setHeadsets] = useState(initialHeadsets);

    function filterHeadsets(filter){
        if(filter === "low_to_high"){
            setHeadsets(headsets.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
            )
        }
        if(filter === "high_to_low"){
            setHeadsets(headsets.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
            )
        }
        if(filter === "rating"){
            setHeadsets(headsets.slice().sort((a, b) => b.rating - a.rating))
        }
    }
    return (
        <div id='headsets_body'>
            <main id="headsets_main">
                <section>
                    <div className="headsets_container">
                        <div className="row">
                            <div className="headsets_header">
                                <h2 className='section_title headsets_header-title'>All <span className="blue">Headsets</span></h2>
                                <select name="" id="filter" defaultValue="default" onChange={(event) => filterHeadsets(event.target.value)}>
                                    <option value="default" disabled>Sort</option>
                                    <option value="low_to_high">Price, Low to High</option>
                                    <option value="high_to_low">Price, High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                            <div className="headsets">
                                {
                                    headsets
                                    .map(headset => <Headset headset={headset} key={headset.id}/>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Headsets;
