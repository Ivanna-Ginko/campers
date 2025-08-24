import React from 'react'
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from '../../Redux/operations';
import CamperItem from '../CamperItem/CamperItem';

const CampersList = () => {

  const dispatch = useDispatch();
  const { campers, isLoading, error } = useSelector((state) => state);
    const filters = useSelector((state) => state.filters); // беремо фільтри з redux

  console.log(campers.campers.items)

useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, filters]);

const items = Array.isArray(campers?.campers?.items) ? campers.campers.items : [];

if (isLoading) return <p>Loading campers...</p>;
if (error) return <p>{error}</p>;
if (!items || items.length === 0) return <p>No campers found</p>;

  return (
    <div>
      
      <ul>
         {Array.isArray(items) && items.map(camper => { 
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
    </div>
  )
}

export default CampersList