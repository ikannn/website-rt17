import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">RUKUN TETANGGA 17</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}