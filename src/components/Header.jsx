import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
        <Link to='/'>
          <h1>Demo Streaming</h1>
        </Link>
        <div className='header-buttons'>
          <button>Log in</button>
          <button>Start your free trial</button>
        </div>
    </header>
  )
}

export default Header