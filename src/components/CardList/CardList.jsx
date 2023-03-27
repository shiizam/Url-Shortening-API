import brand from '../../assets/cards/icon-brand-recognition.svg'
import detail from '../../assets/cards/icon-detailed-records.svg'
import customiziable from '../../assets/cards/icon-fully-customizable.svg'


import './card-list.css'

export const CardList = () => {
  return (
    <div className='card-list-container'>
      <div className="blue-bar"></div>
      <div className="card-wrapper" id='brand-card'>
        <div className="card-img-bg">
          <img className='card-img' src={brand} alt="brand-recoginition-img" />
        </div>
        <div className='card'>
          <h1 className='card-title'>Brand Recognition</h1>
          <p className='card-body'>
            Boost your brand recognition with each click. Generic links don't mean a thing.
            Branded links help instil confidence in your content.
          </p>
        </div>
      </div>

      <div className="card-wrapper" id='detail-card'>
        <div className="card-img-bg">
          <img className='card-img' src={detail} alt="detail-records-img" />
        </div>
        <div className='card'>
          <h1 className='card-title'>Detail Records</h1>
          <p className='card-body'>
            Gain insight into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>

      <div className="card-wrapper" id='custom-card'>
        <div className="card-img-bg">
          <img className='card-img' src={customiziable} alt="fully-customiziable-img" />
        </div>
        <div className='card' >
          <h1 className='card-title'>Fully Customizable</h1>
          <p className='card-body'>
            Improve brand awareness and content discoveerability through customiziable links,
            supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  )
}
