import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Series from './components/Series'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home name="Titles"/>}/>
        <Route path="/movies" element={<Movies name="Movies"/>}/>
        <Route path="/series" element={<Series name="Series"/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
