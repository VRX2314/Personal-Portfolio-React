import React from 'react'

const ProjectCard = ({ title, description, stack, image }) => {
    return (
        <div className="project-card">
            <div className="title-container-project">
                <h1>{title}</h1>
            </div>
            <div className='project-image'>
                <img src={image} alt='' />
            </div>
            <p>{description}</p>
            <div className='project-stack bottom'>
                {stack}
            </div>

        </div>
    )
}

export default ProjectCard