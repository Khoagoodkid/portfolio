import React, { useState } from 'react'
import { slides } from '../../works';
import SlideModal from '../SlideModal/SlideModal';
import "./Slider.scss"
function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};
// let isOpenModal1 = false
function Slide({ slide, offset, isOpenModal, setIsOpenModal }) {

  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  const [isHover, setIsHover] = useState(false)
  const [curSlide, setCurSlide] = useState(null)
  return (
    <>
      <div className='slide'>
        <div
          ref={ref}
          className="slide"
          data-active={active}
          style={{
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
            hover:"pointer"
          }}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => {
            // isOpenModal1 = true
            setIsOpenModal(true)
            // console.log(slide)
            setCurSlide(slide)
          }}
        >
          <div
            className="slideBackground"
            style={{
              backgroundImage: `url('${slide.bg}')`
            }}
          />
          <div
            className="slideContent"
            style={{
              backgroundImage: `url('${slide.bg}')`
            }}
          >
            <div className="slideContentInner">
              <h2 className="slideTitle">{slide.title}</h2>
              {/* {isHover && <button
                onClick={() => {
                  // isOpenModal1 = true
                  setIsOpenModal(true)
                  // console.log(slide)
                  setCurSlide(slide)
                }
                }
              >View more</button>} */}
              {/* <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p> */}
            </div>
          </div>
        </div>

        {isOpenModal && curSlide && <SlideModal isOpenModal={isOpenModal} slide={curSlide} setIsOpenModal={setIsOpenModal} 
          setCurSlide = {setCurSlide}
        />}
      </div>

    </>
  );
}

function Slider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <div className="slides">
        {!isOpenModal && <button onClick={() => dispatch({ type: "NEXT" })} >‹</button>}



        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />;
        })}
        {!isOpenModal && <button onClick={() => dispatch({ type: "PREV" })} >›</button>}

      </div>


    </>

  );
}
export default Slider