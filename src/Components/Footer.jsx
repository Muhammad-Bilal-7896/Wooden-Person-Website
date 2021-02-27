import React, { useEffect, useState } from 'react';

import "../Styling/animate.css";

import "../Styling/HomePageStyling.css";

import location from "../UI/location.JPEG XR";
import phone from "../UI/phone.JPEG XR";
import call from "../UI/call.JPEG XR";
import email from "../UI/email.JPEG XR";


const Footer = () => {

    return (
        <div>
            {/* Footer Section Starts Here */}
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-col">
                                    <img src="images/logo.png" width="70%" />
                                    <p className="m-t-20"> Restore your weathered deck into a space that suits you and your family. Make it an excellent den for the children, outdoor room, party space for you, or whatever else you can consider.Call us Today for excellent deck restoration services.</p>
                                    {/* Experience Deck Restorators Section Ends Here 
                        <a href=""><img src="images/facebook.png" /></a>
                        <a href=""><img src="images/twitter.png" /></a>
                        <a href=""><img src="images/instagram.png" /></a>
*/}
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-col">
                                    <h3> Contact Info </h3>
                                    <p><img src={location} /> Location here</p>
                                    <p><img src={call} /> </p>
                                    <p><img src={phone} /> </p>
                                    <p><img src={email} /></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-col">
                                    <h3> Quick Contact </h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-10 m-b-10">
                                                <input className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10 m-b-10">
                                                <input className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10 m-b-10">
                                                <textarea className="form-control" placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10 m-b-10">
                                                <a href="#" className="yellow-but">Send</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-col">
                                    <h3> NAVIGATION </h3>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">HOME</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">SERVICES</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">ABOUT US</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">GALERY</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">CONTACT US</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="#">BLOG</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section Ends Here */}
        </div>
    )
}
export default Footer;