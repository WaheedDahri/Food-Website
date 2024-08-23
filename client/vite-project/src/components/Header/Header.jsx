// import React from 'react'
// import './Header.css'


// const Header = () => {
//   return (
//     <div className='header'>
     
//       <div className='header-contents'>
//         <h2><b>Welcome to Favourite Food website</b></h2>
//         <p>Component names should be  <br />capitalized: `cart` to `Cart` <br /> and `placeorder` to `PlaceOrder`.
//         <br /> You accidentally closed   <br />the `Routes` component twice.</p>
         
//         <button title='View Menu'>View Menu</button>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import './Header.css';
import pic11 from '../../assets/pic11.png'; // Adjust the relative path accordingly
 // Adjust the path accordingly

const Header = () => {
  const [showImage, setShowImage] = useState(false);

  const handleViewMenu = () => {
    setShowImage(true);
  };

  const handleRemoveImage = () => {
    setShowImage(false);
  };

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2><b>Welcome to Favourite <br />Restaurant website</b></h2>
        <p>Component names should be <br />capitalized: `cart` to `Cart` <br /> and `placeorder` to `PlaceOrder`.
        <br /> You accidentally closed <br />the `Routes` component twice.</p>
        <button title='View Menu' onClick={handleViewMenu}>View Menu</button>
      </div>
      
      {showImage && (
        <div className='image-container'>
          <img src={pic11} alt='Menu' className='centered-image' />
          <button className='remove-button' onClick={handleRemoveImage}>X</button>
        </div>
      )}
    </div>
  );
}

export default Header;
