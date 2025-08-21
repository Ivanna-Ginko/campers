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
            const categories = Object.fromEntries(
    Object.entries(camper).filter(([_, value]) => typeof value === "boolean")
  );
          return (
        <CamperItem 
        key={camper.id}
        img={camper.gallery[0].original}
        name={camper.name}
        price={camper.price}
        marks={camper.rating}
        location={camper.location} 
        descr={camper.description}
         categories={categories}
        
        />
          )}
         )};
      </ul>
    </div>
  )
}

export default CampersList