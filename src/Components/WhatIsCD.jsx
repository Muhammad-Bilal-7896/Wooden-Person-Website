import React from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import compoImg1 from "../UI/composite-decking1.JPEG XR";
import compoImg2 from "../UI/composite-decking2.JPEG XR";
import compoImg3 from "../UI/composite-decking3.JPEG XR";
import compoImg4 from "../UI/composite-decking4.JPEG XR";


const WhatIsCD = () => {

    return (
        <div>
            {/* What is Composite Decking Section Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container">
                    <div className="row m-b-20">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> WHAT IS COMPOSITE DECKING?</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Composite decking is produced using a mix of recycled wood and plastic, wood flour PVC, or wood filaments and polyethylene, and a coupling specialist. Combining these materials brings about a more grounded, thicker, and tough item than wood alone. Pro-gression in composite decking materials has brought about a wide assortment of choices in the wood level to plastic. For property owners searching for a significantly more grounded alternative, there is covered composite decking that gives an extra layer of assurance under the material. It's a thin layer of PVC that is figured uniquely in contrast to the sheets. This outer coat is intended to give expanded protection from blurring, scratches, stains, and water. </p>
                                <p> Composite decking material doesn't contain any synthetic compounds or poisons, and it's normally made out of reused plastics and waste wood, making it an eco-accommodating structure material. Most composite materials are intended to seem as though wood, so you'll see a wood grain or brush stroke design, which is an appealing option for individuals who like the appearance of wood yet don't care for sanding upkeep and painting that accompanies it. Composite decks are likewise shoeless agree-able, delicate to the touch, don't fragment, and can withstand the harsh climate, making them idealfor Wheaton's shifting seasons. </p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '40px' }}>
                                {/* <div className="carousel slide carousel-fade" data-mdb-ride="carousel">
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
                                </div> */}
                                <img src={compoImg4} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> THE BENEFITS OF HAVING A COMPOSITE DECK </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={compoImg1} />
                                <h3> Modern and Classy Look</h3>
                                <p> Composite decking offers you an extravagance look, feel, and plan without the excessive sticker price. The plan choices accessible are broad; you can accomplish a good wood look without the support needed with a characteristic wood deck. There are adequate tones to choose from; regardless of whether you pick a monochromatic or multi-chromatic design, the outcomes are dazzling and ageless. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={compoImg2} />
                                <h3> High Performing</h3>
                                <p> Composite decking is perhaps the most mainstream option than a wood deck since it requires a lot of lower upkeep and flaunts a more drawn-out life expectancy. There is no yearly support required, no sanding, no staining, no fixing, no issue, which implies no drawn-out upkeep costs. Composite decking is perhaps the toughest decking materials available today. It is decay, form, parasitic rot, and bug safe. You don't need to stress over parting, twisting, breaking, or contracting the materials. Composite likewise holds up to the brutal Wheaton climate conditions, which implies insignificant warm devel-opment and compression and most extreme soundness.  </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src={compoImg3} />
                                <h3> Long Haul Value </h3>
                                <p> Composite decking is mid-range on the estimating scale, and keeping in mind that it is more costly than pressure-treated decks, the estimation of your speculation over the life expectancy of your composite deck is far more noteworthy. Composite decking holds up after some time, and you will appreciate the profit for your speculation for quite a long time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* What is Composite Decking Section Ends Here */}
        </div >
    )
}
export default WhatIsCD;