import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
	  <div className='footer-container'>
      <div className='footer-gradient'></div>
      <h6 className='footer-copy'>Bizler Group. Все права защищены. 2022</h6>
      <div className='footer-right-box'>
        <h3 className='box-heading'>Bizler Group</h3>
        <p className='box-p'>Ваш партнер в мире технологий</p>
      </div>
    </div>
  )
}

export default Footer