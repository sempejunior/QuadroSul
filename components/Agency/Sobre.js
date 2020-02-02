import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={require('../../imagensQuadroSul/IMG-20191129-WA0122-01.jpeg')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Sobre Nós</h2>
                                <p>A Quadrosul é uma empresa especializada na produção de quadros e de outros elementos essenciais para uma boa comunicação visual. A tradição no modo de produzir vem de seus mais 30 anos de mercado. Nós produzimos quadros escolares, cavaletes, e demais acessórios e serviços com moldura, sempre com as melhores matérias-primas. A qualidade da marca também se dá pelo excelente acabamento, em cada detalhe.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-desktop"></i>
                                                </div>

                                                <h3>Missão</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-tasks"></i>
                                                </div>

                                                <h3>Visão</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <i className="fas fa-code"></i>
                                                </div>

                                                <h3>Valores</h3>
                                            </div>

                                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle"><img src={require('../../images/circle.png')} alt="cricle" /></div>
            </section>
        );
    }
}

export default About;
