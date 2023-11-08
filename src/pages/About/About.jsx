import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./About.css"

import Loading from '../../components/Loading/Loading'
import FrameworkSlider from '../../components/FrameworkSlider/FrameworkSlider'
import profilePic from '../../assets/profilePic.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'
import { PageContext } from '../../App'
import TopBar from '../../components/TopBar/TopBar'
import Reveal from '../../components/Reveal/Reveal'
export const profile = [
    {
        name: 'birthday',
        text: '17/08/2005',
        img: <CakeIcon />
    },
    {
        name: 'phone',
        text: '(+1) 204-881-9428',
        img: <PhoneIcon />
    },
    {
        name: 'address',
        text: '220 Dysart Rd, Winnipeg, Canada',
        img: <LocationOnIcon />
    },
    {
        name: 'email',
        text: 'haphamanhkhoa@gmail.com',
        img: <EmailIcon />
    },

]
function About() {
    const { page, setPage } = useContext(PageContext)
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, [3000]);

    }, []);
    return (
        <div className='aboutBody'>

            <NavBar />
            <div className='aboutContainer'

            >
                <TopBar />
                <Loading />
                {isShown &&
                    <>
                        <div className="infoContainer">
                            <div className='profilePicture'>
                                
                                    <img src={profilePic} />
                                <div className='layout'>

                                </div>
                                

                            </div>

                            <div className='infoText'>
                                <Reveal>

                                    <h1 style={{ color: '#0bd3b4', fontFamily: 'Gloria Hallelujah, cursive', fontWeight: 'bold' }}>Me, Myself & I</h1>
                                </Reveal>
                            
                                <Reveal>

                                    <p>I'm mainly a Vietnamese web developer living in Winnipeg, Canada.
                                        I have an unfathomable passion for developing sophisticated logic, advanced web services, and web design.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p>
                                        A creative web developer,  problem solver,  hard-working individual, and a well-prepared man. I
                                        always figure out and welcome new unusual initatives for projects.
                                    </p>

                                </Reveal>
                                <div className='details'>
                                    {profile.map((p, i) => {
                                        return (
                                            <Reveal>
                                                <div key={i} className='detailCard'>

                                                    <div>{p.img}</div>
                                                    <span>{p.text}</span>
                                                </div>
                                            </Reveal>
                                        )
                                    })}
                                </div>
                                <Link to='/work'>
                                    <Reveal>

                                        <button onClick={() => setPage('work')}>View my projects</button>
                                    </Reveal>
                                </Link>

                            </div>
                        </div>
                        <div className='cubeContainer'>

                            <FrameworkSlider />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default About