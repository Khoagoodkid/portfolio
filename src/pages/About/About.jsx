import React,{useContext} from 'react'
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
export const profile = [
    {
        name: 'birthday',
        text: '17/08/2005',
        img: <CakeIcon />
    },
    {
        name: 'phone',
        text: '(+84) 66170805',
        img: <PhoneIcon />
    },
    {
        name: 'address',
        text: '46 C27 Street, Ho Chi Minh City, Vietnam',
        img: <LocationOnIcon />
    },
    {
        name: 'email',
        text: 'haphamanhkhoa@gmail.com',
        img: <EmailIcon />
    },

]
function About() {
    const {page,setPage} = useContext(PageContext)
    return (
        <div className='aboutBody'>

            <NavBar />
            <div className='aboutContainer'

            >
                <Loading />
                <div className="infoContainer">
                    <div className='profilePicture'>
                        <img src={profilePic} />
                        <div className='layout'>

                        </div>

                    </div>
                    <div className='infoText'>
                        <h1 style={{ color: '#0bd3b4', fontFamily: 'Gloria Hallelujah, cursive' }}>Me, Myself & I</h1>
                        <p>I'm mainly a web developer in Vietnam's Ho Chi Minh City.
                             I have an unfathomable passion for developing sophisticated logic, advanced web services, and web design.
                        </p>
                        <p>
                            A creative web developer,  problem solver,  hard-working individual, and a well-prepared man. I
                            always figure out and welcome new unusual initatives for projects.
                        </p>
                        <div className='details'>
                            {profile.map((p) => {
                                return (
                                    <div className='detailCard'>
                                        <div>{p.img}</div>
                                        <span>{p.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <Link to='/work'>

                            <button onClick={() => setPage('work')}>View my projects</button>
                        </Link>

                    </div>
                </div>
                <div className='cubeContainer'>

                    <FrameworkSlider />
                </div>
            </div>
        </div>
    )
}

export default About