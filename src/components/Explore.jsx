import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row_column">
                    <h2 className="section_title">
                        Explore more <span className="blue">Headsets</span>
                    </h2>
                    <Link to="/headsets">
                        <button className="btn">
                            Explore headsets
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;
