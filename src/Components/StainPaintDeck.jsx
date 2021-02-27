import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/stain-painting-deck1.JPEG XR";
import drimg2 from "../UI/stain-painting-deck1.JPEG XR";




const StainPaintDeck = () => {

    return (
        <div>
            {/* Stain or Painting Decks Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 deck-bg2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3 className="col-white"> STAIN OR PAINTING DECKS</h3>
                                <h6 className="line1 m-b-20 col-white"> . </h6>
                                <p className="col-white"> There are numerous alternatives while picking a covering for your exterior decking. Numerous homes in Naperville and the Western Suburbs have wood decks, yards, porches, and walkways that should be kept up to shield from an assortment of climate conditions. Wonderful day off and sun harm unprotected wood, so it is imperative to guarantee wood decking is appropriately shielded from the components; without pro-tection, wooden decking will disintegrate and require untimely fixes and substitution. Support may mean a straightforward, clean and layer of finish or completely sanding and eliminating existing deck coatings, and applying another sealer system. Applying another look or finish for your deck is simple with our wood deck resurfacing system, which a few stages include cleaning, arrangement, and covering.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                            <div className="detail-image">
                                <div className="carousel slide carousel-fade" data-mdb-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-mdb-interval="1000">
                                            <img src={drimg1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={drimg2} className="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Stain or Painting Decks Section Ends Here */}
        </div>
    )
}
export default StainPaintDeck;