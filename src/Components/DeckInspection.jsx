import React, { useEffect, useState } from 'react';
import Logo from '../UI/logo.JPEG XR';
import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import imgd1 from "../UI/deck-inspection1.JPEG XR";
import imgd2 from "../UI/deck-inspection2.JPEG XR";


const DeckInspection = () => {

    return (
        <div>
            {/* Deck Inspection Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 deck-bg1">
                <div className="container">
                    <div className="row">
                      
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3 className="col-white"> DECK INSPECTION </h3>
                                <h6 className="line1 m-b-20 col-white"> . </h6>
                                <p className="col-white"> The principal thing that we need to decide is the underlying trustworthiness of your deck. Before any therapeutic changes or moves up to the deck, we need to guarantee that your deck is protected and not developing to turn into a likely risk to your property. We check for screws and fasteners that have gotten free over the existence of the deck, just as those that may have rusted or consumed after some time and require substitution. We'll additionally check for free nails and sheets that should be re-joined.</p>
                                <p className="col-white"> In any case, it's what lies underneath the outside of the deck that can affect the main re-quirements of your deck renovation. We will evaluate the state of the footings, the joists' strength, and the associations that protected your deck to the outside of your home. We check for moisture and water damage/rotten wood, indications of rot, or whatever oth-er condition that may bargain your deck's well-being. If fixes or substitutions are re-quired, we speak with you all through the cycle to propose alternatives and work with you to arrive at a cure.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                            <div id="deckinspectionSlide" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-mdb-interval="1000">
                                        <img src={imgd1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-mdb-interval="1000">
                                        <img src={imgd2} className="d-block w-100" alt="..." />
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deck Inspection Section Ends Here */}
        </div>
    )
}
export default DeckInspection;