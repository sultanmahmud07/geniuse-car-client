import React from 'react';
import BannerImg1 from '../../../assets/images/banner/1.jpg';
import BannerImg2 from '../../../assets/images/banner/2.jpg';
import BannerImg3 from '../../../assets/images/banner/3.jpg';
import BannerImg4 from '../../../assets/images/banner/4.jpg';
import BannerImg5 from '../../../assets/images/banner/5.jpg';
import BannerImg6 from '../../../assets/images/banner/6.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='carouserl_img  h-96'>
            <img src={BannerImg1} className="w-full rounded-xl" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2 text-white">
            <div>
              <h1 className='text-5xl font-bold mb-3'>Affordable</h1>
              <h1 className='text-5xl font-bold mb-3'>Price For Car</h1>
              <h1 className='text-5xl font-bold'>Servicing</h1>
              <br />
              <p className='w-2/3 text-stone-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='mt-10'>
                <button className="btn btn-warning">Latest Project</button>
                <button className="btn btn-outline btn-warning">Discover More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide4" className="btn btn-circle mr-3">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className='carouserl_img'>
            <div className='carouserl_img'>
              <img src={BannerImg2} className="w-full rounded-xl" />
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className='carouserl_img'>
            <img src={BannerImg3} className="w-full rounded-xl" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className='carouserl_img'>
            <img src={BannerImg4} className="w-full rounded-xl" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div className='carouserl_img'>
            <img src={BannerImg5} className="w-full rounded-xl" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <div className='carouserl_img'>
            <img src={BannerImg6} className="w-full rounded-xl" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;