import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/custom-pressure-treated-decks1.JPEG XR";
import drimg2 from "../UI/custom-pressure-treated-decks2.JPEG XR";
import drimg3 from "../UI/custom-pressure-treated-decks3.JPEG XR";
import drimg4 from "../UI/custom-pressure-treated-decks4.JPEG XR";



const CustomPressureDeck = () => {

    return (
        <div>
            {/* Custom Pressure Treated Decks Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 bg-silver">
                <div className="container">
                    <div className="detail-text m-b-40">
                        <h3> CUSTOM PRESSURE TREATED DECKS</h3>
                        <h6 className="line1 m-b-20"> . </h6>
                        <p style={{ maxWidth: '900px' }}> Critical factor treated decks are one of the top decisions for some property owners who need a good extravagance wood look that is both tough and practical. Pressing treated wood is flexible, simple to work with, can withstand Wheaton's hostile environment, and battle insects and pests.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={drimg1} />
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={drimg2} />
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={drimg3} />
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={drimg4} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Custom Pressure Treated Decks Section Ends Here */}
        </div>
    )
}
export default CustomPressureDeck;