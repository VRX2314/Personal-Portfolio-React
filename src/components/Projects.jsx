import React from 'react'
import Fade from 'react-reveal'
import { SiGithub, SiMongodb, SiExpress, SiAngular, SiNodedotjs, SiMysql, SiPhp, SiJavascript, SiXampp, SiPython, SiPandas, SiJupyter } from 'react-icons/si'
import { GoGraph } from 'react-icons/go'
import { VscFilePdf } from 'react-icons/vsc'
import Ocean from '../assets/Ocean O’NFT.svg'
import Layman from '../assets/The_Laymans_Guide.svg'
import Expense from '../assets/Expense.svg'
import Covid from '../assets/Covid.svg'

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
                        <div className="project-card-top green-gradient">
                            <div className="project-card-img-container">
                                <img className="project-card-img" src={Ocean} />
                            </div>
                        </div>
                        <div className="project-card-bottom">
                            <p className="project-description">Ocean O'NFT is an online NFT trading and bidding marketplace.
                                Users can bid on NFTs live with an auctioning system. It features a large collection of NFTs and
                                is a responsive dynamic website with an account and a balance system.
                            </p>
                            <div className='stack'>
                                <SiMongodb />
                                <SiExpress />
                                <SiAngular />
                                <SiNodedotjs />
                            </div>
                            <a href="https://github.com/VRX2314/Ocean-o-NFT" target="_blank" className="project-btn green-gradient">View Project <SiGithub /></a>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="project-card-container">
                        <div className="project-card-top pink-gradient">
                            <div className="project-card-img-container">
                                <img className="project-card-img" style={{ width: '70%' }} src={Expense} />
                            </div>
                        </div>
                        <div className="project-card-bottom">
                            <p className="project-description">An expense manager and tracker built in Python which based on user’s monthly allowance gives a daily expenditure limit to the user as well as provides graphs for both daily spend and where (food, medical, other etc) the money was spent.</p>
                            <div className='stack'>
                                <SiMysql />
                                <SiPython />
                                <SiXampp />
                                <GoGraph />
                            </div>
                            <a href="https://github.com/VRX2314/Expense-Manager-in-Python" target="_blank" className="project-btn pink-gradient">View Project <SiGithub /></a>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="project-card-container">
                        <div className="project-card-top blue-gradient">
                            <div className="project-card-img-container">
                                <img className="project-card-img" style={{ width: '70%' }} src={Covid} />
                            </div>
                        </div>
                        <div className="project-card-bottom">
                            <p className="project-description">An autoregressive integrated moving average model fed data from American Unemployment rate records to predict the trend in unemployment due to the lockdowns initiated to control Covid 19.</p>
                            <div className='stack'>
                                <SiPandas />
                                <SiPython />
                                <SiJupyter />
                                <GoGraph />
                            </div>
                            <a href="../assets/C093_Prescriptive Analysis of Unemployment.pdf" download className="project-btn blue-gradient" target="_blank">View Project <VscFilePdf /></a>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="project-card-container">
                        <div className="project-card-top yellow-gradient">
                            <div className="project-card-img-container">
                                <img className="project-card-img" src={Layman} style={{ width: '70%' }} />
                            </div>
                        </div>
                        <div className="project-card-bottom">
                            <p className="project-description">
                                A blog/forum website explaining the new and latest technologies to the non tech savvy generation of people.
                            </p>
                            <div className='stack'>
                                <SiMysql />
                                <SiJavascript />
                                <SiXampp />
                                <SiPhp />
                            </div>
                            <a href="#" className="project-btn yellow-gradient" target="_blank">View Project <SiGithub /></a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Projects