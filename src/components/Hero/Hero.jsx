import React from 'react'
import css from './Hero.module.css'
import Container from '../Container/Container'

const Hero = () => {
  return (
    <div className={css.hero_background}>
      <Container>
      <div className={css.flex}>
        <div className={css.hero}>
          <h1>Campers of your dreams</h1>
          <p className={css.text}>You can find everything you want in our catalog</p>
          <button className={css.button}>View Now</button>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Hero