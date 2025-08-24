import React from 'react'
import map from '../../assets/icons/Map.svg'
import star from '../../assets/icons/star.svg'
import css from './CamperItem.module.css'
import Features from '../Features/Features'
import AppLink from '../AppLink/Applink'
import heart from '../../assets/icons/heart.png'
import redheart from '../../assets/icons/red-heart.svg'
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../Redux/camperSlice";


const CamperItem = ({ id, img, name, price, marks, location, descr, categories, reviews, }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.campers.isFavourite);

  const isFavourite = favourites.includes(id);

  return (
    <li className={css.bigbox}>
    <img src={img} alt="star" className={css.img}/>
    <div className={css.smallbox}>
      <div className={css.element}>
        <div className={css.first}>
          <h3>{name}</h3>
          <div className={css.rightspace}>
              <p className={css.price}>{price}&euro;</p>
              <button
                onClick={() => dispatch(toggleFavourite(id))}
                className={css.favoriteBtn}
              >
                <img src={isFavourite ? redheart : heart} className={css.icon} />
              </button>
          </div>
        </div>
        <div className={css.second}>
          <img src={star} alt="star" className={css.logo}/>
          <p className={css.padding}>{marks}({reviews.length}reviews)</p>
          <img src={map} alt="map" className={css.logo}/>
          <p>{location}</p>
        </div>
      </div>
      <p className={css.descr}>{descr}</p>
        <Features categories={ categories }/>
        <AppLink to={`/catalog/${id}`}>Show more</AppLink>
    </div>
    </li>
  )
}

export default CamperItem