import React from 'react'
import { Fade } from 'react-reveal'
import SwiperComponent from './SwiperComponent'


const Projects = () => {
    return (
        <>
            <div className="projects-swiper-container">
                <Fade>
                    <div className='projects-container'>
                        <div>
                            <h1>Featured Projects</h1>
                        </div>
                    </div>
                    <div className='projects-swiper'>
                        <SwiperComponent />
                    </div>
                </Fade>

            </div>
        </>

    )
}

export default Projects