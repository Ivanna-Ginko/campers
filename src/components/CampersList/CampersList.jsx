import React from 'react'
import { useEffect, useState } from "react";
import css from './CamperList.module.css'

import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from '../../Redux/operations';
import CamperItem from '../CamperItem/CamperItem';
import Button from '../Button/Button';

const CampersList = () => {

  const dispatch = useDispatch();
  const { campers, isLoading, error } = useSelector((state) => state);
    const filters = useSelector((state) => state.filters); 

  //console.log(campers.campers.items.length); //довжина масиву-відповіді
  const [visibleCount, setVisibleCount] = useState(6);

useEffect(() => {
    dispatch(fetchCampers());
    setVisibleCount(6);
  }, [dispatch, filters]);

const items = Array.isArray(campers?.campers?.items) ? campers.campers.items : [];

if (isLoading) return <p>Loading campers...</p>;
if (error) return <p>{error}</p>;
if (!items || items.length === 0) return <p>No campers found</p>;

const visibleItems = items.slice(0, visibleCount);

  return (
    <div>
      
      <ul>
         {Array.isArray(items) && visibleItems.map(camper => { 
           const categories = Object.entries(camper)
            .filter(([_, value]) => value === true) 
            .map(([key]) => key); 
            if (camper.transmission === 'automatic') {
              categories.push(camper.transmission);
            }
            if (camper.engine === 'petrol') {
              categories.push(camper.engine);
            }
            
          return (
        <CamperItem 
        key={camper.id}
        id = {camper.id}
        img={camper.gallery[0]?.original || ""} 
        name={camper.name || ""}
        price={camper.price || 0}
        marks={camper.rating || 0}
        location={camper.location || ""}
        descr={camper.description || ""}
        categories={categories}
        reviews={camper.reviews || []}
        
        
        />
          )}
         )};
      </ul>

      <div className={css.buttonWrapper}>
      {visibleCount < items.length && (
        <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
          Load more
        </Button>
      )}
      </div>
    </div>
  )
}

export default CampersList