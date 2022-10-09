import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch/useFetch';
import CharacterQuote from './CharacterQuote'
import './characterQuotes.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { RotatingLines } from 'react-loader-spinner'
export default function CharacterQuotes() {
  const { autho } = useParams()
  const characterQuotes = useFetch(`/api/quote?author=${autho}`, [autho])

  return (
    <div>
      <Header title={characterQuotes.isLoading ?
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="66"
          visible={true}
        />
        :
        `${autho.split("+")[0]} ${autho.split("+")[0]}`} />
      {
        characterQuotes.error ?
          <h1>Something went wrong.</h1>
          :
          characterQuotes.isLoading ?
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="66"
              visible={true}
            />
            :
            characterQuotes.data.length === 0 ?
              'There are no quotes'
              :
              <ul className=' quotes'>
                {
                  characterQuotes.data.map((item) => {
                    return (
                      <CharacterQuote key={item.quote_id} item={item} />
                    )
                  })
                }    </ul>
      }
      <Footer />
    </div>
  )
}