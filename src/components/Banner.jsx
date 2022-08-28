import React from 'react'
import { tgicon } from '../assets'
import '../styles/banner.css'
import Button from './Button'

const Banner = () => {
  return (
    <div className='banner-container'>
      <h1 className='banner-heading'>Подпишитесь на наш <br/>
      <span className='blue-text'>телеграм канал</span></h1>
      <div className='banner-2'>
        <p className='banner-p'>Мы делимся полезные информации</p>
        <div className='banner-btn'>
          <Button buttonText='Подписаться' width='width100' />
        </div>
      </div>
      <img className='tg-icon' src={tgicon} alt="telegram" />
    </div>
  )
}

export default Banner