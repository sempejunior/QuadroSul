import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import Background from '../../imagensQuadroSul/IMG-20191129-WA0117-02.jpeg';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    
    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner jarallax" data-jarallax='{"speed": 0.2}'
                style={{  
                    backgroundImage: `url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                
                >
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <a className="navbar-brand">
                                        <img src={require("../../imagensQuadroSul/logoTitulo.png")} alt="logo" />
                                    </a>
                                    {/* <h1>Quadrosul ®</h1> */}
                                    <p>Empresa especializada na produção de quadros e de outros elementos essenciais para uma boa comunicação visual</p>
                                    <div className="btn-box">


                                        {/* <Link href="#">
                                            <a 
                                                className="popup-youtube video-btn"
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                            >
                                                <i className="fab fa-google-play"></i> 
                                                Watch our video
                                            </a>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default Banner;
