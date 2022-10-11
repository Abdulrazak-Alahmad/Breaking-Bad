import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import { RotatingLines } from 'react-loader-spinner'
import './characterQuotes.css'
import Header from '../header/Header';
import useFetch from '../../useFetch/useFetch';
import Footer from '../footer/Footer';
import CharacterQuote from './CharacterQuote'

export default function CharacterQuotes() {
  const { autho } = useParams()
  const { navigate } = useContext(Context)
  const characterQuotes = useFetch(`/api/quote?author=${autho}`, [autho])
  return (
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
        <div>
          <Header />
          {
            characterQuotes.data.length === 0 ?
              'There are no quotes'
              :
              <>
                <div className='author-goBack-Nav'>
                  <button onClick={() => navigate(-1)}>Go back</button>
                  <h3>{characterQuotes.data[0].author}</h3>
                </div>
                <ul className='quotes'>
                  {
                    characterQuotes.data.map((item) => {
                      return (
                        <CharacterQuote key={item.quote_id} item={item} />
                      )
                    })
                  }
                </ul>
              </>
          }
          <Footer />
        </div>
  )
}