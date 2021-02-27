import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import drimg1 from "../UI/deck-repair1.JPEG XR";
import drimg2 from "../UI/deck-repair2.JPEG XR";



const DeckRepair = () => {

    return (
        <div>
              {/* Deck Repair Section Starts Here */}
      <section className="pad-top-60 pad-bot-60">
        <div className="container">
          <div className="detail-text">
            <h3> DECK REPAIR </h3>
            <h6 className="line1 m-b-20"> . </h6>
            <p>Regardless of whether your deck has supported broad harm or is beginning to indicate mileage, we are the company that gives quick and quality deck repair service in Whea-ton, Illinois, and the western Chicago suburbs. Our deck restoration company is created to fix a wide range of decks, including wood, vinyl, or composite material, and will also save you a great deal of time looking for repairers and stain services.</p>
            <p> We give moderate answers for dry deck rot, termites, mold, stripped completions, and other deck patio repair issues. It's an exceptionally savvy approach as we can sand and pre-stain numerous pieces of your deck during the way toward being built or repaired. </p>
            <p> With long and stretches years of experience restoring decks, intermittently, we are sup-planting wood on the faulty installation report. Trouble spots involve rotting structures due to heavy moisture, dispersing between sheets where downpour will pool, and twisted or broke wood because of the low timber quality.</p>
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
      {/* Deck Repair Section Ends Here */}
        </div>
    )
}
export default DeckRepair;