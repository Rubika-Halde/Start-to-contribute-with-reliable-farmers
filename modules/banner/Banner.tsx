import React from 'react'
import { FaHome, FaTractor } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-top">
        <h1>Start to contribute with reliable farmers</h1>
        <p>we help your healthier.Higher quality, crops.it continuously.</p>
      </div>
      <div className="banner-footer">
        <div className="banner-left">
          <div className="home_icon">
            <FaHome />
          </div>
          <h2>80,280+</h2>
          <p>Beginner have joined</p>
          <button className="beginner_btn">JOIN AS A BEGINNER</button>
        </div>
        <div className="banner-left">
          <div className="home_icon">
            <FaTractor />
          </div>
          <h2>8,280+</h2>
          <p>Professional mentors</p>
          <button className="mentor_btn">JOIN AS A MENTOR</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
