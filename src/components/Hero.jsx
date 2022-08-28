import React from 'react'
import '../styles/hero.css'
import Button from './Button'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-gradient'>
        <div className="gradient"></div>
          <div className='hero-main'>
            <h1 className='hero-heading'>Разработка веб-сайтов и мобильных приложений</h1>
            <p className='hero-p'>Современные технологии, сильная команда, доступные цены для каждого бизнеса</p>
            <div className='hero-btn'>
              <Button buttonText='Наше портфолио' width='width120' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero