import React, { useEffect } from 'react'
import Modal from 'react-modal';
import "./SlideModal.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Loading from '../Loading/Loading';
function SlideModal({ isOpenModal, slide, setIsOpenModal, setCurSlide }) {

  return (
    <Modal isOpen={isOpenModal} className='slideModalBody'

    >
    
      <div className='imageContainer'
        style={{backgroundImage:`url(${slide?.bg})`}}
      >
        <div className='workDetail'>
          <ArrowBackIcon onClick={() => {
            setIsOpenModal(false)
            setCurSlide(null)
          }}
            sx={{position:'absolute',top:'.5em',left:'.5em', fontSize:'3em',cursor:'pointer'}}
          >Back</ArrowBackIcon>
          <h1 style={{fontFamily: 'Gloria Hallelujah, cursive' }}>{slide?.title}</h1>
          <p>{slide?.description}</p>
        </div>
        {/* <img src={slide?.bg} /> */}
        <div className='imageDisplay'>
         
          {slide?.images?.map((image) => {
            return (
              <div className='imageCard'>
                <img src={image}/>
                </div>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}

export default SlideModal