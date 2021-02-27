import React, { useEffect, useState } from 'react';
import '../Styling/SlideShow.css';
import Logo from '../UI/logo.JPEG XR';
import "../Styling/animate.css";

const SlideShow = () => {

    return (
        <div>
            <section className="banner-slider">
                {/* Carousel wrapper */}
                <div id="carouselBasicExample" className="carousel slide" data-mdb-ride="carousel">
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={2} aria-label="Slide 3" />
                    </div>
                    {/* Inner */}
                    <div className="carousel-inner">
                        {/* Single item */}
                        <div className="carousel-item active">
                            <div className="item active banner-bg1">
                                <div className="container">
                                    <div className="banner-text">
                                        <br />
                                        <h3 id="slideshowText"> Source Energy Restoration Professionals <br /> Deck Restoration Services Wheaton, IL
                                        </h3>
                                        <br />
                                        <div className="row hideMobile">
                                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <ul className="double-list">
                                                    <li>Full Deck Inspection</li>
                                                    <li>Paint &amp; Stain Removal</li>
                                                    <li>Deck Cleaning         </li>
                                                    <li>Carpentry Repair       </li>
                                                    <li>Complete Wood Restoration </li>
                                                    <li> Color &amp; Stain Consultation </li>
                                                    <li>Refinishing with Paint or Stain </li>
                                                    <li>Rotten Wood Replacements </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <p className="email-head">Get a FREE Quote</p>
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5 mt-20">
                                                    <input className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-10">
                                                    <textarea className="form-control" placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <a href="#">
                                                        <p className="get-quote-but">
                                                            Get Quote Now
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="carousel-item">
                            <div className="item active banner-bg2">
                                <div className="container">
                                    <div className="banner-text">
                                        <br />
                                        <h3 id="slideshowText"> The Highest Quality Deck Restoration & Deck Refinishing at Your Services. We Provide Exceptional Deck Repairs in Wheaton, IL Restoration and Custom Deck Refinishing Sinse 2004!
                                       </h3>
                                        <br />
                                        <br/>
                                    </div>
                                    <div className="email-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <p className="email-head">Get a FREE Quote</p>
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5 mt-20">
                                                    <input className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-10">
                                                    <textarea className="form-control" placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <a href="#">
                                                        <p className="get-quote-but">
                                                            Get Quote Now
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="carousel-item">
                            <div className="item active banner-bg4">
                                <div className="container">
                                    <div className="banner-text">
                                        <br />
                                        <h3 id="slideshowText">Looking To Refinishing A Wood Deck? The Sooner You Know Us, The Better. Call Us Today To Find Out Why Our Restoration Services Give More Quality This Year!.
                                        </h3>
                                        <br />
                                        <br />

                                    </div>
                                    <div className="email-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <p className="email-head">Get a FREE Quote</p>
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5 mt-20">
                                                    <input className="form-control" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-5">
                                                    <input className="form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="row slideInput">
                                                <div className="col-md-8 col-md-offset-2 m-b-10">
                                                    <textarea className="form-control" placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-md-8 col-md-offset-2 m-b-5">
                                                    <a  href="#" >
                                                        <p className="get-quote-but">
                                                            Get Quote Now
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Inner */}
                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Carousel wrapper */}
            </section>
        </div>
    )
}
export default SlideShow;