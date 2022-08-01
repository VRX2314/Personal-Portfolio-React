import React from 'react'
import { SiMysql, SiMongodb } from 'react-icons/si'

const DBMS = () => {
    return (
        <div className='skills-display dbms'>
            <p className='skills-display-title'>DBMS</p>
            <p className='skills-display-subtitle'>Database querying, Indexing, Schema design, Database integration, Data manipulation, Data Definition</p>
            <div className='skills-display-logo-container'>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiMysql />
                    </div>
                    <p>MySQL</p>
                </div>
                <div className='skills-display-logo-text'>
                    <div className='skills-logo-container'>
                        <SiMongodb />
                    </div>
                    <p>MongoDB</p>
                </div>
            </div>
            <p className='skills-display-close'>Tap Again to Close</p>
        </div >
    )
}

export default DBMS