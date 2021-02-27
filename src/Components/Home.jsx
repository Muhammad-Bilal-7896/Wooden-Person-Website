import React from 'react';
 
import Header from "./Header";
import SlideShow from "./SlideShow";
import Renovation from "./Renovation";
import DeckInspection from "./DeckInspection";
import DeckRepair from "./DeckRepair";
import DeckRestoration from "./DeckRestoration";
import DeckResurfacing from "./DeckResurfacing";
import StainPaintDeck from "./StainPaintDeck";
import FinishingOptionsDecks from "./FinishingOptionsDecks";
import CustomPressureDeck from "./CustomPressureDeck";
import PressureTreatedWood from "./PressureTreatedWood";
import SourceEnergyDecking from "./SourceEnergyDecking";
import WhatIsCD from "./WhatIsCD";
import ExperiencedDeck from "./ExperiencedDeck";
import OurProcess from "./OurProcess";
import FreeEstimates from "./FreeEstimates";
import TownsWeProvide from "./TownsWeProvide";
import BottomSlogan from "./BottomSlogan";
import Footer from "./Footer";


import { Link } from 'react-router-dom';
import '../Styling/Home.css';
import "../Styling/animate.css";

function Home() {

    return (
        <div>
            {/* Top Bar Section Starts Here */}
            <section className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="top-bar-left">
                                <h6> Our Ratings:
                                <span> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <b> 5 out of 5 </b> </span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="top-bar-right">
                                <span> <i className="fa fa-envelope"> </i> Dummy </span>
                                <span> <i className="fa fa-phone"> </i> Dummy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top Bar Section Ends Here */}
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <br /><br /><br /><br /><br/><br/>

            <SlideShow />
            <Renovation/>
            <DeckInspection/>
            <DeckRepair/>
            <DeckRestoration/>
            <DeckResurfacing/>
            <StainPaintDeck/>
            <FinishingOptionsDecks/>
            <CustomPressureDeck/>
            <PressureTreatedWood/>
            <SourceEnergyDecking/>
            <WhatIsCD/>
            <ExperiencedDeck/>
            <OurProcess/>
            <FreeEstimates/>
            <TownsWeProvide/>
            <BottomSlogan/>
            <Footer/>
          
        </div>
    )
}
export default Home;
