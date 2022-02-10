import React from 'react';
import './UsersList.css';
//import{FaTimes} from 'react-icons/fa';


const UsersList = (props) => {

     
  return (
      <div className='card'>
           <form> 
  <ul>
    {props.users.map((user)=>(
        <li className='in' key={user.id} >
            Name:{user.name} City:{user.city} State:{user.state}  <button className='moreButton' type="submit">X</button>  {/* onClick={deleteContactHandler} <FaTimes style={{color:'red',cursor:'pointer'}}/>  */}
        </li>
        
     ))}
     
  </ul>
 
  </form> 
</div> 
  );
};

export default UsersList;
