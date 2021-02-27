import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import apimg1 from "../UI/advantages-pressure-wood1.JPEG XR";
import apimg2 from "../UI/advantages-pressure-wood2.JPEG XR";
import apimg3 from "../UI/advantages-pressure-wood3.JPEG XR";
import apimg4 from "../UI/advantages-pressure-wood4.JPEG XR";

import whatIsImg1 from "../UI/what-is-preasure-treated-wood1.JPEG XR";
import whatIsImg2 from "../UI/what-is-preasure-treated-wood2.JPEG XR";
import whatIsImg3 from "../UI/what-is-preasure-treated-wood3.JPEG XR";
import whatIsImg4 from "../UI/what-is-preasure-treated-wood4.JPEG XR";


const PressureTreatedWood = () => {

    return (
        <div>
            {/* Pressure Treated Wood Section Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> WHAT IS PRESSURE TREATED WOOD?</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Pressing treated wood is a mainstream outside building material that has been utilized for more than 40 years. The pressing factor treatment measure is applied to any wood, regularly softwood lumbers, to give them against maturing and inset repulsing proper-ties that guarantee durable solidness, insurance, and protection from decay.</p>
                                <p> The wood is artificially treated in a unique vessel that utilizes critical factors and va-cuum to enter the wood with additives in a treating arrangement (either water or oil). The additives are profoundly assimilated into the wood cells through this cycle, which gives the wood long haul resilience against regular components. Pressing treated wood can have 5 to multiple times the assistance life of untreated wood and can keep going for a very long time or more when introduced appropriately.</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '20px' }}>
                            <div className="carousel slide carousel-fade" data-mdb-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-mdb-interval="1000">
                                            <img src={whatIsImg1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={whatIsImg2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={whatIsImg3} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-mdb-interval="1000">
                                            <img src={whatIsImg4} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> THE ADVANTAGES OF USING PRESSURE TREATED WOOD FOR YOUR DECK</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={apimg1} />
                                <h3> Excellent Esthetic</h3>
                                <p> The excellent normal appearance of the timber isn't undermined even though the wood is pressure treated. It implies you don't lose the normal wood look. Can stain critical fac-tor treated decking with an assortment of stains to unite your full vision for your open-air living space.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={apimg2} />
                                <h3> Security/protection </h3>
                                <p> Pressing factor treated wood protects your deck from bugs, micro-organisms, and fungal decay. The additives protect your wood from the back to front, which causes the wood to withstand the impacts of each of the four seasons; from hefty snowfalls to summer showers, your critical factor treated deck can battle all the components. The wood's toughness shields it from being handily damaged, imprinted, or harmed, which delays its life expectancy. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={apimg4} />
                                <h3> Cost-Effectiveness </h3>
                                <p> Pressing factor treated decking is quite possibly the most usually utilized deck materials since it is practical and financial plan agreeable in contrast with different alternatives like composite or cedar decks. There is a huge scope of evaluations accessible to look over because any wood can be pressure treated. Yet, even with a higher evaluation of wood, it very well may be undeniably more moderate than other extraordinary timbers like cedar, redwood, or elective alternatives like vinyl and PVC. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pressure Treated Wood Section Ends Here */}
        </div>
    )
}
export default PressureTreatedWood;