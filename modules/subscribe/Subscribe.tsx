import React from 'react'
import { MdEmail } from 'react-icons/md'

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <h2>Get information farm</h2>
      <p>What are you waiting for. Subscribe now! </p>
      <input type="text" placeholder="Email Here" />
      <p className="icon">
        <MdEmail />
      </p>
      <button>SUBSCRIBE</button>
    </div>
  )
}

export default Subscribe
