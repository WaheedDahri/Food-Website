import React, { useContext, useEffect, useRef } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../fooditem/fooditem'; // Updated import statement

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const foodDisplayRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (foodDisplayRef.current) {
      observer.observe(foodDisplayRef.current);
    }

    return () => {
      if (foodDisplayRef.current) {
        observer.unobserve(foodDisplayRef.current);
      }
    };
  }, []);

  return (
    <div className='food-display' id='food-display'>
      <h2>Of course, I'll let you know when the day comes.</h2>
      <div className='food-display-list' ref={foodDisplayRef}>
        {food_list.map((item, index) => (
          <Fooditem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            pic112={item.pic112}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
