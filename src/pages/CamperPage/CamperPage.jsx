import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchCamperById } from '../../Redux/operations';
import css from './CamperPage.module.css';
import star from '../../assets/icons/star.svg';
import map from '../../assets/icons/Map.svg';
import Container from '../../components/Container/Container';
import BookingForm from '../../components/BookingForm/BookingForm';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectedCamper, isLoading, error } = useSelector(state => state.campers);

  // Підвантажуємо конкретного кемпера по id
  useEffect(() => {
    if (!selectedCamper || selectedCamper.id.toString() !== id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, selectedCamper, dispatch]);

  // Виклик хуків завжди, навіть якщо selectedCamper ще null
  const categories = useMemo(() => {
    if (!selectedCamper) return [];
    const cats = Object.entries(selectedCamper)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);
    if (selectedCamper.transmission === 'automatic') cats.push(selectedCamper.transmission);
    if (selectedCamper.engine === 'petrol') cats.push(selectedCamper.engine);
    return cats;
  }, [selectedCamper]);

  const details = useMemo(() => {
    if (!selectedCamper) return {};
    return {
      form: selectedCamper.form,
      length: selectedCamper.length,
      width: selectedCamper.width,
      height: selectedCamper.height,
      tank: selectedCamper.tank,
      consumption: selectedCamper.consumption
    };
  }, [selectedCamper]);

  // Ранній return для Loading/Error/No Data
  if (isLoading) return <p>Loading camper info...</p>;
  if (error) return <p>{error}</p>;
  if (!selectedCamper || Object.keys(selectedCamper).length === 0) return <p>No data available</p>;

  const camper = selectedCamper;

  return (
    <Container>
      <h3>{camper.name}</h3>
      <div className={css.second}>
        <img src={star} alt="star" className={css.logo}/>
        <p className={css.padding}>{camper.rating} ({camper.reviews?.length || 0} reviews)</p>
        <img src={map} alt="map" className={css.logo}/>
        <p>{camper.location}</p>
      </div>
      <p className={css.price}>{camper.price}&euro;</p>

      <div className={css.gallery}>
        {camper.gallery?.map((item, index) => (
          <div className={css.imgWrapper} key={index}>
            <img className={css.img} src={item.original} alt={`${camper.name} ${index + 1}`} />
          </div>
        ))}
      </div>

      <p className={css.descr}>{camper.description}</p>

      <nav className={css.nav}>
        <NavLink to="features" className={({ isActive }) => isActive ? `${css.link} ${css.activeLink}` : css.link}>Features</NavLink>
        <NavLink to="reviews" className={({ isActive }) => isActive ? `${css.link} ${css.activeLink}` : css.link}>Reviews</NavLink>
      </nav>

      <div className={css.contentWrapper}>
        <div className={css.leftColumn}>
          <Outlet context={{ categories, details, reviews: camper.reviews || [] }} />
        </div>
        <div className={css.rightColumn}>
          <BookingForm />
        </div>
      </div>
    </Container>
  );
};

export default CamperPage;