import React from 'react'
import Fade from 'react-reveal'

const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <div className="project-card-wrapper">
                <Fade>
                    <div className="projects-title">
                        Featured Projects
                        <div className='underglow'></div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-card-container">
                        <div className="project-card-top green-gradient"></div>
                        <div className="project-card-bottom">
                            <p className="project-description">Description</p>
                            <a href="#" className="project-btn green-gradient">View Project</a>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="project-card-container">
                        <div className="project-card-top pink-gradient"></div>
                        <div className="project-card-bottom">
                            <p className="project-description">Description</p>
                            <a href="#" className="project-btn pink-gradient">View Project</a>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-card-container">
                        <div className="project-card-top blue-gradient"></div>
                        <div className="project-card-bottom">
                            <p className="project-description">Description</p>
                            <a href="#" className="project-btn blue-gradient">View Project</a>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="project-card-container">
                        <div className="project-card-top yellow-gradient"></div>
                        <div className="project-card-bottom">
                            <p className="project-description">Description</p>
                            <a href="#" className="project-btn yellow-gradient">View Project</a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Projects