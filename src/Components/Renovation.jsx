import React, { useEffect, useState } from 'react';
import '../Styling/Renovation.css';
import '../Styling/animate.css';
import imgl from '../UI/renovation-left-image.JPEG XR';
import imgr1 from '../UI/renovation-right1.JPEG XR';
import imgr2 from '../UI/renovation-right2.JPEG XR';




const Renovation = () => {

    return (
        <div>

            {/* Renovation Needed Section Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                            <div className="renovate-text">
                                <h2> Source Energy Restoration Services Wheaton.
                                Deck Restoration Services Serving Wheaton and Nearby Suburbs!
                </h2>
                                <h3> Deck restoration – Are you loking for a deck repair, deck refi-nishing or deck restoration? We will do it all in Wheaton! Check our offer! </h3>
                                <h4> IS A RENOVATION NEEDED?</h4>
                                <p className="para-text1"> It very well maybe just that when you take a gander at your deck, you see that the design is beginning to show its age. If the attacks of time and climate have begun to affect your open-air space negatively, you may not need a full redesign, only some extra cleaning and upkeep to reestablish its unique gloss. In any case, it is essential to lead an intensive evaluation of the deck's primary sufficiency in general, to get underneath the surface and guarantee that all parts are as yet fit as a fiddle. While another layer of deck stain or paint is reviving the deck's vibe, you need to guarantee that your speculation isn't undermined due to an issue that you can't see.</p>
                                <p className="para-text1"> An all-around kept up deck can keep going for a lifetime; however, when our bustling timetables keep us from routine support year over year, the lacks that create can flag a significant fix or substitution. It's ideal for getting issues that can make early so little, favorable to dynamic fixes. At Source Energy Deck Restoration, we have counseled many deck fix and redesign projects in Wheaton and surrounding areas. Here's our methodology. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                            <div className="renovate-image1">
                                <img src={imgl} />
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={imgr1} />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={imgr2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Renovation Needed Section Ends Here */}
        </div>
    )
}
export default Renovation;