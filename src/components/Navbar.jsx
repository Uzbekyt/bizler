import React, {useState} from 'react'
import '../styles/navbar.scss'
import { close, menu, menuicon } from '../assets'

const navlinks = ['Контакты', 'Услуги', 'О нас' ]
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className='nav-top'>
        <div className="nav-logo">
          <h1>Bizler Group</h1>
        </div>
        <div className="nav-number">
          <h1>(90) 660-10-20</h1>
        </div>
        <div className='nav-mob-menu'>
          <img onClick={() => setMenu(true)} className='menu-icon' src={menuicon} alt="menu" />
          {menu && (
            <div>
              <img onClick={() => setMenu(false)} className='close-icon' src={close} alt="menu" />
              <ul>
                {navlinks.map((link, index) => (
                  <li key={index} className='menu-link'>
                    <a>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-menu">
          {navlinks.map((link, index) => (
            <div key={index} className='nav-link'>
              <h5>{link}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar