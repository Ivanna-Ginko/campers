import React from 'react'
import map from '../../assets/icons/Map.svg'
import star from '../../assets/icons/star.svg'
import css from './CamperItem.module.css'
import Features from '../Features/Features'
import AppLink from '../AppLink/Applink'

const CamperItem = ({ id, img, name, price, marks, location, descr, categories, reviews, }) => {
  return (
    <li className={css.bigbox}>
    <img src={img} alt="star" className={css.img}/>
    <div className={css.smallbox}>
      <div className={css.element}>
        <div className={css.first}>
          <h3>{name}</h3>
          <p className={css.price}>{price}&euro;</p>
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