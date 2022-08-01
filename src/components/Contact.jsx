import React from 'react'
import MailIcon from '../assets/mail Icon.svg'
import Insta from '../assets/Insta.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import { Fade } from 'react-reveal'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='contact-container' id="contact">
            <Fade left>
                <div className='contact-content'>
                    Interested In <br /> Working With Me?
                </div>
            </Fade>
            <Fade left cascade>
                <div className='contact-buttons'>
                    <a href='https://www.linkedin.com/in/vansh-shah-25453a223/' target="_blank" className='contact-btn green-gradient'>
                        <img className='contact-logo' src={LinkedIn} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vanshgalaxy@gmail.com" target="_blank" className='contact-btn yellow-gradient'>
                        <img className='contact-logo' src={MailIcon} />
                    </a>
                    <a href='https://www.instagram.com/vansh__2314/' target="_blank" className='contact-btn pink-gradient'>
                        <img className='contact-logo' src={Insta} />
                    </a>

                </div>
            </Fade>
            <Fade>
                <a href='#top' className='scroll-button-container'>
                    <BsFillArrowUpCircleFill />
                </a>
            </Fade>
        </div>
    )
}

export default Contact