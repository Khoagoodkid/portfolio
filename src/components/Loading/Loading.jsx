import React,{useEffect,useState} from 'react'
import "./Loading.css"
import { BarLoader } from 'react-spinners'
import Khoa from '../../assets/Khoa.png'
function Loading() { 
    const [animation,setAnimation]= useState("-100%")
    useEffect(() => {
        setAnimation(0)
        setTimeout(() => {
            setAnimation("100%")
        },[3000])
    },[])
  return (
    <div className='loadingBody' style={{transform:`translateX(${animation})`}}>
        <img src={Khoa}/>
        <h2>Khoa is thinking ...</h2>
        <BarLoader height={'4'} width='30%' color='#0bd3b4'
            speedMultiplier='1'
        />
    </div>
  )
}

export default Loading