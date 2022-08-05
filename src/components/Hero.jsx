import React from 'react'
import useGlobalContext from '../context'

function Hero() {

  const {closeSubmenu} = useGlobalContext()

  return (
    <section> 
      <div className="hero-container" onMouseOver={closeSubmenu}>
        <div className="left">
          <h1 className="hero-title">
          Payments infrastructure
  for the internet
          </h1>
          <p className="hero-info">
          Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
          </p>
          <button className="hero-btn">
            Start now
          </button>
        </div>
        <div className="right">
          <div className="right-img"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero