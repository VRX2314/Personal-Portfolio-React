import React from 'react'
import { SiJava, SiPython, SiCplusplus } from 'react-icons/si'

const Software = () => {
    return (
        <div className='skills-display software'>
            <p className='skills-display-title'>Software Dev</p>
            <p className='skills-display-subtitle'>Development CUI and GUI, Searching algorithms, Sorting algorithms, Data structures, Data modelling, Data Visualisation</p>
            <div className='skills-display-logo-container'>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiJava />
                    </div>
                    <p>Java JDK 14+</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiPython />
                    </div>
                    <p>Python v3 +</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiCplusplus />
                    </div>
                    <p>C++</p>
                </div>
            </div>
            <p className='skills-display-close'>Tap Again to Close</p>
        </div >
    )
}

export default Software