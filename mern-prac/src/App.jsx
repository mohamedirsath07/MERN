import React from 'react'
import User from './components/User'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
      <User name="Irsath" department="AIML"
      Skills={["HTML","CSS","JS"]} 
      Projects={["Annual Report Portal", "CareerCompass", "StyleRecommender"]}/>
    </>
  )
}

export default App
