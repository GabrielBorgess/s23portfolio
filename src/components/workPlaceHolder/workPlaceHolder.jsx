import React from 'react'
import './workPlaceHolder.scss'
import { gsap } from "gsap";

const workPlaceHolder = (props) => {

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      duration: 0.8,
      //scale: 1.1, 
      letterSpacing: '3px',
      autoRound: false
    });

    gsap.to('.ball', {
      duration: 0.7,
      scale: 6,
      borderRadius: '15%',
      rotation: 45,
      backgroundColor: '#f0ecec',
      'border': '0.6px solid black'
    });

    gsap.to(".ball", {
      rotate: 360,
      duration: 10, repeat: -1,
      ease: "none"
    })
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      //scale: 1,
      duration: 0.8,
      letterSpacing: '-1px',
      autoRound: false
    });

    gsap.to('.ball', {
      duration: 0.7,
      scale: 1,
      borderRadius: '100%',
      rotation: -45,
      backgroundColor: 'black'
    });

  };

  return (
    <div className='workHolder'>
      <p>{props.number}</p>
      <h1 onMouseEnter={onEnter} onMouseLeave={onLeave}>{props.name}</h1>
      <h3 className='date'>{props.date}</h3>
    </div>
  )
}

export default workPlaceHolder
