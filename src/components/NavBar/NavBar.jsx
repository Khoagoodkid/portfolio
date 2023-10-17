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
                    
                    <span>K</span>
                    <span style={{color:'#0bd3b4'}}>.</span>
                </div>
                <nav className='navigators'>
                    <CloseIcon className='closeIcon' onClick={() => setIsOpen(false)}
                        sx={{ fontSize: '3em', display: isOpen ? 'block' : 'none', cursor: 'pointer' }}
                    />
                    <Link className = {page === 'home' ? 'navigator selected' : 'navigator'}
                     onClick={() => setPage('home')}
                    to='/'>
                        <HomeIcon 
                           className='nav-icon'
                          
                        />

                    </Link>
                    <Link className = {page === 'about' ? 'navigator selected' : 'navigator'}
                     onClick={() => setPage('about')}
                    to='/about'>
                        <PersonIcon
                             className='nav-icon'
                           />
                    </Link>
                    <Link className = {page === 'skills' ? 'navigator selected' : 'navigator'} 
                    onClick={() => setPage('skills')}
                    to='/skills'>
                        <SettingsIcon
                         className='nav-icon'
                           />
                    </Link>
                    <Link className = {page === 'works' ? 'navigator selected' : 'navigator'}
                     onClick={() => setPage('work')}
                    to='/work'>
                        <DashboardIcon
                            className='nav-icon'
                            />

                    </Link>
                    <Link className = {page === 'contact' ? 'navigator selected' : 'navigator'} 
                      onClick={() => setPage('contact')}
                    to='/contact' >
                        <EmailIcon 
                            className='nav-icon'
                           />
                    </Link>
                </nav>
                
            </div>
        </>
    )
}

export default NavBar