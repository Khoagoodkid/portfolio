import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'
import { motion } from 'framer-motion'
import Loading from '../../components/Loading/Loading'
import iconsDark from '../../assets/mainIconsdark.svg'
import Khoa from '../../assets/Khoa.png'
import MouseEffect from '../../components/MouseEffect/MouseEffect'

import { Link } from 'react-router-dom'
import { PageContext } from '../../App'
import TopBar from '../../components/TopBar/TopBar'
import Reveal from '../../components/Reveal/Reveal'
function Home() {
    const { page, setPage } = useContext(PageContext)
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, [3000]);

    }, []);
    return (
        <div className='homeBody'>

            <NavBar />
            <div className='homeContainer'

            >
                <TopBar />
                <MouseEffect />
                <Loading />
                {isShown && <>
                    <div className='introCard'>
                        <div className='introText'>
                            <div className='z'>
                                H
                            </div>
                            <div className='a'>i,</div>
                            <div className='b'>I</div>
                            <div className='y'>,</div>
                            <div className='c'>m</div>
                            {/* <div className='d'>K</div> */}
                            <img src={Khoa} className='d' />
                            <div className='e'>h</div>
                            <div className='f'>o</div>
                            <div className='g'>a,</div>
                            <div className='h'>w</div>
                            <div className='i'>e</div>
                            <div className='j'>b</div>
                            <div className='k'>d</div>
                            <div className='l'>e</div>
                            <div className='m'>v</div>
                            <div className='n'>e</div>
                            <div className='o'>l</div>
                            <div className='p'>o</div>
                            <div className='q'>p</div>
                            <div className='r'>e</div>
                            <div className='s'>r</div>
                        </div>
                        <div className='subInfo'>
                            <div className='subInfo1'>
                                <Reveal>

                                    <span>Full Stack Developer</span>
                                </Reveal>
                            </div>
                            <div className="subInfo2">
                                <Reveal>
                                    <span>
                                        AI Engineer
                                    </span>

                                </Reveal>
                            </div>
                        </div>
                        <div className='contactBtn'>
                          
                            <Link to='/contact'>
                                <Reveal>
                                    <a className='btn' onClick={() => setPage('contact')}>
                                        <div>
                                            <span className='bg'></span>
                                            <span className='base'></span>

                                            <span className='text'>Contact me !</span>
                                        </div>
                                    </a>
                                </Reveal>

                            </Link>
                        </div>
                    </div>
                    <div className='coderImg'>
                        <img src={iconsDark} />
                    </div>

                </>}
            </div>
        </div>

    )
}

export default Home