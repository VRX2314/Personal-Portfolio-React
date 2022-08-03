import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiAngular, SiReact, SiFigma } from 'react-icons/si'

const Frontend = () => {
    return (
        <div className='skills-display frontend'>
            <p className='skills-display-title'>Frontend</p>
            <p className='skills-display-subtitle'>UI/UX, Wireframing, Prototyping, Dynamic Landing Pages, Interactive Models</p>
            <div className='skills-display-logo-container'>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiHtml5 />
                    </div>
                    <p>HTML 5</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiCss3 />
                    </div>
                    <p>CSS 3</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiJavascript />
                    </div>
                    <p>JS ES 6+</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiAngular />
                    </div>
                    <p>Angular.js</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiReact />
                    </div>
                    <p>React 18</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiFigma />
                    </div>
                    <p>Figma</p>
                </div>
            </div>
            <p className='skills-display-close'>Tap Again to Close</p>
        </div >
    )
}

export default Frontend