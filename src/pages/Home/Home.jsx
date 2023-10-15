import React,{useContext} from 'react'
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'
import { motion } from 'framer-motion'
import Loading from '../../components/Loading/Loading'
import coderGif from '../../assets/coder.gif'
import robotGif from '../../assets/robot.gif'
import Khoa from '../../assets/Khoa.png'
import MouseEffect from '../../components/MouseEffect/MouseEffect'
import vector from '../../assets/vecto.png'
import boy from '../../assets/boy.png'
import { Link } from 'react-router-dom'
import { PageContext } from '../../App'
function Home() {
    const {page,setPage} = useContext(PageContext)
    return (
        <div className='homeBody'>

            <NavBar />
            <div className='homeContainer'

            >
                <MouseEffect />
                <Loading />
                <div className='introCard'>
                    <div className='introText'>


                        <div className='z'>H</div>
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
                            Full Stack Developer
                        </div>
                        <div className="subInfo2">
                            AI Engineer
                        </div>
                    </div>
                    <div className='contactBtn'>
                        <Link to='/contact'>
                            <a className='btn' onClick={() => setPage('contact')}>
                                <div>
                                    <span className='bg'></span>
                                    <span className='base'></span>
                                    <span className='text'>Contact me !</span>
                                </div>
                            </a>

                        </Link>
                    </div>
                </div>
                <div className='coderImg'>
                    <img src={Khoa} />
                </div>
            </div>
        </div>

    )
}

export default Home