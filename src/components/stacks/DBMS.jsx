import React from 'react'
import { SiMongodb } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import Fade from 'react-reveal/Fade';

const DBMS = () => {
    return (
        <>
            <Fade>
                <div className='technology-container-technology-icons'>
                    <SiMongodb />
                    <p>Mongo DB</p>
                </div>
                <div className='technology-container-technology-icons'>
                    <SiMysql />
                    <p>MySQL</p>
                </div>
            </Fade>
        </>
    )
}

export default DBMS