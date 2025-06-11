import React from 'react';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <h2>SELAMAT DATANG DI WEBSITE RT. 17</h2>
    </section>
  );
}