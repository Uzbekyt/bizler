import React from 'react'
import '../styles/works.css'
import Button from './Button'
import { work1, work2, work3, work4 } from '../assets'

const works = ['Все', 'Сайт', 'Telegram-бот', 'Приложение', 'UX/UI Дизайн', 'Дизайн интерьера']

const Works = () => {
  return (
    <div className='works-container'>
      <h1 className='works-heading'>Наши кейсы</h1>
      <div className='works-link'>
        {works.map((work, index) =>(
          <h3 className='work-link' key={index}>{work}</h3>
        ))}
      </div>
      <div className='works-box'>
        <div className='works-box1'>
          <img className='work1' src={work4} alt="" />
          <img className='work2' src={work2} alt="" />
        </div>
        <div className='works-box2'>
          <img className='work3' src={work3} alt="" />
        </div>
        <div className='works-box3'>
          <img className='work4' src={work1} alt="" />
        </div>
      </div>
      <div className='works-btn'>
        <Button buttonText='смотреть все' width='width100' />
      </div>
    </div>
  )
}

export default Works