import React from 'react'
import '../styles/contact.css'
import FooterCard from './FooterCard'
import Button from './Button'
import { phone, location, message } from '../assets'


const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>Наши контакты</h1>
      <div className='contact-body'>
        <div className='contact-cards'>
          <div className='right-col'>
            <FooterCard
              icon={location}
              title='Адрес'
              bgimg='img2'
              body='Рес. Каракалпакстан, город Нукус, ул. Аллаяр Досназаров' 
            />
          </div>
          <div className='left-col'>
            <div className='left-card'>
              <FooterCard
                icon={phone}
                title='Номер телефона'
                bgimg='img3'
                body='+998 (90) 660-10-20 +998 (91) 304-25-28' 
              />
            </div>
            <div className='left-card'>
              <FooterCard
                icon={message}
                title='Электронная почта'
                bgimg='img1'
                body='info@bizler.group'
              />
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <h1 className="form-heading">Свяжитесь с нами</h1>
          <input type="text" placeholder='Напишите своё имя'/>
          <input type="text" placeholder='Напишите номер телефона' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Введите сообщение'/>
          <div className='contact-btn'>
            <Button buttonText='Отправить' width='width100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact