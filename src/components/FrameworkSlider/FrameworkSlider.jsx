import React from 'react'
import "./FrameworkSlider.css"
import Khoa from '../../assets/Khoa.png'
import test from '../../assets/test.jpg'
import TagCloud from 'TagCloud'


import { useEffect, useRef, useState } from 'react'
// import { Tag } from '@mui/icons-material'
function FrameworkSlider() {
    const isLoaded = useRef(false)
    const texts = [
        'Html', 'Css', 'Javascript',
        'C++', 'Mongoose', 'React', 'Python', 'C++',    
        'C#', 'Material UI', 'Postgresql','FastAPI',
        'Bootstrap', 'NodeJS', 'MongoDB', 'Tailwind Css',
        'Express', 'Firebase', 'JQuery', 'Laravel', 
        'Php', 'MySQL','ReactJS','Scss'
    ];
    useEffect(() => {
       
        if (isLoaded.current) return
      

            loadTagCloud()
       
        isLoaded.current = true
    }, [window.innerWidth])
    const loadTagCloud = () => {
        let radius = 350
        if(window.innerWidth <= 668) {
            radius = 150;
           
        }
        TagCloud('.slider', texts, {
            radius: radius,
            maxSpeed: 'fast',
            initSpeed:'fast',
            direction: 135,
            keep: true,


        })
        // setIsLoaded(false)
    }
    return (
        <div className='sliderBody' id='sliderBody'>
            <div className='slider'>

            </div>



        </div>
    )
}

export default FrameworkSlider