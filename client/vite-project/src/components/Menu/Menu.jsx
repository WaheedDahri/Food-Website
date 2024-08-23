import React from 'react';
import { menu_list } from '../../assets/assets';
import './Menu.css';

const Menu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        To set a background color for an image in CSS, you can use the background-color property, but this will only affect the area around the image if the image itself does not cover the entire container.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          // Display the item if it's the selected category or if all categories are selected
          if (category === "All" || category === item.menu_name) {
            return (
              <div 
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                key={index} 
                className='explore-menu-list-item'
              >
                <img 
                  className={category === item.menu_name ? "active" : ""} 
                  src={item.menu_image} 
                  alt={item.menu_name} 
                />
                <p>{item.menu_name}</p>
              </div>
            );
          }
          return null; // If the item doesn't match the selected category, don't render it
        })}
      </div>
      <hr />
    </div>
  );
}

export default Menu;
