import React, { Component } from 'react';
import Link from 'next/link';
import { FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area bg-fffcf4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/agency">
                                        <a>
                                            <img src={require('../../imagensQuadroSul/logo.png')} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="contact-info">
                                    <li>
                                        Rua Irmão Inocencio Luis, 670
                                    </li>
                                    <li>
                                        <a>Bairro: Jardim Itu Sabara</a>
                                    </li>
                                    <li>
                                        <a>Cidade: Porto Alegre / RS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contatos</h3>
                                <ul className="contact-info">
                                    <li>
                                        <a>(51) 3374-3668</a>
                                    </li>
                                    <li>
                                        <a>(51) 3374-2873</a>
                                    </li>
                                    <li>
                                        <a>quadrosul@terra.com.br</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-6">
                            <div className="single-footer-widget pl-3">
                                <h3>Midias Sociais</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="https://www.facebook.com/quadrosul.quadros.5">
                                            <a><FaFacebook size={18} color="#e02041"/> Facebook</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <p><i className="far fa-copyright"></i> Desenvolvido por Carlos Augusto Sempé Júnior</p>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/profile.php?id=1219184345">
                                            <a><i className="fab fa-facebook-f"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/sempejunior/">
                                            <a><i className="fab fa-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/carlos-augusto-semp%C3%A9-junior-46b90252/">
                                            <a><i className="fab fa-linkedin-in"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map2">
                    <img src={require('../../images/map2.png')} alt="map" />
                </div>
            </footer>
        );
    }
}

export default Footer;
