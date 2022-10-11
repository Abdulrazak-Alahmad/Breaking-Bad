import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import useFetch from '../../../useFetch/useFetch';
import { Context } from '../../../context/Context';
import { RotatingLines } from 'react-loader-spinner';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './characterDetails.css'
export default function CharacterDetails() {
    const { characterId } = useParams()
    const character = useFetch(`/api/characters/${characterId}`, [characterId])
    const { lydiaImage, hollyImage,navigate } = useContext(Context)
    return (
        character.error
            ?
            <h1>Something went wrong.</h1>
            :
            character.isLoading ?
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="66"
                    visible={true}
                />
                :
                <div className='container'>
                    <Header />
                    {
                        <>
                            <button onClick={() => navigate(-1)}>Go back</button>
                            <div className=' imageCharacter'>
                            <h3>{character.data[0].name}</h3>
                                <img className='image' src={ // change links that do not work well,No images
                                    character.data[0].img === `https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg`
                                        ?
                                        lydiaImage
                                        :
                                        character.data[0].img === 'https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605'
                                            ?
                                            hollyImage
                                            :
                                            character.data[0].img} alt={character.data[0].name} />
                            </div>
                            <div className=' characterDetailsInfo'>
                                <div className='characterDetailsInfoChild'>
                                    <p><b>character name:</b> {character.data[0].name}</p>
                                    <p><b>character nickname:</b> {character.data[0].nickname}</p>
                                    <p><b>character portrayed:</b> {character.data[0].portrayed}</p>
                                </div>
                                <div className='characterDetailsInfoChild'>
                                    <p><b>character status</b>: {character.data[0].status}</p>
                                    <p><b>character birthday:</b> {character.data[0].birthday}</p>
                                    <p> <b> Quotes:</b> <Link className='link' to={`/api/characterQuotes/${character.data[0].name.split(" ")[0]}+${character.data[0].name.split(" ")[1]}`}>Click here</Link></p>
                                </div>
                            </div>
                        </>
                    }
                    <Footer />
                </div>
    )
}