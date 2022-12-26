import React from "react"
import '../App.css'
import globeLogo from '../assets/images/globe.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={globeLogo} alt='Globe Logo' className="nav--logo" />
      <h1>my travel journal.</h1>
    </nav>
  )
}