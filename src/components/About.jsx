import React from 'react'
import '../styles/about.css'
import Button from './Button'
import Card from './Card'
import { wallet } from '../assets'

const About = () => {
  return (
	<div className='about-container'>
    <div className="about-left">
      <h1 className='about-heading'>О нашей компании</h1>
      <h3 className='about-h3'>почему вы должны выбрать именно нас</h3>
      <p className='about-p'>Следует отметить, что семантический разбор внешних противодействий создаёт предпосылки для переосмысления внешнеэкономических политик. Господа, дальнейшее развитие различных форм деятельности играет важную роль в формировании благоприятных перспектив! Принимая во внимание показатели успешности, базовый вектор развития не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.</p>
      <div className='row-cards'>
        <div className='row-card'>
            <Card
              icon={wallet}
              title='Выгодная цена'
              num='01'
              bgcolor='bluebg'
              body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.' 
            />
          </div>
          <div className='row-card'>
            <Card
              icon={wallet}
              title='Быстрые сроки'
              num='02'
              bgcolor='graybg'
              flag={true}
              body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.'
            />
          </div>
          <div className='row-card'>
            <Card
              icon={wallet}
              title='Качественная работа'
              num='03'
              bgcolor='graybg'
              flag={true}
              body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.' 
            />
          </div>
  
      </div>
      <div className='about-btn'>
        <Button ton buttonText='Оставить заявку' width='width120' />
      </div>
    </div>
    <div className="about-right">
      <div className='left-col'>
        <div className='left-card'>
          <Card
            icon={wallet}
            title='Выгодная цена'
            num='01'
            bgcolor='bluebg'
            body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.' 
          />
        </div>
        <div className='left-card'>
          <Card
            icon={wallet}
            title='Качественная работа'
            num='03'
            bgcolor='graybg'
            flag={true}
            body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.' 
          />
        </div>
      </div>
      <div className='right-col'>
        <Card
          icon={wallet}
          title='Быстрые сроки'
          num='02'
          bgcolor='graybg'
          flag={true}
          body='Лишь некоторые особенности внутренней политики, вне зависимости от их уровня.'
        />
      </div>
    </div>
  </div>
  )
}

export default About