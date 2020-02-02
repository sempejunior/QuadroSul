import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class Services extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    
    render() {
        return (
            <section id="services" className="services-area ptb-100">
                <div className="container">
                    <div className="saas-section-title">
                        <h2>Our Featured Service that We Provide</h2>
                        <div className="bar"></div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon">
                                        <i className="fas fa-solar-panel"></i>
                                    </div>
                                    <h3>Export Presets</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon bg-cdf1d8">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <h3>Mobile Friendly</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon bg-f78acb">
                                        <i className="fas fa-th"></i>
                                    </div>
                                    <h3>Grid and Guides</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon">
                                        <i className="fas fa-code"></i>
                                    </div>
                                    <h3>Code Security</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon bg-c679e3">
                                        <i className="fab fa-creative-commons-zero"></i>
                                    </div>
                                    <h3>Zero Configuration</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <div className="icon bg-eb6b3d">
                                        <i className="fas fa-key"></i>
                                    </div>
                                    <h3>Access Controlled</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                <div className="services-inner-area">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-image">
                                    <img src={require("../../images/laptop.png")} alt="service" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-inner-content">
                                    <div className="services-item">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <h3>Free Caliing Service</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="services-item">
                                        <div className="icon">
                                            <i className="fas fa-gift"></i>
                                        </div>
                                        <h3>Daily Free Gift</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="services-item">
                                        <div className="icon">
                                            <i className="fas fa-qrcode"></i>
                                        </div>
                                        <h3>QR Code Scaner</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
