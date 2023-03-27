import './header.css'

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className='img-header'>
      </div>

      <div className="header-body">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights
          on how your links are performing
        </p>
        <div className='btn-wrapper'>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>

  )
}
