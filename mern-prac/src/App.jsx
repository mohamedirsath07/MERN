import React from 'react'
import User from './components/User'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import State from './hooks/state' 
import Effect from './hooks/Effect'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/State' element={<State/>}></Route>
      <Route path='/Effect' element={<Effect/>}></Route>
    </Routes>
      <User name="Irsath" department="AIML"
      Skills={["HTML","CSS","JS"]} 
      Projects={["Annual Report Portal", "CareerCompass", "StyleRecommender"]}/>
    </>
  )
}

export default App
