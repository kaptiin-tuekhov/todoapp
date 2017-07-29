import React from 'react'
import {Link} from '../router/'

export const Footer = () =>
  <div className='Footer'>
    <Link to='/'>All</Link>
    <Link to='/pending'>Pending</Link>
    <Link to='/completed'>Completed</Link>
  </div>
