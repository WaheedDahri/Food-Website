import React, { useState } from 'react'; // Import useState
import './Home.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu'; // Import Menu component

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
