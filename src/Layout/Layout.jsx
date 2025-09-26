import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AboutMe from '../Components/AboutMe/AboutMe';
import Services from '../Components/Sevices/Services';
import Projects from '../Components/Projects/Projects';
import Testimonial from '../Components/Testimonial/Testimonial';
import Contact from '../Components/Contact/Contact';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div id="home"><Header /></div>
            <div id="about"><AboutMe /></div>
            <div id="services"><Services /></div>
            <div id="projects"><Projects /></div>
            <div id="testimonials"><Testimonial /></div>
            <div id="contact"><Contact /></div>
            <Footer />

        </div>
    );
};

export default Layout;