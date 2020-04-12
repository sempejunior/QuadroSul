import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Agency/Banner';
import Sobre from '../components/Agency/Sobre';
import Produtos from '../components/Agency/Produtos';
import Testimonials from '../components/Agency/Testimonials';
import Partner from '../components/Agency/Partner';
// import Portifolio from '../components/Agency/Portifolio';
import Faq from '../components/Agency/Faq'
import Contact from '../components/Agency/Contact';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Partner />
                <Sobre />
                <Produtos/>
                <Testimonials />
                <Faq/>
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
