import React from 'react';
import './fooditem.css';
// import pic112 from '../../assets/assets/pic112.png'; // Adjust the path based on your project structure

const FoodItem = ({ id, name, price, image, description }) => {
  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          {/* <img src={pic112} alt="Food Item Rating" /> Correctly using the imported image */}
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
