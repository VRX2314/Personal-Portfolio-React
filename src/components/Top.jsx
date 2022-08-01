import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Logo from '../assets/VS-logo-phone.svg'
import Menu from '../assets/Menu-phone.png'
import { VscChromeClose } from 'react-icons/Vsc'

const top = () => {
    const [menuStatus, setMenuStatus] = useState('top-nav-menu-container hidden')
    const [isMenu, setIsMenu] = useState(false)

    const showMenu = () => {
        if (!isMenu) {
            setMenuStatus('top-nav-menu-container')
            setIsMenu(true)
        }
        else {
            setMenuStatus('top-nav-menu-container hidden')
            setIsMenu(false)
        }
    }

    return (
        <div className='top-container' id='top'>
            <nav className='top-nav-phone'>
                <Fade>
                    <div className='top-nav-logo-container'>
                        <img src={Logo} />
                    </div>
                    <div
                        className='top-nav-menu-logo-container'
                        onClick={() => showMenu()}
                    >
                        <img src={Menu} />
                    </div>
                </Fade>
                <div className='top-nav-menu-pc'>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#about'>About</a>
                    <a href='#contact'>Contact</a>
                </div>
                <Fade right cascade opposite when={isMenu}>
                    <div className={menuStatus}>
                        <div className='top-nav-menu-close' onClick={() => showMenu()}>
                            <VscChromeClose />
                        </div>
                        <a href='#top' className='top-nav-menu-option'>Top</a>
                        <a href='#skills' className='top-nav-menu-option'>Skills</a>
                        <a href='#projects' className='top-nav-menu-option'>Projects</a>
                        <a href='#about' className='top-nav-menu-option'>About</a>
                        <a href='#contact' className='top-nav-menu-option'>Contact</a>
                    </div>
                </Fade>
            </nav >
            <Fade>
                <div className='hero-container'>
                    <div className='hero-title'>I Am <br /> Vansh </div>
                    <div className='hero-description'>A fourth year computer engineering <b>student</b> with a passion for <b>design</b> and <b>development</b></div>
                    <a className='hero-btn' href='#contact'>LET’S TALK!</a>
                </div>
            </Fade>
        </div >
    )
}

export default top