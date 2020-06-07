/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { createArr, calcHrs } from '../utils/utils';

import './Service.css';

const Service = ({
  name, price, addToCart, imgUrl,
}) => {
  const [date, setDate] = useState('2020-03-21');
  const [fromTime, setFromTime] = useState('9am');
  const [toTime, setToTime] = useState('10am');
  return (

    <div className="col-3  service-card">
      <img className="service-card-img" height="280px" src={imgUrl} width="100%" alt="" />
      <p>
        <span className=" time">
          9am- 8pm
        </span>
      </p>
      <p className="service-name p-1">
        {name}
        {' '}
        <span className=" price">
          {' '}
          <FontAwesomeIcon icon={faRupeeSign} />
          {' '}
          {price}
          /h
        </span>
      </p>
      <label htmlFor="from">
        Book from
        <select value={fromTime} onChange={(e) => setFromTime(e.target.value)} name="" id="">
          {createArr(3).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el + 8}am`}
            >
              {`${el + 8}am`}
            </option>
          ))}
          <option key={uuid()} value="12pm">12pm</option>
          {createArr(7).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el}pm`}
            >
              {`${el}pm`}
            </option>
          ))}
        </select>

        To
        <select value={toTime} onChange={(e) => setToTime(e.target.value)} name="" id="">
          {createArr(2).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el + 9}am`}
            >
              {`${el + 9}am`}
            </option>
          ))}
          <option value="12pm">12pm</option>
          {createArr(8).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el}pm`}
            >
              {`${el}pm`}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="date">
        <span>Booking date</span>
        <input value={date} placeholder="dd-mm-yyyy" onChange={(e) => setDate(e.target.value)} type="date" name="booking" id="" />
      </label>
      <button
        onClick={() => addToCart({
          service: name, date, price, hrs: calcHrs(fromTime, toTime),
        })}
        type="submit"
      >
        Add to cart
      </button>
    </div>
  );
};


export default Service;
