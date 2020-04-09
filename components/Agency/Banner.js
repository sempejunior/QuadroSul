import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import Background from '../../novasImagens/fundo/whiteboard1.jpg';
import Logo from '../../novasImagens/logos/logo7.png';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true })
    };

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner jarallax" data-jarallax='{"speed": 0.2}'
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundPosition: 'center',
                        // backgroundSize: '1700px 1300px',
                        backgroundRepeat: 'no-repeat'
                    }}

                >

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    {/* <h1>Quadrosul ®</h1> */}
                                    <a className="navbar-brand">
                                        <img src={Logo} alt="logo" style={{ maxWidth: 350 }} />
                                    </a>
                                    <p><strong>Empresa especializada na produção de quadros e de outros elementos essenciais para uma boa comunicação visual</strong></p>
                                    <div className="btn-box">


                                        {<Link href="#">
                                            <a
                                                className="popup-youtube video-btn"
                                                onClick={e => { e.preventDefault(); this.openModal() }}
                                            >
                                                <i className="fab fa-google-play"></i>
                                                Watch our video
                                            </a>
                                        </Link>}
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
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment >
        );
    }
}

export default Banner;
