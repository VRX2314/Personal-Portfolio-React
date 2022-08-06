import React from 'react'
import { useState } from 'react'
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import { AiFillWarning } from 'react-icons/ai'
import { FiMinimize2 } from 'react-icons/fi'
import { Fade } from 'react-reveal'
import dp from '../assets/dp.png'

const About = () => {

    const [isModel, setIsModel] = useState(false)
    const [isLoad, setIsLoad] = useState('Load Object')

    const handleLoad = () => {
        if (!isModel) {
            setIsModel(true)
            setIsLoad('RESET OBJECT')
        }
        else {
            setIsModel(false)
            setIsLoad('LOAD OBJECT')
        }
    }

    return (
        <div className="about-container" id="about">
            <Fade>
                <div className="about-title">
                    About
                    <div className='underglow'></div>
                </div>
                <div className="about-content-container">
                    <div className="about-display-pic green-gradient">
                        <img src={dp} className="dp" />
                    </div>
                </div>
                <div className="about-content-description">
                    Hello 👋, I am <b>Vansh</b>. I am a fourth year Computer Engineering <b>student</b> pursuing a <b>Bachelor’s Degree in
                        Technology 🎓</b> in a six year integrated course. I have a strong grasp on <b>web development 💻</b> and also have experience
                    with <b>software development 🧑‍💻</b> and <b>data modelling, shaping 📈</b> for machine learning models.
                    Coding has always come <b>naturally</b> to me, and I love designing UI/UX, its almost like a hobby to me.
                    I am comfortable with both aesthetic <b>design</b> as well as <b>implementation</b> of concept and
                    don’t have much difficulty in <b>learning</b> new tools/frameworks. Currently <b>curious</b> about
                    Web3 development and AI 🤖. Also, I produce music 🎧 play the guitar 🎸, and love playing Pokémon 😁.
                </div>
                <div className='about-content-model'>
                    {isModel ? <div className='about-content-model-frame'>
                        <iframe src='https://my.spline.design/portfolioroomcopy-ea96ade774b7f9c18b4b4eda94c0de0d/' frameborder='0' width='100%' height='100%'></iframe>
                        <button className='object-load-button blue-alt-gradient' onClick={() => handleLoad()}>{isLoad}</button>
                    </div> :
                        <div className='about-content-model-cover'>
                            <div className='about-content-model-cover-cube'>
                                <HiOutlineCubeTransparent />
                            </div>
                            Interactive 3D Model <br /> of My Room
                            <div className='model-warning'>
                                <AiFillWarning />
                                Might take 30-60s to load <br />May impact Performance
                            </div>
                            <div className='model-tip'>
                                <FiMinimize2 />
                                Pinch to zoom out if <br />
                                model is zoomed in
                            </div>
                            <button className='object-load-button blue-alt-gradient' onClick={() => handleLoad()}>{isLoad}</button>
                        </div>}
                </div>
            </Fade>
        </div>
    )
}

export default About