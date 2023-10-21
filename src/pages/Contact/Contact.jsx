import React, { useState, useEffect } from 'react'
import "./Contact.css"
import NavBar from '../../components/NavBar/NavBar'
import { motion } from 'framer-motion'
import Loading from '../../components/Loading/Loading'
import topImg from '../../assets/topImg.avif'
import { profile } from '../About/About'
import map from '../../assets/map-can.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reveal from '../../components/Reveal/Reveal'
import TopBar, { socials } from '../../components/TopBar/TopBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        const api = 'https://portfolio-backend-qxfn.onrender.com/email'
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
                    <div className='topImgWrapper' style={{ backgroundImage: `url(${topImg})` }}>
                        <img src={topImg}></img>
                        <div className='topImgContainer'>
                            <button>
                                Contact me
                            </button>
                        </div>
                    </div>
                    <div className='content'>
                        <Reveal>

                            <h1 >Get in touch with me<span style={{ fontSize: '2em', color: '#0bd3b4' }}>.</span></h1>
                        </Reveal>
                        <div className='info'>
                            {profile.slice(1, profile.length).map((info, index) => {
                                return (

                                    <Reveal>
                                        <div className='infoCard' key={index}>
                                            <div style={{ color: '#0bd3b4' }}>{info.img}</div>
                                            <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#0bd3b4', fontFamily: 'poppin' }}>{info.name[0].toUpperCase() + info.name.slice(1)}</span>
                                            <p>{info.text}</p>
                                        </div>
                                    </Reveal>
                                )
                            })}
                        </div>
                        <div style={{ padding: '1em' }}>
                            <Reveal>

                                <span>If you find me impressive</span><br />

                                <span>Please don't be hesitant to contact me via information above or form underneath. </span>
                            </Reveal>


                        </div>
                        <form className='form' onSubmit={sendEmailMsg}>

                            <div className='row'>
                                <input placeholder='abc@gmail.com...'
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    value={user.email}
                                />


                                <input placeholder='Name...'
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                    value={user.name}
                                />

                            </div>

                            <div className='row'>
                                <textarea placeholder='Your text goes here...'
                                    onChange={(e) => setUser({ ...user, text: e.target.value })}
                                    value={user.text}
                                />
                            </div>
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                    <div className='links'>

                        <Reveal>
                            <span>Connect With Me !<span style={{ color: '#0bd3b4' }}> My links</span></span>

                        </Reveal>
                        {/* <Reveal> */}

                            <ArrowForwardIcon style={{ color: '#0bd3b4' }} />
                        {/* </Reveal> */}

                        {socials.map((app, i) => {
                            return (
                                <Reveal>
                                    <a className='app'
                                        onClick={() => window.open(app.link)}
                                        key={i}>
                                        <>{app.icon}</>

                                    </a>
                                </Reveal>
                            )
                        })}
                    </div>
                    <div className='map' style={{ backgroundImage: `url(${map})` }}>
                        <div></div>
                        <img src={map} />
                    </div>

                </>}

            </div>
        </div>
    )
}

export default Contact