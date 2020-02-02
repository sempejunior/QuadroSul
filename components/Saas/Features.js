import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Features extends Component {

    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <section id="features" className="features-area-two bg-f7fafd ptb-100">
                <div className="container">
                    <div className="saas-section-title">
                        <h2>Our Amazing Features</h2>
                        <div className="bar"></div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="far fa-hand-point-up"></i>

                                            Drag and Drop
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="far fa-gem"></i>

                                            Fully Customizable
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-fighter-jet"></i>

                                            App Integration
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-lock"></i>

                                            Private and Security
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-magic"></i>

                                            High Quality
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-location-arrow"></i>

                                            Easy To Use
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-compress"></i>

                                            Pixel Precision
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-cloud"></i>

                                            Cloud Service
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-edit"></i>

                                            Vector Editing
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="box">
                                            <i className="fas fa-cogs"></i>

                                            Latest Technology
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="features-image">
                                <img src={require("../../images/main-pic.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
                                <img src={require("../../images/circle-shape.png")} className="rotate-image rotateme" alt="circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
