import React from 'react'
import './Hero.css'


const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt='Hero' src={props.heroImg}/>
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.destination}</p>
        <a href="/">Travel Plan</a>
      </div>
    </>
  )
}

export default Hero