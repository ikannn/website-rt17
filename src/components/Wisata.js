import React from 'react';
import wisata1 from '../assets/wisata1.jpg';
import wisata2 from '../assets/wisata2.jpg';

export default function Wisata() {
  return (
    <section className="section" id="wisata">
      <div className="wisata-grid">
        <div className="wisata-left">
          <img src={wisata1} alt="Tanjung Gading" className="wisata-img stacked-img" />
          <img src={wisata2} alt="Pengunjung" className="wisata-img stacked-img" />
        </div>
        <div className="wisata-right">
          <h3 className="section-title left-align">Wisata Tanjung Gading</h3>
          <p>
            Wisata Tanjung Gading merupakan tempat wisata yang terletak di kawasan RT. 17 Kelurahan Karang Joang
            Balikpapan Utara. Wisata ini menyajikan pemandangan pinggir waduk Balikpapan yang indah dengan
            dilindungi pepohonan yang asri dan sejuk.
          </p>
          <button className="btn-link">
            Lihat Selengkapnya&nbsp;
            <span>&#x2197;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
