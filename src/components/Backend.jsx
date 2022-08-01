import React from 'react'
import { SiNodedotjs } from 'react-icons/si'

const Backend = () => {
    return (
        <div className='skills-display backend'>
            <p className='skills-display-title'>Backend</p>
            <p className='skills-display-subtitle'>APIs, Database Integration, Routing, Querying</p>
            <div className='skills-display-logo-container'>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiNodedotjs />
                    </div>
                    <p>Node.js</p>
                </div>
            </div>
            <p className='skills-display-close'>Tap Again to Close</p>
        </div >
    )
}

export default Backend