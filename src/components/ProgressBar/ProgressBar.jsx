import React from 'react'
import { useEffect,useState } from 'react'
import "./ProgressBar.css"
function ProgressBar({skill}) {

  return (
    <div className='barBody' style={{ boxShadow:`${skill.boxShadow} 0px 5px 15px`}}>
       <div className='percent' style={{'--clr':`${skill.color}`,'--num':`${skill.percent}`}}>
        <div className="dot"></div>
        <svg>
          <circle cx = "70" cy="70" r = "70" ></circle>
          <circle cx = "70" cy="70" r = "70"  ></circle>
        </svg>
        <div className='text'>
          <h2>{skill.percent} <span>%</span></h2>
          <p>{skill.name}</p>
        </div>
       </div>
    </div>
  )
}

export default ProgressBar