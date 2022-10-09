import React from 'react'
import Characters from './characters/Characters'
import Header from './header/Header'
import Footer from './footer/Footer'
import useFetch from '../useFetch/useFetch'
import { RotatingLines } from 'react-loader-spinner'
export default function Home({ title }) {
    const characters = useFetch('/api/characters', [])
    return (
        <div>
            <Header title={title} />
            {
                characters.error
                    ?
                    <h1>Something went wrong.</h1>
                    : characters.isLoading ?
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="66"
                            visible={true}
                        />
                        :
                        <>
                            <Characters characters={characters.data} />
                        </>
            }
            <Footer />
        </div>
    )
}