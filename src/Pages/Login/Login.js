import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoBannerImg from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const {logIn} =useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  // console.log(logIn)

 const handleLogin = (event) => {
  event.preventDefault();
  const form =event.target;
  const email =form.email.value;
  const password =form.password.value;

  logIn(email, password)
  .then(result => {
    const user =result.user;
    const currentUser = {
      email: user?.email
      
    }
    console.log(currentUser);
    form.reset('')

    //get jwt token
    fetch('http://localhost:5000/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      //local storage is the easiest but not the best place to store
      localStorage.setItem('genius-token', data.token);
      navigate(from, {replace: true})
    })

  })
  .catch(error => console.error(error));
  // console.log(email, password);
 }
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row grid grid-cols-1 md:grid-cols-2 py-11 my-8">
        <div className="text-center lg:text-left">
            <img className='w-10/12' src={LogoBannerImg} alt="" />
        </div>
        <div className="card w-full lg:w-10/12 mx-auto shadow-2xl text-center">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className='text-center font-semibold text-orange-600 text-6xl py-8'>Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary text-white" type="submit" value="submit" />
            </div>
          </form>
          
         <div className='text-center'>
         <label className="label justify-center">
               <> Have an accout  <Link to='/signup' className="label-text-alt text-orange-600 font-bold text-lg link link-hover">Sign Up</Link></>
           </label>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;