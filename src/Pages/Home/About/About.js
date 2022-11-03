import React from 'react';
import Parson from '../../../assets/images/about_us/person.jpg';
import Parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row">
      <div className='w-1/2 relative'>
      <img src={Parson} className="w-4/5 h-full rounded-lg shadow-2xl" />
      <img src={Parts} className="w-3/5 border-8 absolute right-5 top-1/2 rounded-lg shadow-2xl" />

      </div>
      <div className='w-1/2'>
        <h3 className='text-orange-600 font-bold py-4 text-lg'>About Us</h3>
        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button className="btn btn-primary">Get More Info</button>
      </div>
    </div>
  </div>
  );
};

export default About;