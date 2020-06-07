/* eslint-disable react/prop-types */
import React from 'react';
import Service from './Service';

const oxygenCylImg = 'https://www.vitalaire.gr/sites/vitalaire_gr/files/2016/11/08/takeo-air-liquide-healthcare.jpg';
const paceImg = 'https://www.bostonscientific.com/content/dam/bostonscientific/Rhythm%20Management/portfolio-group/CRT-P/VALITUDE/Visionist%20X4-lead-1.png';
const wheelChairUrl = 'https://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1200/924607.jpg';
const MedicalEquipment = ({ addToCart }) => (
  <div style={{ width: '70%', marginTop: '3rem' }} className="row justify-content-around ">
    <Service imgUrl={oxygenCylImg} addToCart={addToCart} price="800" name="Oxygen Cylinder" />
    <Service imgUrl={paceImg} addToCart={addToCart} price="400" name="Pace Maker" />
    <Service imgUrl={wheelChairUrl} addToCart={addToCart} price="100" name="WheelChair" />
  </div>
);

export default MedicalEquipment;
