import React from 'react';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { AdvancedStatistics } from './components/AdvancedStatistics/AdvancedStatistics';
import { BoostCard } from './components/BoostCard/BoostCard';
import { Footer } from './components/Footer/Footer';
import './index.css'


function App() {

  return (
    <main className="App">
      <Nav />
      <Header />
      <AdvancedStatistics />
      <BoostCard />
      <Footer />
    </main>
  )
}

export default App
