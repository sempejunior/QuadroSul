import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input type="text" className="form-control" required={true} data-error="Coloque seu nome" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required={true} data-error="Coloque seu email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Assunto</label>
                                            <input type="text" className="form-control" required={true} data-error="Coloque o assunto" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Telefone para contato</label>
                                            <input type="text" className="form-control" required={true} data-error="Coloque o telefone" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Mensagem</label>
                                            <textarea className="form-control" cols="30" rows="4" required={true} data-error="Escreva a mensagem" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-info-box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Endereço:</span>
                                        Rua Irmão Inocencio Luis, 670 <br/>
                                        Bairro: Jardim Itu Sabara <br/>
                                        Cidade: Porto Alegre / RS <br/>
                                    </li>

                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <span>Email:</span>
                                        
                                        <a href="#">quadrosul@terra.com.br</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>Telefone:</span>
                                        
                                        <a href="#">(51) 3374-3668</a>
                                        <a href="#">(51) 3374-2873</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
