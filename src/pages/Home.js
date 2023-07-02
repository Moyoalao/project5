import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../assets/brain.jpg"
import Button from 'react-bootstrap/Button'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`
    ,height:'100vh',marginTop:'90px',backgroundSize:'cover'}} >
      <div className='header' >
        <h1 className="fs-1 fw-bold">Know The Future</h1>
        <p className="fs-1">We Show What Is And Could Be For A.I. In Your Life</p>
            <Link to="/Info">            
              <Button variant="primary" size="lg">Get Started </Button>
            </Link>
      </div>
    </div>
  )
}

export default Home
