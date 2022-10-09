import React from 'react'
import Character from './Character'
import './characters.css'
export default function Characters({ characters }) {
  return (
    <div className='cards'>
      {
        characters.map((item) => {
          return (item[0] ? <Character key={item[0].char_id} item={item[0]} /> : <Character key={item.char_id} item={item} />)
        })
      }
    </div>
  )
}