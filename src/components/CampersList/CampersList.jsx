import React from 'react'
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCampers } from '../../Redux/operations';
import CamperItem from '../CamperItem/CamperItem';

const CampersList = () => {

  const dispatch = useDispatch();
  const { campers, isLoading, error } = useSelector((state) => state.campers);
  console.log(campers.items)

useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);


  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      
      <ul>
         {Array.isArray(campers.items) && campers.items.map(camper => { 
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
        img={camper.gallery[0].original}
        name={camper.name}
        price={camper.price}
        marks={camper.rating}
        location={camper.location} 
        descr={camper.description}
         categories={categories}
         reviews = {camper.reviews}
        
        
        />
          )}
         )};
      </ul>
    </div>
  )
}

export default CampersList