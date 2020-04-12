import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import { MdPersonPinCircle, MdFeedback} from "react-icons/md";

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

class Testimonials extends Component {

    state = { display: false };

    componentDidMount() {
        this.setState({ display: true })
    }

    render() {
        return (
            <section id="testimonials" className="feedback-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2><MdFeedback size={25} color="#e02041"></MdFeedback> Nossos feedbacks</h2>
                        <a href="https://www.google.com/search?q=quadrosul&rlz=1C1GCEU_pt-brBR856BR856&oq=quadrosul&aqs=chrome..69i57j0l5j69i64.2183j1j7&sourceid=chrome&ie=UTF-8#lrd=0x951977cdb7afbdc5:0x6d772190f75433c9,1,,," target="_blank">
                            <img src={require("../../novasImagens/trabalho/comentarios.PNG")} alt="client" />
                        </a>

                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    {/* <img src={require('../../images/client1.png')} alt="client" /> */}
                                    <MdPersonPinCircle size={80} color="#e02041"></MdPersonPinCircle>
                                    <p>Havia comprado um quadro usado muito bom. Havia uma etiqueta da fábrica quadrosul. Precisei de mais um. Telefonei, encomendei. Otimo quadro branco. Fortes, bom acabamento, fácil de apagar.</p>

                                    <div className="client-info">
                                        <h3>Anônimo</h3>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <MdPersonPinCircle size={80} color="#e02041"></MdPersonPinCircle>
                                    <p>Ótimo atendimento, entrega rápida e material de ótima qualidade.</p>

                                    <div className="client-info">
                                        <h3>Anônimo</h3>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                <MdPersonPinCircle size={80} color="#e02041"></MdPersonPinCircle>
                                    <p>Ótimos profissionais e qualidade nos materiais.</p>

                                    <div className="client-info">
                                        <h3>Anônimo</h3>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
