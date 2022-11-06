import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      alert('Your Login Successfully')
    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <h4 className='text-center'>Social login link</h4>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
        <button className='btn btn-ghost'>Facebook</button>
      </div>
    </div>
  );
};

export default SocialLogin;