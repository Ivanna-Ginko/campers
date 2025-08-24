import React from 'react'
import { useOutletContext } from 'react-router-dom';
import css from './Features.module.css'
import AcIcon from '../../assets/icons/AC.svg'
import bathroomIcon from '../../assets/icons/Bathroom.svg'
import automaticIcon from '../../assets/icons/automatic.svg'
import cupIcon from '../../assets/icons/cup-hot.svg'
import fridgeIcon from '../../assets/icons/fridge.png'
import gasIcon from '../../assets/icons/gas.png'
import microwaveIcon from '../../assets/icons/microwave.png'
import petrolIcon from '../../assets/icons/Petrol.png'
import radioIcon from '../../assets/icons/radio.svg'
import waterIcon from '../../assets/icons/water.png'
import TvIcon from '../../assets/icons/TvIcon.png'

const iconMap = {
  AC: AcIcon,
  bathroom: bathroomIcon,
  petrol: petrolIcon,
  radio: radioIcon,
  microwave: microwaveIcon,
  water: waterIcon,
  gas: gasIcon,
  refrigerator: fridgeIcon,
  kitchen: cupIcon,
  automatic: automaticIcon,
  TV: TvIcon
};

const Features = ({ categories: propCategories }) => {

  const outletContext = useOutletContext();
  const categories = propCategories || outletContext?.categories || [];
  const details = outletContext?.details || null;

  return (
  <div className={`${details ? css.bigbox : ""}`}>
    <ul className={css.list}>
      {categories.map((item) => {
        const Icon = iconMap[item];
        return (
          <li className={css.categories} key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {Icon && <img src={Icon} alt={item} />}
            <span className={css.categ}>{item}</span>
          </li>
        );
      })}
    </ul>
    {details && (
      <div className={css.details}>
        <h3 className={css.title}>Vehicle details</h3>
        <div className={css.table}>
          {Object.entries(details).map(([key, value]) => (
            <p className={css.text} key={key}>
              <span>{key}</span> <span>{value}</span>
            </p>
          ))}
        </div>
      </div>
    )}
  </div>  
  )
}

export default Features