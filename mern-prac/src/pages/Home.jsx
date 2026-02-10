import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h3>React Hooks Examples</h3>
      <ul>
        <li>
          <Link to='/State'>useState Hook</Link>
        </li>
        <li>
          <Link to='/Effect'>useEffect Hook</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home