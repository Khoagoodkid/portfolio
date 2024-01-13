import React from 'react'
import "./TopBar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const socials = [
    {
        name:'facebook',
        icon:  <FacebookIcon className='icon'/>,
        link:'https://www.facebook.com/chendenhall.james/'
        
    }, {
        name:'instagram',
        icon:  <InstagramIcon className='icon'/>,
        link:'https://www.instagram.com/_coder.life/'
    }, {
        name:'github',
        icon:  <GitHubIcon className='icon'/>,
        link:'https://github.com/Khoagoodkid'
    }, {
        name:'linkedin',
        icon:  <LinkedInIcon className='icon'/>,
        link:'https://www.linkedin.com/in/james-ha-76b463296/'
    }
]

function TopBar() {
  return (
    <div className='topbar-body'>
        <nav className="socials">   
                   {socials.map((app,i) => {
                        return (
                            <a className='app' 
                            onClick={()=>window.open(app.link)}
                            key={i}>
                                <>{app.icon}</>

                            </a>
                        )
                   })}
         </nav>
         <a className='resume-btn' href="./files/CV.pdf" download>
                   <button>
                        My resume
                   </button>
         </a>
    </div>
  )
}

export default TopBar