import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SeoSection from './SeoSection';

class Navbar extends Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        elementId.classList.add("is-sticky");

        // document.addEventListener("scroll", () => {
        //     // if (window.scrollY > 170) {
                
        //     // } else {
        //     //     elementId.classList.remove("is-sticky");
        //     // }
        // });
        window.scrollTo(0, 0);

        this.menuActiveClass()
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash){
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
            <SeoSection 
                title="Quadro Sul"
                desc="Quadrosul Indústria e Comércio de Quadros Ltda"
                url="https://genial-react.envytheme.com/agency"
            />
            <nav id="navbar" className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light">
                <div className="container">
                    <Link href="/agency">
                        <a className="navbar-brand">
                            <img src={require("../../imagensQuadroSul/logo.png")} alt="logo" />
                            <img src={require('../../imagensQuadroSul/logo.png')} alt="logo" />
                        </a>
                    </Link>

                    <button 
                        onClick={this.toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => 100} 
                                    className="nav-link active" 
                                    href="#home"
                                >
                                    Home
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => 0} 
                                    className="nav-link" 
                                    href="#about"
                                >
                                    Sobre nós
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#services"
                                >
                                    Produtos
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#testimonials"
                                >
                                    Comentários
                                </AnchorLink>
                            </li>
                           
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#faq"
                                >
                                    Dúvidas Frequentes
                                </AnchorLink>
                            </li>
                           
                            <li className="nav-item">
                                <AnchorLink 
                                    onClick={this.toggleNavbar} 
                                    offset={() => -10} 
                                    className="nav-link" 
                                    href="#contact"
                                >
                                    Contact
                                </AnchorLink>
                            </li>
                        </ul>

                        <ul className="others-option">
                            <li>
                                <a href="/signin" className="btn btn-primary">sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
