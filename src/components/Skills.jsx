import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import frontEndLogo from '../assets/Computer And Phone.svg'
import backEndLogo from '../assets/Server.svg'
import softwareLogo from '../assets/Terminal Window.svg'
import dbmsLogo from '../assets/DBMS Stack.svg'
import Frontend from './Frontend'
import Backend from './Backend'
import DBMS from './DBMS'
import Software from './Software'

const Skills = () => {

    const [showFrontend, setShowFrontend] = useState(false)
    const [showBackend, setShowBackend] = useState(false)
    const [showSoftware, setShowSoftware] = useState(false)
    const [showDBMS, setShowDBMS] = useState(false)
    const [showClick, setShowClick] = useState(true)

    const handleFrontEnd = () => {
        if (!showFrontend) {
            setShowClick(false)
            setShowFrontend(true)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(false)
        }
        else {
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(false)
        }
    }

    const handleBackEnd = () => {
        if (!showBackend) {
            setShowClick(false)
            setShowFrontend(false)
            setShowBackend(true)
            setShowSoftware(false)
            setShowDBMS(false)
        }
        else {
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(false)
        }
    }

    const handleSoftware = () => {
        if (!showSoftware) {
            setShowClick(false)
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(true)
            setShowDBMS(false)
        }
        else {
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(false)
        }
    }

    const handleDBMS = () => {
        if (!showDBMS) {
            setShowClick(false)
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(true)
        }
        else {
            setShowFrontend(false)
            setShowBackend(false)
            setShowSoftware(false)
            setShowDBMS(false)
        }
    }

    return (
        <div className='skills-container' id="skills">
            <Fade>
                <div className='skills-title'>
                    My Skills
                    <div className='underglow'></div>
                </div>
            </Fade>
            <div className='skills-buttons'>
                {showFrontend ? <Fade left><div className='skills-close' onClick={handleFrontEnd}><Frontend /></div></Fade> :
                    showBackend ? <Fade left><div className='skills-close' onClick={handleBackEnd}><Backend /></div></Fade> :
                        showSoftware ? <Fade right><div className='skills-close' onClick={handleSoftware}><Software /></div></Fade> :
                            showDBMS ? <Fade right><div className='skills-close' onClick={handleDBMS}><DBMS /></div></Fade> : <>

                                <div className='skills-buttons-container'>
                                    <Fade left>
                                        <button className='skills-btn frontend' onClick={() => handleFrontEnd()}>
                                            <img className='frontEndLogo' src={frontEndLogo} />
                                        </button>
                                        <p className='skills-subtitle'>Frontend</p>
                                    </Fade>
                                </div>

                                <div className='skills-buttons-container'>
                                    <Fade right>
                                        <button className='skills-btn software' onClick={() => handleSoftware()}>
                                            <img className='frontEndLogo' src={softwareLogo} />
                                        </button>
                                        <p className='skills-subtitle'>Software</p>
                                    </Fade>
                                </div>

                                <div className='skills-buttons-container'>
                                    <Fade left>
                                        <button className='skills-btn backend' onClick={() => handleBackEnd()}>
                                            <img className='frontEndLogo' src={backEndLogo} />
                                        </button>
                                        <p className='skills-subtitle'>Backend</p>
                                    </Fade>
                                </div>
                                <div className='skills-buttons-container'>
                                    <Fade right>
                                        <button className='skills-btn dbms' onClick={() => handleDBMS()}>
                                            <img className='frontEndLogo' src={dbmsLogo} />
                                        </button>
                                        <p className='skills-subtitle'>DBMS</p>
                                    </Fade>
                                </div>
                            </>}
                {showClick ? <p className='skills-click'>Try Clicking The Buttons 👆</p> : <></>}
            </div>

        </div>
    )
}

export default Skills