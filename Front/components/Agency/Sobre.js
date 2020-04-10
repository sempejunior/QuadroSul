import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="about-content">
                        <h2>Sobre Nós</h2>
                        <p style={{
                        fontSize: '15px',
                        marginBottom: '20px'
                    }}><strong>A Quadrosul é uma empresa especializada na produção de quadros e de outros elementos essenciais para uma boa comunicação visual. A tradição no modo de produzir vem de seus mais 30 anos de mercado. Nós produzimos quadros escolares, cavaletes, e demais acessórios e serviços com moldura, sempre com as melhores matérias-primas. A qualidade da marca também se dá pelo excelente acabamento, em cada detalhe.</strong></p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={require('../../novasImagens/trabalho/IMG-20200217-WA0030.jpg')} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-inner-content">
                                        <div className="title">
                                            <div className="icon">
                                                <i class="fas fa-radiation-alt"></i>
                                            </div>
                                            <h3>Missão</h3>
                                        </div>
                                        <p>Atender nossos clientes de uma forma cordial, acatando as suas necessidades e superando suas expectativas,
                                        oferecendo-lhes produtos e serviços de alta qualidade, sempre mantendo o mesmo padrão de desenvolver,
                                               produzir e comercializar quadros, mantendo a satisfação do cliente em cada atendimento prestado.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-inner-content">
                                        <div className="title">
                                            <div className="icon">
                                                <i class="far fa-eye"></i>
                                            </div>

                                            <h3>Visão</h3>
                                        </div>
                                        <p>Ser uma empresa referencia no mercado de quadros escolares, ganhar destaque pela qualidade dos produtos ofertados, ser reconhecida como a melhor opção pelos seus clientes, colaboladores e fornecedores pelos serviços prestados e seus relacionamentos como um todos.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-inner-content">
                                        <div className="title">
                                            <div className="icon">
                                                <i class="fas fa-dollar-sign"></i>
                                            </div>

                                            <h3>Valores</h3>
                                        </div>
                                        <div className="multiple-p" >
                                            <p><strong>-</strong> Fidelizar clientes;</p>
                                            <p><strong>-</strong> Apoiar e sustentar um bom relacionamento entre nossos colaboladores e todos que participam do nosso dia a dia;</p>
                                            <p><strong>-</strong> Manter a ética, transparencia e comprometimento da nossa empresa;</p>
                                            <p><strong>-</strong> Satisfação dos nossos clientes;</p>
                                            <p><strong>-</strong> Valorização e respeito com todas as pessoas que conosco convivem;</p>
                                            <p><strong>-</strong> Ter responsabilidade social e respeito ao meio ambiente.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <a href="#" className="btn btn-primary">Read More</a> */}
                        </div>
                    </div>
                </div>
                </div>

            <div className="circle"><img src={require('../../images/circle.png')} alt="cricle" /></div>
            </section >
        );
    }
}

export default About;
