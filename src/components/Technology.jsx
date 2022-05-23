import React, { useState } from 'react'
import Backend from './stacks/Backend'
import DBMS from './stacks/DBMS'
import Frontend from './stacks/Frontend'
import Other from './stacks/Other'

import Fade from 'react-reveal/Fade';

const Technology = () => {

    const [currentDisplay, setCurrentDisplay] = useState('frontend')
    const [frontEndBtn, setFrontEndBtn] = useState('Frontend')
    const [backEndBtn, setBackEndBtn] = useState('Backend')
    const [dbmsBtn, setDbmsBtn] = useState('DBMS')

    const handleClick = (input) => {
        setCurrentDisplay(input)
    }

    return (
        <div className='technology-container' id="experience">
            <Fade>
                <h1>Technology Stacks</h1>
                <div className='technology-container-display'>
                    <button
                        onClick={() => handleClick('frontend')}
                        onMouseEnter={() => setFrontEndBtn('Look & Feel')}
                        onMouseLeave={() => setFrontEndBtn('Frontend')}
                        href='#tech-c'
                    >
                        {frontEndBtn}
                    </button>
                    <button
                        onClick={() => handleClick('backend')}
                        onMouseEnter={() => setBackEndBtn('Performance')}
                        onMouseLeave={() => setBackEndBtn('Backend')}
                    >
                        {backEndBtn}
                    </button>
                    <button
                        onClick={() => handleClick('DBMS')}
                        onMouseEnter={() => setDbmsBtn('Data Storage')}
                        onMouseLeave={() => setDbmsBtn('DBMS')}
                    >
                        {dbmsBtn}
                    </button>
                    <button onClick={() => handleClick('other')}>Other</button>
                </div>
                <div className='technology-container-technology' id='tech-container'>
                    {currentDisplay === 'frontend' ? <Frontend /> :
                        currentDisplay === 'backend' ? <Backend /> :
                            currentDisplay === 'DBMS' ? <DBMS /> :
                                currentDisplay === 'other' ? <Other /> : ''}
                </div>
            </Fade>
        </div>
    )
}

export default Technology