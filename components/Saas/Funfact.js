import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Link from 'next/link';

class Funfact extends Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };
    
    render() {
        return (
            <section className="funfacts-area-three ptb-100 pt-0">
                <div className="container">
                    <div className="saas-section-title">
                        <h2>We always try to understand users expectation</h2>
                        <div className="bar"></div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact-item">
                                <h3><span className="odometer" data-count="180">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 806
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    </span>K</h3>
                                <p>Downloaded</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact-item">
                                <h3><span className="odometer" data-count="20">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 806
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    </span>K</h3>
                                <p>Feedback</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact-item">
                                <h3><span className="odometer" data-count="500">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 806
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor></span>+</h3>
                                <p>Workers</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact-item">
                                <h3><span className="odometer" data-count="70">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 806
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor></span>+</h3>
                                <p>Contrubutors</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Have any question about us?</h3>
                        <p>Don't hesitate to contact us</p>
                        <Link href="#">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>
                </div>

                <div className="map-bg">
                    <img src={require("../../images/map.png")} alt="map" />
                </div>
            </section>
        );
    }
}

export default Funfact;
