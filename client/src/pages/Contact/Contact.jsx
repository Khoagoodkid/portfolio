import  { useState, useEffect } from 'react'
import "./Contact.css"
import NavBar from '../../components/NavBar/NavBar'
import Loading from '../../components/Loading/Loading'
import { profile } from '../About/About'
import map from '../../assets/map-can.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reveal from '../../components/Reveal/Reveal'
import TopBar, { socials } from '../../components/TopBar/TopBar'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import { motion } from 'framer-motion'
function Contact() {
    const [user, setUser] = useState({
        email: '',
        name: '',
        text: ''
    })
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, [3000]);

    }, []);
    const sendEmailMsg = (e) => {
        e.preventDefault()
        if (!user.email || !user.name || !user.text) {
            toast.error("Please fill the form before submitting")
            return;
        }
        const api = import.meta.env.VITE_API_BASE + "/email"
        // const api = 'http://localhost:3000/email'
        axios.post(api, user)
        setUser({
            email: '',
            name: '',
            text: ''
        })
        toast.success("I have received your email. An email with confirmation will be sent to you in few minutes")
    }
    return (
        <div className='contactBody'>

            <NavBar />

            <div className='contactContainer'

            >
                <ToastContainer
                    theme="light"
                />
                <Loading />
                {isShown && <>
                    <TopBar></TopBar>
                    
                    <section className='contact-hero'>
                        <div className='contact-hero-content'>
                            <SectionHeader 
                                sectionNumber="01"
                                title="Get in Touch"
                                subtitle="If you find me impressive, please don't be hesitant to contact me via the information below or the form underneath."
                            />
                            
                            <div className='contact-info-grid'>
                                {profile.slice(1, profile.length).map((info, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            className='contact-info-card'
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <div className='contact-info-icon'>{info.img}</div>
                                            <div className='contact-info-content'>
                                                <h3 className='contact-info-label'>{info.name[0].toUpperCase() + info.name.slice(1)}</h3>
                                                <p className='contact-info-text'>{info.text}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    <section className='contact-form-section'>
                        <div className='contact-form-container'>
                            <SectionHeader 
                                sectionNumber="02"
                                title="Send a Message"
                                centered={true}
                            />
                            
                            <form className='contact-form' onSubmit={sendEmailMsg}>
                                <div className='form-row'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <input 
                                            id='email'
                                            type='email'
                                            placeholder='your.email@example.com'
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            value={user.email}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <input 
                                            id='name'
                                            type='text'
                                            placeholder='Your name'
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                            value={user.name}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='message'>Message</label>
                                    <textarea 
                                        id='message'
                                        placeholder='Your message goes here...'
                                        onChange={(e) => setUser({ ...user, text: e.target.value })}
                                        value={user.text}
                                        rows={6}
                                        required
                                    />
                                </div>
                                
                                <motion.button 
                                    type='submit'
                                    className='submit-button'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </section>

                    <section className='social-links-section'>
                        <div className='social-links-container'>
                            <SectionHeader 
                                sectionNumber="03"
                                title="Connect With Me"
                                subtitle="Find me on these platforms"
                                centered={true}
                            />
                            
                            <div className='social-links-grid'>
                                {socials.map((app, i) => {
                                    return (
                                        <motion.a
                                            key={i}
                                            className='social-link-card'
                                            onClick={() => window.open(app.link)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                        >
                                            <div className='social-link-icon'>{app.icon}</div>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    <section className='map-section'>
                        <div className='map-container'>
                            <div className='map-overlay'></div>
                            <img src={map} alt="Location Map" className='map-image' />
                        </div>
                    </section>

                </>}

            </div>
        </div>
    )
}

export default Contact