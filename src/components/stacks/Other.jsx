import React from 'react'
import { SiPython } from 'react-icons/si'
import { SiJava } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'

import Fade from 'react-reveal/Fade';

const Other = () => {
    return (
        <>
            <Fade>
                <div className='technology-container-technology-icons'>
                    <SiPython />
                    <p>Python v3 +</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiJava />
                    <p>JDK v14 +</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiCplusplus />
                    <p>C++</p>
                </div>
            </Fade>

        </>
    )
}

export default Other