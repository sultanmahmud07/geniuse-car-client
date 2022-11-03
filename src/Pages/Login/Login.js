import React from 'react';
import { Link } from 'react-router-dom';
import LogoBannerImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row grid grid-cols-1 md:grid-cols-2 py-11 my-8">
        <div className="text-center lg:text-left">
            <img className='w-10/12' src={LogoBannerImg} alt="" />
        </div>
        <div className="card w-full lg:w-10/12 mx-auto shadow-2xl bg-base-100">
          <form className="card-body">
            <h2 className='text-center font-semibold text-orange-600 text-6xl py-8'>Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='name' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <Link to='/forgate' className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary text-white" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;