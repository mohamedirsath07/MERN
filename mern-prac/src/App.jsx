import React from 'react'
import User from './components/User'

const App = () => {
  return (
    <>
      <User name="Irsath" department="AIML"
      Skills={["HTML","CSS","JS"]} 
      Projects={["Annual Report Portal", "CareerCompass", "StyleRecommender"]}/>
    </>
  )
}

export default App
