import React from 'react';
import posyandu from '../assets/posyandu.jpg';
import masjid from '../assets/masjid.jpg';
import lapangan from '../assets/lapangan.jpg';

export default function Fasilitas() {
  return (
    <section className="section fasilitas-section" id="fasilitas">
      <h3 className="section-title center-title white-title">Fasilitas</h3>
      <div className="fasilitas-container">
        <div className="fasilitas-item">
          <img src={posyandu} alt="Posyandu" className="fasilitas-img" />
          <h4>Posyandu</h4>
        </div>
        <div className="fasilitas-item">
          <img src={masjid} alt="Masjid" className="fasilitas-img" />
          <h4>Masjid</h4>
        </div>
        <div className="fasilitas-item">
          <img src={lapangan} alt="Lapangan Voli" className="fasilitas-img" />
          <h4>Lapangan Voli</h4>
        </div>
      </div>
    </section>
  );
}
