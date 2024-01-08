import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='contianer-fluid'>
    <p>Navigation</p>
    <ul> 
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/tutition'>Tuition</Link></li>
        <li><Link to='/location'>Location</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
      
    </div>
  )
}

export default Footer
