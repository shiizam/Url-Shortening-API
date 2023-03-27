import { SignUpButton } from '../Buttons/SignUpButton'
import './mobile-nav-menu.css'

export const MobileNavMenu = () => {
  return (
    <div className='mobile-nav'>
      <div className="nav-links">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>

      <div className="login-signup">
        <p>Login</p>
        <SignUpButton />
      </div>
    </div>
  )
}
