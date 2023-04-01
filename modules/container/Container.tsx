import React from 'react'

const Container = () => {
  return (
    <div className="Container">
      <div className="container-left">
        <img className='container-img'
          src="https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt=""
        />
      </div>
      <div className="container-right">
        <h1>The right farm equipment for all needs.</h1>
        <p>
          It really matters and then like it really doesn’t matter. What matters
          is the people who are sparked by it. And the people who are like
          offended by it, it doesn’t matter. Because it's about motivating the
          doers. Because I’m here to follow my dreams and inspire other people
          to follow their dreams, too.
        </p>
        <button>READ FULL STORY</button>
      </div>
    </div>
  )
}

export default Container
