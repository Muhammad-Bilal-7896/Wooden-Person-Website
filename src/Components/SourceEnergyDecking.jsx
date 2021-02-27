import React from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";


import compoImg1 from "../UI/composite-deck-head1.JPEG XR";
import compoImg2 from "../UI/composite-deck-head2.JPEG XR";
import compoImg3 from "../UI/composite-deck-head3.JPEG XR";
import compoImg4 from "../UI/composite-deck-head4.JPEG XR";


const SourceEnergyDecking = () => {

    return (
        <div>

            {/* Composite Decks Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 bg-silver">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-image">
                                <div className="carousel slide carousel-fade" data-mdb-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-mdb-interval="1000">
                                            <img src={compoImg1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={compoImg2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={compoImg3} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={compoImg4} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <br/>
                                <h3> SOURCE ENERGY FAVORITE DECKING CHOICE: COMPOSITE DECKS</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Composite decking is rapidly turning into the head material for custom decks in Whea-ton. Homeowners pick composite decks for their long-life expectancy, low support, high sturdiness, and the huge range of accessible plan alternatives. In case you're searching for an extravagance outdoor living space that sticks out, enhances your home, and is sensibly priced, composite decking might be your top decision. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Composite Decks Section Ends Here */}
        </div >
    )
}
export default SourceEnergyDecking;