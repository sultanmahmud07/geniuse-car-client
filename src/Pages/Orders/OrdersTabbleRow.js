import React, { useEffect, useState } from 'react';

const OrdersTabbleRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { serviceName, phone, customer, price, textArea, email, service, _id, status } = order;
  const [orderService, setOrderService] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then(res => res.json())
      .then(data => setOrderService(data))
  }, [service])




  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-12 h-12">
              {
                orderService?.img && <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
      </th>
    </tr>
  );
};

export default OrdersTabbleRow;