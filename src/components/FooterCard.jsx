import React from 'react'
import '../styles/footercard.css'
import { line } from '../assets'

const FooterCard = ({icon, title, body, bgimg}) => {
  return (
	<div className={`footercard-container ${bgimg}`}>
    <div className='footercard-flag'></div>
    <img className='footercard-icon' src={icon} alt="icon" />
    <h3 className='footercard-title'>{title}</h3>
    <img className='footercard-line' src={line} alt="line" />
    <p className='footercard-p'>{body}</p>
  </div>
  )
}

export default FooterCard