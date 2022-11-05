import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBannerImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaBeer } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const navigate =useNavigate()
  const {createUser} =useContext(AuthContext)
  // console.log(createUser);


  const handleSignUp = (event) => {
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const email =form.email.value;
    const password =form.password.value;

    createUser(email, password)
    .then(result =>{
      const user =result.user
      form.reset('')
      navigate('/')
      console.log(user)
    })
    .catch(error =>console.error(error))
    // console.log(name, email, password)
  }


  return (
    <div className="hero ">
    <div className="hero-content flex-col lg:flex-row grid grid-cols-1 md:grid-cols-2 py-11 my-8">
      <div className="text-center lg:text-left">
          <img className='w-10/12' src={LogoBannerImg} alt="" />
      </div>
      <div className="card w-full lg:w-10/12 mx-auto shadow-2xl text-center">
        <form onSubmit={handleSignUp} className="card-body">
          <h2 className='text-center font-semibold text-orange-600 text-6xl pb-8'>Sign Up</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="you name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="your email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary text-white" type="submit" value="sign up" />
          </div>
        </form>
        
       <div className='text-center'>
        <div>
          <button><FaBeer></FaBeer></button>
          <button><FaGoogle></FaGoogle></button>
          <button>Facebook</button>
        </div>
       <label className="label justify-center">
             <>Alrady Have an accout  <Link to='/login' className="label-text-alt text-orange-600 font-bold text-lg link link-hover">Log In</Link></>
         </label>
       </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;