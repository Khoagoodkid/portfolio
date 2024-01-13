import React, { useState, useReducer, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import NavBar from '../../components/NavBar/NavBar'
import "./Work.css"
import productHeader from '../../assets/productHeader.avif'
import { slides } from '../../works'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Coverflow from 'react-coverflow';
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
                                <img src="/web-design.png"/>
                                <span style={{width:'100%', fontFamily:'poppin'}}>UI/UX works, including login, landing page...</span>
                            </div>
                            <div className='discover'>
                                <h2 className='disc'>Disc</h2>
                                <img src="/discover.png" />
                                <h2 className='ver'>ver</h2>
                            </div>
                            <div className='fullstack'>
                                <img src="/fullstack.png"/>
                                <span style={{width:'100%', fontFamily:'poppin'}}>Full-stack works, operating frontend and backend system</span>
                            </div>
                        </div>

                        {/* <FrontendSlider /> */}
                    </div>



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