import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const Context = createContext()
export const ContextProvider = ({ children }) => {
    const [lydiaImage, setLydiaImage] = useState('https://s.wsj.net/public/resources/images/OB-YQ877_laura_EV_20130824224456.jpg')//change images' links that don't work for API 
    const [hollyImage, setHollyImage] = useState('https://i.pinimg.com/originals/2f/05/61/2f0561e02700247edc7cdd9ca703e349.jpg')//change images' links that don't work for API 
    const [favouritesIds, setFavouritesIds] = useState([])
    const navigate = useNavigate()
    const [urlsFavourites, setUrlsFavourites] = useState(
        favouritesIds.map((char_id) => `/api/characters/${char_id}`)
    );

    useEffect(() => {
        setUrlsFavourites(
            favouritesIds.map((char_id) => `/api/characters/${char_id}`)
        );
    }, [favouritesIds]);

    const addFavouriteId = (char_id) => {
        setFavouritesIds((prevState) => [...prevState, char_id]);
    }
    const deleteFavouriteId = (char_id) => {
        setFavouritesIds(favouritesIds.filter((item) => item !== char_id));
    };

    const value = { favouritesIds, addFavouriteId, deleteFavouriteId, urlsFavourites, lydiaImage, hollyImage,navigate }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}