import React from 'react'
import './App.css'

import Room from './components/Room';
import Navbar from './components/Navbar';
import Details from './components/Details';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

    return (
        <>
            <Navbar />
            <div className="master-container">
                <div className='main-container' id='home'>
                    <Room />
                    <Details />
                </div>
                <div className='content-container'>
                    <About />
                    <Technology />
                </div>
                <div className='featured-container' id='projects'>
                    <Projects />
                </div>
                <div className='contacts-container'>
                    <Contact />
                </div>
            </div>
            <Footer />
        </>
    );
}



export default App