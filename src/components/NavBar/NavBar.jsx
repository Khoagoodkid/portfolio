import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Khoa from '../../assets/Khoa.png'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import { PageContext } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const { page, setPage } = useContext(PageContext)
    return (
        <>

            <MenuIcon className='menuIcon' sx={{ fontSize: '3em', cursor: 'pointer' }}
                onClick={() => setIsOpen(true)}
            />
            <div className={isOpen ? 'navBarBody active' : 'navBarBody'}>
                <div className='topMenu'>
                    <img src={Khoa} />
                    <h3>Khoa</h3>
                </div>
                <nav className='navigators'>
                    <CloseIcon className='closeIcon' onClick={() => setIsOpen(false)}
                        sx={{ fontSize: '3em', display: isOpen ? 'block' : 'none', cursor: 'pointer' }}
                    />
                    <Link to='/'>
                        <HomeIcon className='navigator'
                            onClick={() => setPage('home')}
                            style={{ color: page === 'home' ? '#0bd3b4' : 'white' }}
                        />

                    </Link>
                    <Link to='/about'>
                        <PersonIcon className='navigator'
                            onClick={() => setPage('about')}
                            style={{ color: page === 'about' ? '#0bd3b4' : 'white' }} />
                    </Link>
                    <Link to='/skills'>
                        <SettingsIcon className='navigator'
                            onClick={() => setPage('skills')}
                            style={{ color: page === 'skills' ? '#0bd3b4' : 'white' }} />
                    </Link>
                    <Link to='/work'>
                        <DashboardIcon className='navigator'
                            onClick={() => setPage('work')}
                            style={{ color: page === 'work' ? '#0bd3b4' : 'white' }} />

                    </Link>
                    <Link to='/contact' >
                        <EmailIcon className='navigator'
                            onClick={() => setPage('contact')}
                            style={{ color: page === 'contact' ? '#0bd3b4' : 'white' }} />
                    </Link>
                </nav>
                <nav>

                </nav>
            </div>
        </>
    )
}

export default NavBar