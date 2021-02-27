import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/deck-restoration3.JPEG XR";
import drimg2 from "../UI/deck-restoration4.JPEG XR";



const DeckRestoration = () => {

    return (
        <div>
            {/* Deck Restoration Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 bg-silver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
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
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> DECK RESTORATION</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Has your deck abided more good times? It's simple for a deck to capitulate with the im-pacts of unforgiving climate and general mileage over the long run. So, if your deck could utilize some consideration, we're at your service at Source Energy's carpentry services. We offer deck restoration services (i.e., Rotten wood replacements, deck/porch refinish-ing: staining, painting, sealing, lumber work, etc.) for customers in Wheaton, Illinois&amp; The Western Chicago Suburbs. Regardless of your deck's condition, we can make it put its best self forward with the goal that it serves you well for the long stretch. </p>
                                <p> When you recruit our group for deck restoration, you'll get the fantastic customer ser-vice and excellent craft you merit. We highly esteem offering incredible worthwhile keeping our rates sensible and reasonable. Furthermore, when you select us, you can have confidence that we'll work rapidly and proficiently to finish your task in an ideal design. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deck Restoration Section Ends Here */}
        </div>
    )
}
export default DeckRestoration;