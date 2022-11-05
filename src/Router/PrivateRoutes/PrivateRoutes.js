import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({chaidren}) => {
  const {user, loading} =useContext(AuthContext)
  const location =useLocation();
  if(loading){
    return <h1 className='text-5xl'>Loading..</h1>
  }
  if(user){
    return Children
  }
  return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;