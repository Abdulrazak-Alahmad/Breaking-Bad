import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { RotatingLines } from 'react-loader-spinner'
import Characters from './characters/Characters'
import Header from './header/Header'
import Footer from './footer/Footer'
import useFetchUrlsFavourites from '../useFetch/useFetchUrlsFavourites'

export default function Favourites() {
    const { urlsFavourites } = useContext(Context)
    const { data, isLoading, error } = useFetchUrlsFavourites(urlsFavourites)

    return (
        <div>
            <Header />
            {
                error ?
                    <h1>Something went wrong.</h1>
                    :
                    isLoading ?
                        <div className='loading'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="66"
                                visible={true}
                            />
                        </div>
                        :
                        <>
                            {
                                data.length > 0 ?
                                    (
                                        <Characters characters={data} />
                                    )
                                    :
                                    (
                                        <p>You haven't chosen any favourites yet!</p>
                                    )
                            }
                        </>
            }
            <Footer />
        </div>
    )
}