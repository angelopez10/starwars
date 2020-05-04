import React from 'react'
import Logo from './starwars-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark flex-column">
                <Link to='/'><img src={Logo} alt="..." /></Link>
                <div className="btn-group " role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary col-1 navButton"></button>
                    <button type="button" className="btn btn-secondary navButton"><Link className='text-link' to='/characters'>CHARACTERS</Link></button>
                    <button type="button" className="btn btn-secondary navButton"><Link className='text-link' to='/planets'>PLANETS</Link></button>
                    <button type="button" className="btn btn-secondary navButton"><Link className='text-link' to='/vehicles'>VEHICLES</Link></button>
                    <button type="button" className="btn btn-secondary col-1 navButton"></button>
                </div>
            </nav>
        </div>
    )
}
