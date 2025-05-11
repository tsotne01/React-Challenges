import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Hello</h1>
        <NavLink to="/task1">Task 1</NavLink>
    </div>
  )
}

export default Home