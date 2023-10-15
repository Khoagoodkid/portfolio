import React,{useState} from 'react'
import "./Contact.css"
import NavBar from '../../components/NavBar/NavBar'
import { motion } from 'framer-motion'
import Loading from '../../components/Loading/Loading'
import topImg from '../../assets/topImg.avif'
import { profile } from '../About/About'
import map from '../../assets/map.jpg'
import axios from 'axios'
function Contact() {
    const [user,setUser] = useState( {
        email:'',
        name:'',
        text:''
    })
    const sendEmailMsg = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post('https://portfolio-backend-qxfn.onrender.com/email', user)
    }
    return (
        <div className='contactBody'>

            <NavBar />

            <div className='contactContainer'

            >
                <Loading />
                <div className='topImgWrapper' style={{ backgroundImage: `url(${topImg})` }}>
                    <div className='topImgContainer'>
                        <button>
                            Contact me
                        </button>
                    </div>
                </div>
                <div className='content'>
                    <h1>Get in touch with me </h1>
                    <div className='info'>
                        {profile.slice(1, profile.length).map((info, index) => {
                            return (
                                <div className='infoCard' key={index}>
                                    <div style={{ color: '#0bd3b4' }}>{info.img}</div>
                                    <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#0bd3b4' }}>{info.name[0].toUpperCase() + info.name.slice(1)}</span>
                                    <p>{info.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{padding:'1em'}}>
                        <span>If you find me impressive</span><br />
                        <span>Please don't be hesitant to contact me via information above or form underneath. </span>
                    </div>
                    <form className='form' onSubmit={sendEmailMsg}>
                        <div className='row'>
                            <input placeholder='abc@gmail.com...' 
                                onChange={(e) => setUser({...user, email:e.target.value}) }
                            />
                            <input placeholder='Name...'
                            onChange={(e) => setUser({...user, name:e.target.value}) }
                            />
                        </div>
                        <div className='row'>
                            <textarea placeholder='Your text goes here...' 
                            onChange={(e) => setUser({...user, text:e.target.value}) }
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>

                </div>
                <div className='map' style={{backgroundImage:`url(${map})`}}>
                  
                   <div></div>
                </div>

            </div>
        </div>
    )
}

export default Contact