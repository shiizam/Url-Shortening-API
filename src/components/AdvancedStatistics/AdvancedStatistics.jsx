import { ShortenURL } from '../ShortenURL/ShortenURL'
import { CardList } from '../CardList/CardList'


import './advanced-statistics.css'

export const AdvancedStatistics = () => {
  return (
    <div className='advanced-statistics-container'>

      <ShortenURL />

      <div className="advanced-header">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      
      <CardList />

    </div>
  )
}
