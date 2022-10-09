import React, { useContext } from 'react'
import { FavouritesContext } from '../context/ContextFavourite'
import Characters from './characters/Characters'
import Header from './header/Header'
import Footer from './footer/Footer'
import useFetchUrlsFavourites from '../useFetch/useFetchUrlsFavourites'
import { RotatingLines } from 'react-loader-spinner'
export default function Favourites({ title }) {
    const { urlsFavourites } = useContext(FavouritesContext)
    const { data, isLoading, error } = useFetchUrlsFavourites(urlsFavourites)

    return (
        <div>
            <Header title={title} />
            {
                error ?
                    <h1>Something went wrong.</h1>
                    :
                    isLoading ?
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="66"
                            visible={true}
                        />
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