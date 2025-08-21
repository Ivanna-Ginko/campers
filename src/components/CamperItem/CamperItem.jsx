import React from 'react'
import map from '../../assets/icons/Map.svg'
import star from '../../assets/icons/star.svg'
import css from './CamperItem.module.css'
import Button from '../Button/Button'

const CamperItem = ({ img, name, price, marks, location, descr, categories  }) => {
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
          <p className={css.padding}>{marks}</p>
          <img src={map} alt="map" className={css.logo}/>
          <p>{location}</p>
        </div>
      </div>
      <p className={css.descr}>{descr}</p>
      <div className={css.categories}>{Object.entries(categories)
          .filter(([_, value]) => value === true)
          .map(([key]) => (
            <p key={key}>{key}</p>
          ))}
        </div>
        <Button>Show more</Button>
    </div>
    </li>
  )
}

export default CamperItem