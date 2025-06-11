import React from 'react';
import beruang from '../assets/beruang.jpg'; // import dari src/assets

export default function Slogan() {
  return (
    <section className="slogan-section">
      <div className="slogan-content">
        <div className="slogan-text">
          <div className="slogan-line"></div>
          <h3>Satu hati, satu tujuan<br />RT. 17 unggul dan harmonis.</h3>
        </div>
        <div className="slogan-image">
          <img src={beruang} alt="Beruang" />
        </div>
      </div>
    </section>
  );
}
