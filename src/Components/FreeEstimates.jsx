import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import eIcon from "../UI/estimate-icon.JPEG XR";


const FreeEstimates = () => {

    return (
        <div>
            {/* Free Estimates Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 bg-silver">
                <div className="container">
                    <div className="row">
                        <div className="col-m-3 col-lg-3 col-sm-12 col-xs-12">
                            <div className="estimate-icon">
                                <img src={eIcon} />
                            </div>
                        </div>
                        <div className="col-m-9 col-lg-9 col-sm-12 col-xs-12">
                            <div className="detail-text m-b-40">
                                <h3> FREE ESTIMATES</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p>We're glad to converse with you about your vision and needs and set up a gauge that works for your financial plan. Our appraisals are 100% responsibility-free, and we'll be completely straightforward about the thing you're paying for and how we work. We would be happy to help you plan and restore your deck to make you feel amazed about your outdoor living space </p>
                                <p> On the off chance that you'd prefer to get a thought of when we can begin on your deck and the amount you can anticipate that it should cost, it would be ideal if you don't hesi-tate to reach us today. We'd love to get with you! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Free Estimates Section Ends Here */}
        </div>
    )
}
export default FreeEstimates;