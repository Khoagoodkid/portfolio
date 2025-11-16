import React from 'react'
import "./ExpCard.css"
import Reveal from '../Reveal/Reveal'
function ExpCard({ company, role, description, start_at, end_at, location, props }) {
  return (
    <>
      <div className='expcard-body'>
        <div className='row-1'>
          <Reveal>
            <h2 style={{textAlign:'left'}}>{company}</h2>
          </Reveal>
          <Reveal>
            <b style={{ fontFamily: 'poppin' }}>{start_at} - {end_at}</b>
          </Reveal>
        </div>

        <div className='row-2'>
          <Reveal>
            <span style={{textAlign:'left'}}>{role}</span>
          </Reveal>
          <Reveal>
            <b style={{ fontFamily: 'poppin', textAlign:'right' }}>{location}</b>

          </Reveal>
        </div>
        <div className='row-3'>
          <Reveal>
            <ul>
              {description.map((d, index) => {
                return (
                  <li key={index}>{d}</li>
                )
              })}

            </ul>
          </Reveal>

        </div>

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
      <div style={{ width: '85%', height: '.1em', backgroundColor: '#ebecf3', opacity: '.3' }} />
    </>



  )
}

export default ExpCard