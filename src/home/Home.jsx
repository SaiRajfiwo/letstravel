import React from 'react';
import Body from '../components/Body.jsx'; // Adjust the import path based on your file structure
import Hero from '../components/Hero.jsx'; // Adjust the import path based on your file structure

function Home() {
  return (
    <div>
      <Body /> {/* This will render the Body content */}
      <Hero /> {/* This will render the Hero carousel */}
    </div>
  );
}

export default Home;
