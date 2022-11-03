import React from 'react';

const SurvicesCard = ({survice}) => {
  // console.log(survice);
  const {title, img, price} = survice;
  return (
    <div className="card glass">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-3xl">{title}</h2>
    <p className='text-orange-600'>Price: ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  );
};

export default SurvicesCard;