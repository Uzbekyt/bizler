import React from 'react'
import '../styles/card.css'
import { line } from '../assets'

const Card = ({icon, title, body, num, bgcolor, flag}) => {
  return (
	<div className={`card-container ${bgcolor}`}>
    {flag && (<div className='card-flag'></div>)}
    <h1 className='card-num'>{num}</h1>
    <img className='card-icon' src={icon} alt="icon" />
    <h3 className='card-title'>{title}</h3>
    <img className='card-line' src={line} alt="line" />
    <p className='card-body'>{body}</p>
  </div>
  )
}

export default Card