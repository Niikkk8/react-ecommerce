import React from "react";
import LandingSvg from '../assets/undraw_video_game_night_8h8m.svg';

const Landing = () => {
    return(
        <div>
            <section id="landing">
                <header>
                    <div className="header_container">
                        <div className="header_description">
                            <h1>Change the way you listen.</h1>
                            <h2>Find your dream headset with <span className="blue">EarGear.</span></h2>
                            <a href="#features">
                                <button className="btn">Browse Headsets</button>
                            </a>
                        </div>
                        <figure className="header_img-wrapper">
                            <img src={ LandingSvg } alt="" />
                        </figure>
                    </div>
                </header>
            </section>
        </div>
    )
}

export default Landing;