import React from 'react';
import mapImg from '../assets/map-rt17.jpg';

export default function Lokasi() {
  return (
    <section className="section lokasi-section" id="lokasi">
      <h3 className="section-title center-title">Lokasi RT. 17 Karang Joang</h3>
      <div className="lokasi-container">
        <div className="lokasi-map">
          <img src={mapImg} alt="Peta RT 17 Karang Joang" />
        </div>
        <div className="lokasi-info">
          <p>
            RT. 17 Karang Joang,<br />
            Balikpapan Utara,<br />
            Kota Balikpapan,<br />
            Kalimantan Timur.
          </p>
        </div>
      </div>
    </section>
  );
}
