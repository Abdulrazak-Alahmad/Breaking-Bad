import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default function Header() {
    return (
        <div className='header'>
            <div>
                <Link className='headerLogo' to="/"><h1 >Breaking Bad</h1></Link>
            </div>
            <div className='headerNav'>
                <Link className='navFavourites' to="/favourites">Favourites</Link>
            </div>
        </div>
    )
}