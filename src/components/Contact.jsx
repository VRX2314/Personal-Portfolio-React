import React from 'react'

import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineSlack } from 'react-icons/ai'
import { Fade } from 'react-reveal'

const Contact = () => {
    return (
        <div className="contact-details" id="contacts">
            <Fade>
                <h1>Contact</h1>
                <div className='contact-links' >
                    <a className='contact-list-container' href="https://www.instagram.com/vansh_shah2314/" target='_blank' rel="noreferrer">
                        <AiOutlineInstagram />
                        <p>Instagram</p>
                    </a>
                    <a className='contact-list-container' href='https://www.linkedin.com/in/vansh-shah-25453a223/' target='_blank' rel="noreferrer">
                        <AiOutlineLinkedin />
                        <p>LinkedIn</p>
                    </a>
                    <a className='contact-list-container' href='https://join.slack.com/t/vrxsummerstuff/shared_invite/zt-17xmafrlf-FbTBfyLMjunhb3f5Sk8lLQ' target='_blank' rel="noreferrer">
                        <AiOutlineSlack />
                        <p>Slack</p>
                    </a>
                    <a className='contact-list-container' href='https://mail.google.com/mail/?view=cm&fs=1&to=vanshgalaxy@gmail.com' target='_blank' rel="noreferrer">
                        <AiOutlineMail />
                        <p>Mail</p>
                    </a>
                </div>
            </Fade>

        </div>
    )
}

export default Contact