import React from 'react';
import MainCarousel from './MainCarousel.jsx';
import ShoppingList from './ShoppingList.jsx';
import Suscribe from './Suscribe.jsx';


const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Suscribe />
    </div>
  )
}

export default Home