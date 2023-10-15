import React, { useState, useReducer } from 'react'
import Loading from '../../components/Loading/Loading'
import NavBar from '../../components/NavBar/NavBar'
import "./Work.css"
import productHeader from '../../assets/productHeader.avif'
import {  slides } from '../../works'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Coverflow from 'react-coverflow';
import Slider from '../../components/Slider/Slider'
function Work() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

    };

    return (
        <div className='workBody'>
            <NavBar />
            <div className="workContainer">
                {/* <div className='workWrapper'> */}
                <Slider/>
                <Loading/>
            </div>
        </div>
    )
}

export default Work