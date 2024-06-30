



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Personsecond.css'; // Import the CSS file

function Personsecond({ images, rate, price }) {
  console.log("props", { images, rate, price });

  const [count, setCount] = useState(1);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='box'>
      <div className='img'>
        <img src={images} alt="Product" />
        <button className='filter-btn'>Filter</button>
      </div>
      <div className='rate'>Rate - {rate}</div>
      <span className='price'>{price}</span>
      <button className='dec-btn' onClick={dec}>-</button>
      <span className='count'>{count}</span>
      <button className='inc-btn' onClick={inc}>+</button>
      <span className='total-price'>{price * count}</span>
    </div>
  );
}

Personsecond.propTypes = {
  images: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Personsecond;
