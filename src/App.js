import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wisata from './components/Wisata';
import Slogan from './components/Slogan';
import AboutUs from './components/AboutUs';
import Fasilitas from './components/Fasilitas';
import Footer from './components/Footer';
import Lokasi from './components/Lokasi';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Slogan />
      <Wisata />
      <Fasilitas />
      <Lokasi/>
      <Footer />
    </div>
  );
}

export default App;
