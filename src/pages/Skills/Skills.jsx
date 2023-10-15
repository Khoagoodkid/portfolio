import React, { useState, useEffect } from 'react'
import "./Skills.css"
import NavBar from '../../components/NavBar/NavBar'
import Loading from '../../components/Loading/Loading'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import MonitorIcon from '@mui/icons-material/Monitor';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
const skills = [
    {
        name: 'Frontend',
        percent: 90,
        color: '#58ed55',
        boxShadow:'rgba(88, 237, 85,0.5)'
    },
    {
        name: 'Backend',
        percent: 75,
        color: '#f73650',
        boxShadow:'rgba(247, 54, 80,0.5)'
    },
    {
        name: 'Javascript',
        percent: 90,
        color: '#ffee03',
        boxShadow:'rgba(255, 238, 3,0.5)'
    },
    {
        name: 'Python',
        percent: 30,
        color: '#5656f5',
        boxShadow:'rgba(86, 86, 245,0.5)'
    },
    {
        name: 'PHP',
        percent: 50,
        color: '#ffa14f',
        boxShadow:'rgba(255, 161, 79,0.5)'
    },
    {
        name: 'C++',
        percent: 95,
        color: '#781aa1',
        boxShadow:'rgba(120, 26, 161,0.5)'
    },


]
const services = [
    {
        name: 'User Experience / User Interface',
        img:<MonitorIcon/>,
    },
    {
        name: 'Game Development',
        img:<SportsEsportsIcon/>,
    },
    {
        name: 'AI Engineering',
        img:<SmartToyIcon/>,
    },
]
function Skills() {
    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        setTimeout(() => {

            setIsShown(true)
        }, [3000])
    }, [])

    return (

        <div className='skillsBody'>
            <NavBar />

            <div className='skillsContainer'

            >


                <Loading />
                {isShown && <>
                    <div className="display">
                        <div className="text">
                            <h1 style={{ color: '#0bd3b4', fontFamily: 'Gloria Hallelujah, cursive' }}>What do my skills include ?</h1>
                            <p> I have always been interested in high-tech services and how they technically benefit human life. 
                                I attempted building simple websites at first and found it to be incredibly challenging, 
                                but I am glad to announce that I am an experienced web developer now.
                            </p>
                            <p>
                            Initially, I spent around two years learning about front-end technologies like HTML, 
                            CSS, and Javascript before beginning to learn about back-end systems like MongoDB, Postgresql, and
                             Express, FastAPI to become a full-stack developer.
                            </p>

                        <div className='services'>
                            <h2 style={{ color: '#0bd3b4' }}>Other services</h2>
                            {services.map((service) => {
                                return (
                                    <div className='serviceCard'>
                                        {service.img}
                                        <span>{service.name}</span>
                                        </div>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                    <div className='cube'>
                        {skills.map((s, index) => {
                            return (
                                // <div style={{ width: '100%', height: '8em' }} key={index}>

                                    <ProgressBar skill={s} />
                                // </div>
                            )
                        })}
                    </div>
                </>}



            </div>
        </div>
    )
}

export default Skills