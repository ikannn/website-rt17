import React from 'react';
import wisata1 from '../assets/wisata1.jpg';
import wisata2 from '../assets/wisata2.jpg';
import wisata3 from '../assets/wisata3.jpg'; // coming soon

export default function Wisata() {
  return (
    <section className="section wisata-section" id="wisata">
      <h3 className="section-title center-title">Tempat Wisata di RT 17</h3>
      <div className="wisata-list-container">
        <div className="wisata-item">
          <img src={wisata1} alt="Tanjung Gading" className="wisata-list-img" />
          <h4>Tanjung Gading</h4>
        </div>
        <div className="wisata-item coming-soon">
          <img src={wisata2} alt="Coming Soon" className="wisata-list-img" />
          <h4>Coming Soon</h4>
        </div>
        <div className="wisata-item coming-soon">
          <img src={wisata3} alt="Coming Soon" className="wisata-list-img" />
          <h4>Coming Soon</h4>
        </div>
      </div>
    </section>
  );
}
