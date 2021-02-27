import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/deck-resurfacing1.JPEG XR";
import drimg2 from "../UI/deck-resurfacing2.JPEG XR";
import drimg3 from "../UI/deck-resurfacing3.JPEG XR";



const DeckResurfacing = () => {

    return (
        <div>
            {/* Deck Resurfacing Section Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container">
                    <div className="detail-text">
                        <h3> DECK RESURFACING </h3>
                        <h6 className="line1 m-b-20"> . </h6>
                        <p> Is your deck beginning to give indications of mileage (wear and tear)? You ought to have the choice to create the most of your deck without agonizing over its appearance at Source Energy'sdeck restoration services, and we offer solid deck resurfacing services for clients in Wheaton and the western suburbs. Regardless of whether your deck is made of wood, vinyl, or a composite material, we have the devices and abilities to make it put its best self forward instantly. </p>
                        <p> At Source Energy's deck services, we highly esteem conveying excellent worth and ser-vice. Regardless of the condition of your deck, we promise to make it look all-around great. We take a conscientious, exhaustive way to deal with each reemerging position we embrace, and we keep our rates sensible without holding back on quality.
                        With sensible evaluating and simple booking, Source Energy's deck restoration servic-es are the company to trust for quality deck repair, restoration, and resurfacing services in Wheaton and surrounding areas.
                      </p>
                    </div>
                    <div className="detail-grids">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="detail-image2">
                                    <img src={drimg1} />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="detail-image2">
                                    <img src={drimg2} />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="detail-image2">
                                    <img src={drimg3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deck Resurfacing Section Ends Here */}
        </div>
    )
}
export default DeckResurfacing;