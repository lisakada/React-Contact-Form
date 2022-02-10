import React from 'react';
import './UsersList.css';

const TotalList = (props) => {
  return (
    <div className='card'>
<ul>
  {props.users.map((user)=>(
      <li className='in' key={user.id}>
          <li>Name:{user.name}</li>
          <li>Email:{user.email}</li>
          <li>Phone:{user.phone}</li>
          <li>Address:{user.address}</li>
          <li>City:{user.city}</li>
          <li>State:{user.state}</li>
          <li>Zip:{user.zip}</li>
      </li>
      
   ))}
   
</ul>
</div> 
);
};
export default TotalList;
