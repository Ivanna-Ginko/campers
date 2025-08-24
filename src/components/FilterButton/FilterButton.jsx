import React from 'react'
import css from '../Filters/Filters.module.css'

const FilterButton = ({ active, onClick, icon, label }) => {
  return (
    <button
    type="button"
    className={`${css.filterbtn} ${active ? css.active : ""}`}
    onClick={onClick}
  >
    <img className={css.icon} src={icon} alt={label} />
    <span>{label}</span>
  </button>
  )
}

export default FilterButton