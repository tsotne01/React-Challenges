import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Hello</h1>
        <NavLink to="/easy1">Task 1</NavLink>
        <NavLink to="/easy2">Task 2</NavLink>
        <NavLink to="/easy3">Task 3</NavLink>

    </div>
  )
}

export default Home