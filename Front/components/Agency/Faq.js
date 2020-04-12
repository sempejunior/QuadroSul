import React, { Component } from 'react';
import { FaQuestionCircle } from "react-icons/fa";


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class Faq extends Component {
    render() {
        return (
            <section id="faq" className="faq-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2> <FaQuestionCircle size={25} color="#e02041"></FaQuestionCircle> Dúvidas Frequentes</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-accordion">
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Qual é o material do quadro branco, é fórmica?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Não, o nosso quadro branco é lousa branca não magnética B+ (alta durabilidade de material, linha profissional, ou seja, pode ser utilizado qualquer marcador para quadro branco que a lousa não vai ficar manchada).
                                            <br />
                                                <br />
                                                <strong>• ATENÇÃO: Não utilizar nunca pincel atômico, este sim mancha qualquer tipo de quadro, pois sua tinta é permanente!</strong>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Como é feita a limpeza dos quadros brancos?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                A limpeza é feita com qualquer tipo de apagador, utilizamos um simples em carpete, e caso fique algum resquício no fundo do quadro, pode ser utilizado uma flanela umedecida com álcool 92.8°, não usar qualquer outro produto de limpeza, pois este pode danificar a lousa!
                                            <br />
                                                <br />
                                                <strong>• ATENÇÃO: Recomendamos o uso do álcool apenas para a limpeza dos quadros da marca QUADROSUL, pois não sabemos a qualidade dos quadros de outras marcas!</strong>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Como é feita a instalação dos quadros na parede?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Com suporte para fixação na parede (ganchos e cantoneiras), e não acompanha buchas e parafusos.
                                            <br />
                                                <br />
                                                <strong>• •	ATENÇÃO: Pode ser instalado em parede de material, ou de gesso, desde que a mesma esteja adapta ao peso e tamanho do quadro.</strong>
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Até que tamanho vai os quadros escolares?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Até 3,00 m de largura sem emenda na lousa, ou seja, parte branca ou verde do quadro, e até 6,00 m de largura, com emenda.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Qual a vida útil dos quadros?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Se o cuidado for de acordo como recomendamos, dura uma vida toda, a Quadrosul zela pela qualidade da sua matéria-prima.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Vocês trabalham com lousa de vidro?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Não.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-image">
                                <img src={require("../../novasImagens/duvidas/taylor-wilcox-NTur2_QKpg0-unsplash.jpg")} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;
