import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";


const BottomSlogan = () => {

    return (
        <div>
            {/* Bottom Sologon Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 bottom-slogon-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            Refinishing your present deck is made simple with Source Energy Deck Restoration Services. We will give you the excellent and beautiful deck you need in a brief timeframe.
            </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-md-12 text-center">
                            <a href="#" className="call-us-but">Call Us Today</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Bottom Sologon Section Ends Here */}
        </div>
    )
}
export default BottomSlogan;