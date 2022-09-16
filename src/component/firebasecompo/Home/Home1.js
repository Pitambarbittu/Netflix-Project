import React from 'react'
import {Link} from 'react-router-dom'

function Home1() {
  return (
    <div style={{color:'white'}}> 
    <div>
      <h1>
         <Link to="/login">Login</Link>
      </h1>
      <br />
      <h1>
      <Link to="/">Signup</Link>
      </h1>
    </div>
    </div>
  )
}

export default Home1;