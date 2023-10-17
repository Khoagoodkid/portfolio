import React from 'react'
import "./ExpCard.css"
import Reveal from '../Reveal/Reveal'
function ExpCard({ company, role, description, start_at, end_at, location, props }) {
  return (
    <div className='expcard-body'>
      {/* <Reveal> */}
        <div className='row-1'>
          <h2>{company}</h2>
          <b>{start_at} - {end_at}</b>

        </div>

      {/* </Reveal> */}
      {/* <Reveal> */}
        <div className='row-2'>
          <span>{role}</span>
          <b>{location}</b>
        </div>
      {/* </Reveal> */}
      <Reveal>
        <p>{description}</p>

      </Reveal>
      <div className='props'>
        {props?.map((prop, i) => {
          return (
            <Reveal>
              <div className='prop' key={i}>
                {prop}
              </div>

            </Reveal>
          )
        })}
      </div>

    </div>
  )
}

export default ExpCard