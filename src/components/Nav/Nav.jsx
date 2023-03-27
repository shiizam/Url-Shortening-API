import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/nav/logo.svg'

import './nav.css'
import { MobileNavMenu } from './MobileNavMenu'
import { SignUpButton } from '../Buttons/SignUpButton'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileNavMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  
  return  (
    <nav>
      <div className='nav-wrapper'>
        <img id='company-logo' src={logo} alt="company-logo" />
        <div className="site-sections">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className="user-account-container">
          <p>Login</p>
          <SignUpButton />
        </div>
          
        <button className="hamburger-btn" onClick={(e) => toggleMobileNavMenu()}><FontAwesomeIcon icon={faBars} size="xl" style={{color: "#b8b8b8"}} /></button>
      </div>
        {isOpen 
          ? <MobileNavMenu />
          : null
        }
    </nav>
  )
}
