/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart, checkoutCart, deleteItem }) => (
  <div className="Cart">
    <h2 className="p-1">
      <FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} />
      <span>Cart</span>
    </h2>
    <hr />
    <table className="ItemList-table ">
      <thead>
        <tr>
          <th> Name</th>
          <th>Hours </th>
          <th className="center"> Price(Hrs)</th>
          <th className="center"> Date</th>
          <th className="center"> Remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={uuid()}>
            <td>
              {item.service}
            </td>
            <td className="center">
              {item.hrs}
            </td>
            <td className="center">
              {item.price * item.hrs}
            </td>
            <td className="date-val center">
              {(new Date(item.date)).toLocaleDateString()}
            </td>
            <td className="center">

              <FontAwesomeIcon onClick={() => deleteItem(index)} className="cart-icon trash" icon={faTrashAlt} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="Cart-total">
      <button type="button" onClick={() => checkoutCart()} className="checkout">Checkout</button>
      Total Price:
      <span>

        Rs &nbsp;
        <span className="total-value">
          {cart.reduce((a, b) => (a + b.price * b.hrs), 0)}

        </span>
      </span>
    </div>
  </div>
);

export default Cart;
