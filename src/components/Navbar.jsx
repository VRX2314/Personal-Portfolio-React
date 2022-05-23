import React from 'react'

import Fade from 'react-reveal/Fade';
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
    return (
        <Fade>
            <div className='menu'>
                <div className='home-container'>
                    <a href="#home"><AiFillHome /> Home</a>
                </div>
                <div className='other-container'>
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contacts'>Contact</a>
                </div>
            </div>
        </Fade>

    )
}

export default Navbar