import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import './characters.css'
export default function Character({ item }) {
  const { name, img, char_id } = item
  const { favouritesIds, addFavouriteId, deleteFavouriteId, lydiaImage, hollyImage } = useContext(Context)

  return (
    <div className='character__item'>
      <Link to={`/api/characters/${char_id}`}  >
        <div className='image '>
          {/* change links that do not work well,No images */}
          <img src={img === `https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg`
            ? lydiaImage
            : img === 'https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605'
              ? hollyImage
              : img} alt={name} />
        </div>
      </Link>
      <div className='character_item_info'>
        <h4 className='character--title '>{name}</h4 >
        <button
          onClick={
            favouritesIds.some((item) => item === char_id)
              ? () => deleteFavouriteId(char_id)
              : () => addFavouriteId(char_id)
          }
        >
          {favouritesIds.some((item) => item === char_id) ? (
            <MdFavorite />
          ) : (
            <MdOutlineFavoriteBorder />
          )}
        </button>
      </div>
    </div>
  )
}