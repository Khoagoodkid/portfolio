/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./FrontendSlider.css"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Slider from "react-slick";
import Reveal from "../Reveal/Reveal";

const imgs = [
    "/Frontend-UI/billing_page.png",
    "/Frontend-UI/burger_landing_page.png",
    "/Frontend-UI/developer_hero_banner.png",
    "/Frontend-UI/get_started.png",
    "/Frontend-UI/login_page.png",
    "/Frontend-UI/nodes_benefit.png",
    "/Frontend-UI/nodes_hero_banner.png",
    "/Frontend-UI/rental_car.png",
    "/Frontend-UI/songify_landing_page.png",
    "/Frontend-UI/user_card.png",
];
const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    arrows: false,
    dots: false,
    infinite: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const FrontendSlider = () => {
    const sliderRef = useRef(null);

    const handlePrevBtn = () => {
        sliderRef.current?.slickPrev();
    };
    const handleNextBtn = () => {
        sliderRef.current?.slickNext();
    };
    return (
        <div className="slider-body">
            {/* <h1>sss</h1> */}
            <div className="controller">
                <a onClick={handlePrevBtn}>
                    <ArrowBackIcon />
                </a>
                <a onClick={handleNextBtn}>
                    <ArrowForwardIcon />
                </a>
            </div>
            <Reveal>
                <Slider {...settings} ref={sliderRef} style={{ margin: '' }}>
                    {imgs.map((img, index) => {
                        const title = img.split('/').pop().split('.').shift().replace(/_/g, ' ')

                        return (
                            <div key={index}>

                                <img src={img} className="slide" />
                                <span style={{ fontFamily: 'poppin' }}>{title[0].toUpperCase() + title.slice(1)}</span>
                            </div>
                        )
                    })}
                </Slider>
            </Reveal>

        </div>
    )
}

