import React from 'react'

import Fade from 'react-reveal/Fade';

import Vansh from '../assets/IMG-0186.PNG'

const About = () => {
    return (

        <div className='about-content' id="about">
            <Fade>
                <div className='about-content-title'>
                    <h1>About Me</h1>
                </div>
            </Fade>

            <div className='about-content-paragraph-container'>
                <Fade>
                    <div className='about-content-paragraph'>
                        <p>Hello there, I'm Vansh.
                            I'm currently a Computer Engineering student in my 4th year of a 6 year
                            degree program. I develop beautiful, enterprise ready web applications with all the modern technologies.
                        </p>
                        <div className='image-container'>
                            <div className='image' />
                        </div>
                    </div>
                </Fade>


            </div>

        </div>
    )
}

export default About