/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./FrontendSlider.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
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


export const FrontendSlider = () => {
    return (
        <div className="slider-body">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
               
            >
                {imgs.map((img) => {
                    return (
                        <SwiperSlide key={img}>
                            <div style={{ width: '90%', height: '30em', borderRadius:'1em', backgroundImage:`url(${img})`, backgroundSize:'contain', backgroundRepeat:'no-repeat' }}>

                                </div>
                        </SwiperSlide>
                    )

                })}

            </Swiper>

        </div>
    )
}

