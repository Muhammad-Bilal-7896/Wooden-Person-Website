import React from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import deckRestorarsImg1 from "../UI/experience-deck-restorators1.JPEG XR";
import deckRestorarsImg2 from "../UI/experience-deck-restorators2.JPEG XR";


const ExperiencedDeck = () => {

    return (
        <div>
            {/* Experience Deck Restorators Section Starts Here */}
            <section className="pad-bot-60 pad-top-60 deck-bg3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3 className="col-white"> WE'RE EXPERIENCED DECK RESTORATORS</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p className="col-white"> We have a consolidated 17 years of involvement to reestablish and restore decks in Wheaton's,its suburbs, and many tasks added to our repertoire. We're centered around quality craftsmanship, strength, and building you a stunning deck to invest your lawn energy in. Our certified staff is well educated about reclamation and primary rules, with the correct instruments and gear to finish projects securely and effectively.  <br /> We utilize the business's absolute best items and help you get your fantasy deck assembled the correct way and on a sensible financial plan. We'll regard your deck as though it were our own!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div className="carousel slide carousel-fade" data-mdb-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-mdb-interval="1000">
                                            <img src={deckRestorarsImg1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={deckRestorarsImg2} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Experience Deck Restorators Section Ends Here */}
        </div >
    )
}
export default ExperiencedDeck;