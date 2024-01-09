import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='main-footer mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <h4>Links</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                            <li><Link to='/tutition'>Tuition</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h4>Links</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                            <li><Link to='/tutition'>Tuition</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h4>Links</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                            <li><Link to='/tutition'>Tuition</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
