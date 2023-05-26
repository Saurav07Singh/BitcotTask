import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import Movie from "../assets/Movie.jpg"
import Series from '../assets/Series.jpg'

const Home = ({name}) => {
  return (
    <>
      <Banner name={name} />
      <main className='main'>
        <Link to="/movies">
            <div className='main-content'>
              <img src={Movie} />
              <p>Movies</p>
            </div>
        </Link>
        <Link to="/series">
        <div className='main-content'>
              <img src={Series} />
              <p>Series</p>
            </div>
        </Link>  
      </main>
    </>
  )
}

export default Home