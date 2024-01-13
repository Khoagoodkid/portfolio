import React from 'react'
import "./ExpCard.css"
import Reveal from '../Reveal/Reveal'
function ExpCard({ company, role, description, start_at, end_at, location, props }) {
  return (
    <>
      <div className='expcard-body'>
        <div className='row-1'>
          <Reveal>
            <h2>{company}</h2>
          </Reveal>
          <Reveal>
            <b>{start_at} - {end_at}</b>
          </Reveal>
        </div>

        <div className='row-2'>
          <Reveal>
            <span>{role}</span>
          </Reveal>
          <Reveal>
            <b>{location}</b>

          </Reveal>
        </div>
        {/* <Reveal> */}
        <p>
          <Reveal>
            {description}
          </Reveal>
        </p>

        {/* </Reveal> */}
        <div className='props'>
          {props?.map((prop, i) => {
            return (
              <Reveal key={i}>
                <div className='prop' key={i}>
                  {prop}
                </div>

              </Reveal>
            )
          })}
        </div>
      </div>
      <div style={{ width: '85%', height:'.1em', backgroundColor:'#ebecf3',opacity:'.3'}} />
    </>



  )
}

export default ExpCard