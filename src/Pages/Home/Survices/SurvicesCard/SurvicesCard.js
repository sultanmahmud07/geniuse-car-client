import React from 'react';
import { Link } from 'react-router-dom';

const SurvicesCard = ({survice}) => {
  // console.log(survice);
  const {_id, title, img, price} = survice;
  return (
    <div className="card glass">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-3xl">{title}</h2>
    <p className='text-orange-600'>Price: ${price}</p>
    <div className="card-actions justify-end">
     <Link to={`/checkout/${_id}`}>
       <button className="btn btn-primary">Bye now!</button>
     </Link>
    </div>
  </div>
</div>
  );
};

export default SurvicesCard;