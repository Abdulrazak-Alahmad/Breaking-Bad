import React from 'react'
import './characterQuotes.css'
export default function CharacterQuote({ item }) {
    return (
        <li>
            <p className='singleQuote'>{item.quote}</p>
        </li>
    )
}