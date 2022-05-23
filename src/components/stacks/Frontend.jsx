import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'

import Fade from 'react-reveal/Fade';

const Frontend = () => {
    return (
        <>
            <Fade>
                <div className='technology-container-technology-icons'>
                    <AiFillHtml5 />
                    <p>HTML 5</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <IoLogoCss3 />
                    <p>CSS 3</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiJavascript />
                    <p>JavaScript ES6 +</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiReact />
                    <p>React.js v18.0 +</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiAngular />
                    <p>Angular.js v 1.8+</p>
                </div>
            </Fade>
        </>
    )
}

export default Frontend