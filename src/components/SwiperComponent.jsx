import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ProjectCard from './ProjectCard';

import IOTproject from '../assets/IOTproject.png'
import WTproject from '../assets/WTproject.png'
import PLIIproject from '../assets/PLIIproject.jpeg'
import FWDproject from '../assets/FWDproject.png'
import BDSproject from '../assets/BDSproject.png'

import { SiPython } from 'react-icons/si'
import { ImStatsDots } from 'react-icons/im'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'

let width = window.innerWidth

const SwiperComponent = () => {
    return (
        <Swiper
            slidesPerView={width < 1200 ? 1 : 3}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}
        >
            <SwiperSlide>
                <ProjectCard
                    title="Ocean O' NFT"
                    description='NFT Marketplace'
                    stack={<>
                        <AiFillHtml5 />
                        <IoLogoCss3 />
                        <SiJavascript />
                        <SiAngular />
                        <SiMongodb />
                        <SiNodedotjs />
                    </>}
                    image={WTproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='Expense Manager'
                    description='An expense manager in Python.'
                    stack={
                        <>
                            <SiPython />
                            <SiMysql />
                        </>
                    }
                    image={PLIIproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title="Layman's Guide"
                    description='A website explaining new trends in technology in a simplified manner.'
                    stack={
                        <>
                            <AiFillHtml5 />
                            <IoLogoCss3 />
                            <SiJavascript />
                            <SiPhp />
                            <SiMysql />
                        </>
                    }
                    image={FWDproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='Prescriptive Analysis of Covid-19'
                    description='Analysis of unemployment rate due to Covid-19 using Sarimax model.'
                    stack={
                        <>
                            <SiPython />
                            <ImStatsDots />
                        </>
                    }
                    image={IOTproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='File Manager'
                    description='Simple File Manager in C++ CUI'
                    stack={
                        <>
                            <SiCplusplus />
                        </>
                    }
                    image={BDSproject}
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent