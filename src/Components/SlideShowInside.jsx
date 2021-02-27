import React, { useEffect, useState } from 'react';
import '../Styling/SlideShow.css';
import Logo from '../UI/logo.JPEG XR';


const SlideShowInside = (props) => {


    return (
        <div>
            <div className="container">
                <div className="banner-text">
                    <h3>{props.title}</h3>


                </div>
                <div className="email-form">
                    <form>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 m-b-5">
                                <p className="email-head">Get a FREE Quote</p>
                            </div>
                        </div>
                        <div className="row slideInput">
                            <div className="col-md-8 col-md-offset-2 m-b-5">
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
    )
}
export default SlideShowInside;