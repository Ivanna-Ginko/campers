import React from 'react'
import { useSelector } from "react-redux";
import { useParams,  NavLink, Outlet} from "react-router-dom";
import css from './CamperPage.module.css'
import star from '../../assets/icons/star.svg'
import map from '../../assets/icons/Map.svg'
import Container from '../../components/Container/Container';
import BookingForm from '../../components/BookingForm/BookingForm'

const CamperPage = () => {

const { campers, isLoading, error } = useSelector((state) => state.campers);
const { id } = useParams();
console.log (campers.items)
console.log (id)

const camper = campers.items.find(camper => camper.id.toString() === id);
console.log (camper)
const categories = Object.entries(camper)
    .filter(([_, value]) => value === true) 
    .map(([key]) => key); 
    if (camper.transmission === 'automatic') {
       categories.push(camper.transmission);
    }
    if (camper.engine === 'petrol') {
      categories.push(camper.engine);
    }
    console.log (categories)
const { form, length, width, height, tank, consumption } = camper;
const details = { form, length, width, height, tank, consumption };


console.log(details);


  if (isLoading) return <p>Loading info...</p>;
  if (error) return <p>{error}</p>;
  if (!camper) return <p>Camper not found</p>; 




  return (
    <div>
      <Container>
      <h3>{camper.name}</h3>
      <div className={css.second}>
        <img src={star} alt="star" className={css.logo}/>
        <p className={css.padding}>{camper.rating}({camper.reviews.length}reviews)</p>
        <img src={map} alt="map" className={css.logo}/>
        <p>{camper.location}</p>
      </div>
      <p className={css.price}>{camper.price}&euro;</p>
      <div className={css.gallery}>
        {camper.gallery.map((item, index) => (
          <img className={css.img}
            key={index} 
            src={item.original} 
            alt={`${camper.name} ${index + 1}`} 
          />
        ))}
      </div>
      <p className={css.descr}>{camper.description}</p>

        <nav className={css.nav}>
        <NavLink to="features" 
        className={({ isActive }) => isActive ? `${css.link} ${css.activeLink}` : css.link}
        >Features</NavLink>
        <NavLink to="reviews" 
        className={({ isActive }) => isActive ? `${css.link} ${css.activeLink}` : css.link}
        >Reviews</NavLink>
        </nav>

        <div className={css.contentWrapper}>
          <div className={css.leftColumn}>
            <Outlet context={{ categories, details, reviews: camper.reviews }} />
          </div>
          <div className={css.rightColumn}>
            <BookingForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CamperPage


