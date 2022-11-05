import React, { useContext } from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Survices from './Survices/Survices';

const Home = () => {
  const {} =useContext
  return (
    <div>
     <Banner></Banner>
     <About></About>
     <Survices></Survices>
    </div>
  );
};

export default Home;