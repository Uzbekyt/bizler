import React from 'react'
import '../styles/services.scss'
import { bgeclipse, pluscircle } from '../assets'

const Services = () => {
  return (
    <div className='bg'>
      <div className='services-container'>
        <div className="services-gradient"></div>
        <div className='services-cicrle'>
          <h1 className='services-title'>Какие <span>услуги</span> мы можем вам предложить?</h1>
          <p className='services-p'>Услуги нашей компании</p>
        </div>
        <ul class='circle-container'>
          <li className='services-flex'>
            <img className='pluscircle' src={pluscircle} alt="..." />
            <p className='services'>Создание Telegram-бота</p>
          </li>
          <li className='services-flex'>
            <img className='pluscircle' src={pluscircle} alt="..." />
            <p className='services'>Разработка веб-сайтов любой сложности</p>
          </li>
          <li className='services-flex'>
            <img className='pluscircle' src={pluscircle} alt="..." />
            <p className='services'>Создание мобильных приложений - "Под ключ"</p>
          </li>
          <li className='services-flex'>
            <img className='pluscircle' src={pluscircle} alt="..." />
            <p className='services'>Реклама/Маркетинг/CEO</p>
          </li>
          <li className='services-flex'>
            <img className='pluscircle' src={pluscircle} alt="..." />
            <p className='services'>Дизайнерские услуги</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Services

