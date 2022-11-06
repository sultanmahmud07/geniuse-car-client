import React, { useEffect, useState } from 'react';
import SurvicesCard from './SurvicesCard/SurvicesCard';

const Survices = () => {
  const [survices, setSurvices] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setSurvices(data))
    // console.log(survices);
  },[])
  
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-lg font-bold text-orange-600'>Service</h3>
        <h1 className='text-5xl font-semibold py-3'>Our Service Area</h1>
        <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised </p>
        <p>words which don't look even slightly believable.  </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 py-7'>
        {
          survices.map(survice => <SurvicesCard
          key={survice._id}
          survice={survice}
          ></SurvicesCard>)
        }
      </div>
    </div>
  );
};

export default Survices;