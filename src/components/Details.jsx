import React from 'react'
import Typed from 'react-typed'

import Fade from 'react-reveal/Fade';

const Details = () => {
    return (
        <div className='details-container'>
            <Fade>
                <h1>VANSH</h1>
                <h2><span className='black'>&lt;</span>
                    <Typed
                        strings={
                            [
                                'Developer',
                                'Student',
                                'Designer'
                            ]}
                        showCursor={false}
                        typeSpeed={60}
                        backSpeed={60}
                        loop
                    /> <span className='black'>/&gt;</span>
                </h2>
            </Fade>
        </div>
    )
}

export default Details