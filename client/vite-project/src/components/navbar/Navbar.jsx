// import React from 'react';
// import { assets } from '../../assets/assets';
// import './navbar.css';


// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className='img1'>
//       <img src={assets.pic1} alt="" />
//       </div>
       
     
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react'; // Import useState
import { assets } from '../../assets/assets'; // Assuming assets.js is correctly set up
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("Home"); //state management and event handling

  return (
    <div className='navbar'>
      <div className='img1'>
        <img src={assets.pic1} alt="pic1" className='pic1' />
      </div>
      <ul className='navbar-menu'>
        
        <li
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>
        <li
          className={menu === "Menu" ? "active" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li
          className={menu === "Mobile-app" ? "active" : ""}
          onClick={() => setMenu("Mobile-app")}
        >
          Mobile-app
        </li>
        <li
          className={menu === "Contact us" ? "active" : ""}
          onClick={() => setMenu("Contact us")}
        >
          Contact us
        </li>
      </ul>
      <div className='navbar-right'>
        {/* <img src={assets.icon} alt="Icon" className='icon' /> */}
        <div className='navbar-search-icon'>
          {/* Check if assets.basket is available */}
          <img src={assets.basket} alt="Basket" className='basket' />
          <div className='dot'></div>
        </div>
        <button className='navbar-button'>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
