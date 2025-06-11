import React from 'react';

export default function AboutUs() {
  return (
    <section className="section about-section" id="about">
      <h3 className="section-title">About Us</h3>
      <div className="about-scroll-container">
        <div className="about-card">
          <h4>Profil Singkat</h4>
          <p>RT. 17 berada di Kelurahan Karang Joang, Balikpapan Utara. Wilayah ini memiliki komunitas aktif dan guyub.</p>
        </div>
        <div className="about-card">
          <h4>Visi</h4>
          <p>Mewujudkan lingkungan RT yang aman, nyaman, unggul, dan harmonis dalam kebersamaan warganya.</p>
        </div>
        <div className="about-card">
          <h4>Misi</h4>
          <p>1. Meningkatkan kerjasama antar warga. <br />2. Menyediakan fasilitas umum. <br />3. Mendorong kegiatan sosial dan gotong royong.</p>
        </div>
        <div className="about-card">
          <h4>Sejarah</h4>
          <p>RT. 17 berdiri sejak tahun 1997 dan berkembang menjadi lingkungan aktif dalam pembangunan masyarakat.</p>
        </div>
      </div>
    </section>
  );
}
