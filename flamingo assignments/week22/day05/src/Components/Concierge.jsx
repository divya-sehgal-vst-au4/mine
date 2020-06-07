/* eslint-disable react/prop-types */
import React from 'react';
import Service from './Service';

const ambulanceUrl = 'https://5.imimg.com/data5/JA/KE/YX/SELLER-8229651/force-traveller-3350-wb-ac-cardiac-ambulance-500x500.png';
const hearseUrl = 'https://www.nationfuneralservices.com.sg/wp-content/uploads/2017/01/Hearse-2.jpg';
const HomeCare = ({ addToCart }) => (
  <div style={{ width: '70%', marginTop: '3rem' }} className="row justify-content-around ">
    <Service imgUrl={ambulanceUrl} addToCart={addToCart} price="800" name="Ambulance" />
    <Service imgUrl={hearseUrl} addToCart={addToCart} price="400" name="Hearse" />
  </div>
);

export default HomeCare;
