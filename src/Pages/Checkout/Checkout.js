import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const {_id, title, price} = useLoaderData()
  const {user} = useContext(AuthContext)

  const handlePlaceOrder = event =>{
    event.preventDefault()
    const form =event.target
    // const fastName =form.fastName.value;
    // const lastName =form.lastName.value;
    const name =`${form.fastName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || 'unregister';
    const textArea =form.textArea.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      textArea
      
      
    }
    // if(phone.length > 10){
    //   alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }


    fetch('https://genius-car-server-iota-ebon.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        alert('Order place successfully!')
        form.reset();
      }
    })
    .catch(er => console.error(er));
  }

  return (
    <div>
        <form onSubmit={handlePlaceOrder}>
          <h2 className='text-4xl'>Your about to order {title}</h2>
          <h4 className='text-5xl'>Price {price}</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7 my-6'>
            <input type="text" name='fastName' placeholder="Fast Name" className="input input-bordered input-warning w-full" required/>
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-warning w-full" required/>
            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-warning w-full" required />
            <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered input-warning w-full"  />
          </div>
          <div className='mt-6'>
             <textarea name='textArea' className="textarea textarea-bordered w-full p-5" min-w placeholder="Your Order"></textarea>
          </div>
          <button type='submit' className="btn btn-outline btn-primary my-4">Button</button>
        </form>
    </div>
  );
};

export default Checkout;