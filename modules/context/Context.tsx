import React from 'react'
import { CiMoneyCheck1 } from 'react-icons/ci'
import { RiStore2Line } from 'react-icons/ri'

const Context = () => {
  return (
    <div className="Context">
      <div className="Context-left">
        <img
          className="Context-img"
          src="https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div className="Context-right">
        <h1>Everyone consume processed products from farmers.</h1>
        <p>
          Join the amazing farming that we provide for you and just for you.
        </p>

        <div className="context-btn">
          <div className="context-bottom">
            <div className="context-bottom-icon">
              <CiMoneyCheck1 />
            </div>
            <div className="context-icon-text">
              <p className="context-bottom-para">Basic on need people</p>
              <h3>10,000 +</h3>
            </div>
          </div>
          <div className="context-bottom">
            <div className="context-bottom-icon">
              <RiStore2Line />
            </div>
            <div className="context-icon-text">
              <p className="context-bottom-para">Score listing people</p>
              <h3>4.8</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Context
