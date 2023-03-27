import logo from '../../assets/footer/footer-logo.svg'
import facebook from '../../assets/footer/icon-facebook.svg'
import instagram from '../../assets/footer/icon-instagram.svg'
import pinterest from '../../assets/footer/icon-pinterest.svg'
import twitter from '../../assets/footer/icon-twitter.svg'


import './footer.css'



export const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="" />

      <div className="feature">
        <h1>Features</h1>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div className="resources">
        <h1>Resources</h1>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      
      <div className="company">
        <h1>Company</h1>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div className="social-wrapper">
        <img src={facebook} alt="facebook-logo" />
        <img src={twitter} alt="twitter-logo" />
        <img src={pinterest} alt="pinterest-logo" />
        <img src={instagram} alt="instagram-logo" />
      </div>
    </div>
  )
}
