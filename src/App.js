import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import "./styles.css";

function App() {
  return (
    <div>
      <div className='background'>
      <Navbar />
      <HeroSection />
      </div>
      <NewArrivals />
    </div>
  );
}

export default App;
