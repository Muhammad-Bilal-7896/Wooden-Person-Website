import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/finishing-option-deck1.JPEG XR";
import drimg2 from "../UI/finishing-option-deck1.JPEG XR";




const FinishingOptionsDecks = () => {

    return (
        <div>
            {/* Finishing Options for Deck Section Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container">
                    <div className="detail-text">
                        <h3> FINISHING OPTIONS FOR DECKS </h3>
                        <h6 className="line1 m-b-20"> . </h6>
                        <p> There are numerous choices for the security of wooden decks. These incorporate oil-based paints and stains, acrylic and wax wrap up. Source energy deck restoration services have long stretched of involvement, applying an assortment of deck coatings to accomplish various looks on various wood species. Numerous organizations/companies worldwide produce items that will viably ensure wood decks on Wheaton, Illinois, and the Western Chicago Suburbs. These items can accomplish a characteristic wood look or new impact that will supplement different regions of your home and outside spaces around your property.</p>
                        <p> Whenever we have finished the resurfacing of your decking, we will suggest a straightforward upkeep measure that will guarantee long haul insurance from the com-ponents.</p>
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
                        </div>
                    </div>
                </div>
            </section>
            {/* Finishing Options for Deck Section Ends Here */}
        </div>
    )
}
export default FinishingOptionsDecks;