import React from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import processImg1 from "../UI/custom-pressure-treated-decks1.JPEG XR";
import processImg2 from "../UI/custom-pressure-treated-decks2.JPEG XR";
import processImg3 from "../UI/custom-pressure-treated-decks3.JPEG XR";


const OurProcess = () => {

    return (
        <div>
            {/* Our Process Section Starts Here */}
            <section className="pad-bot-60 pad-top-60">
                <div className="container">
                    <div className="detail-text m-b-40">
                        <h3> OUR PROCESS</h3>
                        <h6 className="line1 m-b-20"> . </h6>
                        <p> Source Energy's decks offer you top quality craftsmanship. With a red seal understudy woodworker on each place of work, we can guarantee you professional work. Every sin-gle deck is refinished and repaired like it was our own.</p>
                        <p> When we come out to converge you, we evaluate the space and tune in to your fantasy space related to your spending necessities. We will make a few recommendations de-pendent on our experience and your necessities in light of these elements. We, at that point, attract up an arrangement to be evaluated and affirmed by you!</p>
                        <p> Each task is made with care from the beginning. It begins with a strong establishment. Regardless of whether it's solid or screw heaps, we guarantee the deck sits on a sound base. Next comes the outlining, where we guarantee each shaft and joist is nailed to meet and surpass the Wheaton construction regulation. Finally, we add top sheets and railings, which are introduced with accuracy to give you a delightful completed item. We restoredecks Wheaton house owners are proud of!</p>
                        <p> We can likewise refinish, stain, paint, seal and redo excellently to make your deck professional and more tremendous. </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={processImg1} />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={processImg2} />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="renovate-image2">
                                <img src={processImg3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Process Section Ends Here */}
        </div >
    )
}
export default OurProcess;