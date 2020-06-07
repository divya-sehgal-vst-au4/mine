/* eslint-disable react/prop-types */
import React from 'react';
import Service from './Service';

const nurseImgUrl = 'https://i.ibb.co/vHjk4vL/nurse.jpg';
const physioImgUrl = 'https://www.parkmed.in/client_assets/assets/s7/3.jpg';
const cookImgUrl = 'https://i.ibb.co/HYtrVbT/chef.jpg';
const HomeCare = ({ addToCart }) => (
  <div style={{ width: '70%', marginTop: '6rem' }} className="row justify-content-around ">
    <Service imgUrl={nurseImgUrl} addToCart={addToCart} price="800" name="Nurse" />
    <Service imgUrl={physioImgUrl} addToCart={addToCart} price="400" name="Physiotherapist" />
    <Service imgUrl={cookImgUrl} addToCart={addToCart} price="200" name="Cook" />
  </div>
);

export default HomeCare;
