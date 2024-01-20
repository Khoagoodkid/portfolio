import React, { useState, useReducer, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import NavBar from '../../components/NavBar/NavBar'
import "./Work.css"
import productHeader from '../../assets/productHeader.avif'
import { slides } from '../../works'
import { motion } from "framer-motion"
import Slider from '../../components/Slider/Slider'
import Reveal from '../../components/Reveal/Reveal'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { FrontendSlider } from '../../components/FrontendSlider/FrontendSlider'
import TopBar from '../../components/TopBar/TopBar'
function Work() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

    };
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, [3000]);

    }, []);
    return (
        <div className='workBody'>
            <NavBar />
            <div className="workContainer">
                {/* <div className='workWrapper'> */}
                {isShown && <>
                    <TopBar />
                    <div className='hero-banner'>
                        <div className='title'>
                            <div className='design'>
                                <img src="/web-design.png" />
                                <Reveal>
                                    <span style={{ width: '100%', fontFamily: 'poppin' }}>UI/UX works, including login, landing page...</span>

                                </Reveal>
                            </div>
                            <div className='discover'>

                                <motion.h2
                                    initial={{ opacity: 0, x: -100 }}

                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className='disc'>Disc</motion.h2>
                                <motion.img
                                    initial={{ opacity: 0, scale:0.5 }}

                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: .5 }}
                                    src="/discover.png" />
                                <motion.h2
                                    initial={{ opacity: 0, x: 100 }}

                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className='ver'>ver</motion.h2>
                            </div>
                            <div className='fullstack'>
                                <img src="/fullstack.png" />
                                <Reveal>
                                    <span style={{ width: '100%', fontFamily: 'poppin' }}>Full-stack works, operating frontend and backend system</span>
                                </Reveal>
                            </div>
                        </div>

                    </div>
                    <FrontendSlider />



                    <div className='projects'>

                        <div className="title">
                            <Reveal>
                                <h2>Projects </h2>

                            </Reveal>
                            <h2 style={{ color: "#0bd3b4" }}>.</h2>
                            <div className="line"></div>

                        </div>
                        <div className='project-display'>

                            {slides.map((project) => {
                                return (
                                    <ProjectCard project={project} />

                                )
                            })}
                        </div>
                    </div>

                </>}

                <Loading />
            </div>
        </div>
    )
}

export default Work