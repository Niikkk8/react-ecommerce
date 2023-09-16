import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Headsetinfo = ({headsets}) => {
    return (
        <div id='headsets_main'>
            <main id="headsets_main">
                <div className="headsets_container">
                    <div className="row">
                        <div className="headset_selected-top">
                            <Link to="/headsets" className="headset_link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/headset" className='headset_selected-title'></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Headsetinfo;
