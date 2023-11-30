import React from 'react'
import image from "../img/Untitled.svg"
const Ad = ( { showAd } ) => {
 
  if(!showAd) {
    return null;
  }
  
  return (
    <div>
      <img className='Ad-img' src={image} alt="광고"/>
    </div>
  );
};

export default Ad;