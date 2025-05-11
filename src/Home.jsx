import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div className='flex flex-wrap gap-7'>
        <div>
          <NavLink to="/easy1">Task 1</NavLink>
        </div>
        <div>
          <NavLink to="/easy2">Task 2</NavLink>
        </div>
        <div>
          <NavLink to="/easy3">Task 3</NavLink>

        </div>
        <div>
          <NavLink to="/easy4">Task 4</NavLink>
        </div>
        <div>
          <NavLink to="/easy5">Task 5</NavLink>
        </div>
        <div>
          <NavLink to="/easy6">Task 6</NavLink>
        </div>
      </div>


    </div>
  )
}

export default Home