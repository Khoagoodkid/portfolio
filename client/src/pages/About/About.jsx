import React, { useContext, useEffect, useRef, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./About.css"

import Loading from '../../components/Loading/Loading'
import profilePic from '../../assets/profilePic.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'
import { PageContext } from '../../App'
import TopBar from '../../components/TopBar/TopBar'
import Reveal from '../../components/Reveal/Reveal'
import { educations } from '../../works'
import { motion } from 'framer-motion'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
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
        text: 'Winnipeg, Canada',
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
            <div className='aboutContainer'>
                <TopBar />
                <Loading />
                {isShown &&
                    <>
                        <section className="about-hero">
                            <div className="about-hero-content">
                                <motion.div 
                                    className="profile-image-wrapper"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <div className="profile-image-glow"></div>
                                    <img src={profilePic} alt="Profile" className="profile-image" />
                                    <div className="profile-image-border"></div>
                                </motion.div>

                                <div className="about-intro">
                                    <SectionHeader 
                                        sectionNumber="01"
                                        title="About Me"
                                    />

                                    <Reveal>
                                        <p className="intro-description">
                                            I'm a Vietnamese web developer living in Winnipeg, Canada.
                                            I have an unfathomable passion for developing sophisticated logic, 
                                            advanced web services, and web design.
                                        </p>
                                    </Reveal>

                                    <Reveal>
                                        <p className="intro-description">
                                            A creative web developer, problem solver, hard-working individual, 
                                            and a well-prepared man. I always figure out and welcome new unusual 
                                            initiatives for projects.
                                        </p>
                                    </Reveal>

                                    <div className='profile-details'>
                                        {profile.map((p, i) => (
                                            <motion.div
                                                key={i}
                                                className='profile-detail-card'
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                whileHover={{ scale: 1.05, x: 5 }}
                                            >
                                                <div className="detail-icon">{p.img}</div>
                                                <span className="detail-text">{p.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <Reveal>
                                        <Link to='/work' className="projects-button">
                                            <button onClick={() => setPage('work')}>
                                                View my projects
                                            </button>
                                        </Link>
                                    </Reveal>
                                </div>
                            </div>
                        </section>

                        <section className='education-section'>
                            <div className="education-container">
                                <SectionHeader 
                                    sectionNumber="02"
                                    title="Education"
                                    centered={true}
                                />
                               
                                <div className='education-timeline'>
                                    {educations.map((edu, i) => (
                                        <EduCard edu={edu} key={i} index={i} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                }
            </div>
        </div>
    )
}
const EduCard = ({ edu, index }) => {
    const { name, organization, subtitle, startDate, endDate, descriptions } = edu
    return (
        <motion.div
            className='edu-card'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className="edu-card-content">
                <div className="edu-card-header">
                    <div className="edu-card-icon">
                        <div className="icon-dot"></div>
                    </div>
                    <div className="edu-card-info">
                        <h3 className="edu-name">{name}</h3>
                        <span className="edu-organization">@{organization}</span>
                    </div>
                </div>
                <div className="edu-card-meta">
                    <span className="edu-dates">{startDate} - {endDate}</span>
                    <span className="edu-separator">•</span>
                    <span className="edu-subtitle">{subtitle}</span>
                </div>
                <ul className='edu-description'>
                    {descriptions.map((des, i) => (
                        <li key={i}>{des}</li>
                    ))}
                </ul>
            </div>
            <div className="edu-card-line"></div>
        </motion.div>
    )
}
export default About