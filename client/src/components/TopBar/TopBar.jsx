import React from 'react'
import "./TopBar.css"
import { useSocialLinks } from '../../hooks/useSocialLinks';

function TopBar() {
  const socials = useSocialLinks();

  return (
    <div className='topbar-body'>
        <nav className="socials">   
                   {socials.map((app,i) => {
                        const Icon = app.Icon;
                        return (
                            <a className='app' 
                            onClick={()=>window.open(app.link)}
                            key={i}>
                                {Icon ? <Icon className='icon' /> : null}

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