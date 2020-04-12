import React, { useState, useEffect } from 'react';
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
import api from '../../services/api';


export default function Contact() {


    const [from, setFrom] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    var [text, setText] = useState('');


    async function handleSendEmail(e) {
        e.preventDefault();

        var message = (text + "\n" + "Enviado por: " + name + "\n" + " Telefone para contato: " + phone);
        console.log("Mensagem: " + message);
        const data = { from, message, subject };

        console.log({ data })

        const response = await api.post('/sendEmail', data, {
            headers: {
                authorization: '9af31b96ec8781252828b55a08cb3a41',
                user: '8f0c03018a950fe348197af04988dd66373b94906d5f8ecca62a0f1b9f59d45f'
            }
        });
        console.log({ response });
        alert("Email enviado com sucesso");
    }



    return (
        <section id="contact" className="contact-area ptb-100 bg-f9f9f9">
            <div className="container">
                <div className="section-title">
                    <h2>Entre em contato conosco</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                        <form id="contactForm" onSubmit={handleSendEmail}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Coloque seu nome"
                                            value={name}
                                            onChange={e => setName(e.target.value)} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email"
                                            className="form-control"
                                            required={true}
                                            data-error="Coloque seu email"
                                            value={from}
                                            onChange={e => setFrom(e.target.value)} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Assunto</label>
                                        <input type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Coloque o assunto"
                                            value={subject}
                                            onChange={e => setSubject(e.target.value)} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Telefone para contato</label>
                                        <input type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Coloque o telefone"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)} />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>Mensagem</label>
                                        <textarea
                                            className="form-control"
                                            cols="30"
                                            rows="4"
                                            required={true}
                                            data-error="Escreva a mensagem"
                                            value={text}
                                            onChange={e => setText(e.target.value)}
                                        />
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
                                        Rua Irmão Inocencio Luis, 670 <br />
                                        Bairro: Jardim Itu Sabara <br />
                                        Cidade: Porto Alegre / RS <br />
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
