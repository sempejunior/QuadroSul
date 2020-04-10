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
import Subscribe from '../components/Agency/Subscribe';

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
                
                {/* <Portifolio/> */}
                <Faq/>
                <Contact />
                <Subscribe />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
