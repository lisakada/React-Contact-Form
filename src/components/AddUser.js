import React, { useEffect, useState } from 'react';
import './AddUser.css';
import logo from './loading.gif';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhoneNo, setEnteredPhoneNo] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredState, setEnteredState] = useState('');
    const [enteredZip, setEnteredZip] = useState('');
    const [currentCount, setCurrentCount] = useState(0);
      const [contactsState,setContactsState] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
        setContactsState([
            {
                id: 'a',
                username: 'Robin',
                email: 'robin@gmail.com',
                State: 'Texas',
              },
              {
                id: 'b',
                username: 'Dave',
                email: 'david@gmail.com',
                state: "Arkansas",
              },
              {
                id: 'c',
                username: 'Tom',
                email: 'tom@gmail.com',
                state: "Colorado",
              },
              {
                id: 'd',
                username: 'Jim',
                email: 'jim@gmail.com',
                state: "California",
              },
        ])
    },8000)
})
 const hasContacts= contactsState.length>0

 function handleRemove(id) {
    const newList = contactsState.filter((item) => item.id !== id);

    setContactsState(newList);
  }
    // const contacts = [
    //     'Name:Jimmy Tim City:Dallas State:Texas',
    //     'Name:Teena Pat City:Denver State:Colorado',
    //     'Name:Max Zen City:Rogers State:Arkansas ',
    //     'Name:Tim Rock City:Orlando State:Florida ',
    //     'Name:Liz Mike City:SantaMonica State:California'
    // ]
 
    //  const filteredContacts=contacts.filter((contacts)=>{
    //      return contacts.includes(e)
    //  })
    
    const addUserHandler = (event) => {
        event.preventDefault();
        props.onAddUser(enteredUsername, enteredState, enteredCity);
        props.onTotalUser(enteredUsername, enteredEmail, enteredPhoneNo, enteredAddress, enteredCity, enteredState, enteredZip)
        setEnteredAddress(''); setEnteredCity(''); setEnteredEmail(''); setEnteredPhoneNo(''); setEnteredState(''); setEnteredUserName(''); setEnteredZip('');
    }
    useEffect(() => {
        if (currentCount === 8) {
            alert('The contacts have reached maximum limit')
        }
    }, [currentCount])

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const phoneNoChangeHandler = (event) => {
        setEnteredPhoneNo(event.target.value)
    }
    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value)
    }
    const cityChangeHandler = (event) => {
        setEnteredCity(event.target.value)
    }
    const stateChangeHandler = (event) => {
        setEnteredState(event.target.value)
    }
    const zipChangeHandler = (event) => {
        setEnteredZip(event.target.value)
    }
    const handleClick = () => {
        setCurrentCount(currentCount + 1)
    }

    return (<div>
        <div className='card'>
            <form onSubmit={addUserHandler}>
                <div> <label htmlFor="name">Username</label>
                    <input id="name" type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    /></div>
                <div><label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="text"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                    /></div>
                <div><label htmlFor="Phone Number">Phone No</label>
                    <input
                        id="phone number"
                        type="number"
                        value={enteredPhoneNo}
                        onChange={phoneNoChangeHandler}
                    /></div>
                <div><label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        value={enteredAddress}
                        onChange={addressChangeHandler}
                    /></div>
                <div><label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        value={enteredCity}
                        onChange={cityChangeHandler}
                    /></div>
                <div><label htmlFor="state">State</label>
                    <input
                        id="state"
                        type="text"
                        value={enteredState}
                        onChange={stateChangeHandler}
                    /></div>
                <div><label htmlFor="zipcode">Zip Code</label>
                    <input
                        id="zipCode"
                        type="number"
                        value={enteredZip}
                        onChange={zipChangeHandler}
                    /></div>
                <button className='button' type="submit" onClick={handleClick}>Add User</button>
                <div className='contacts-added'>New Contacts Added: {currentCount}</div>
                {hasContacts ? 
                <div>{contactsState.map((contactsState) => {
                    return <li className='in' key={contactsState}>Name:{contactsState.username}  Email:{contactsState.email}  State:{contactsState.state} <button type="button" onClick={() => handleRemove(contactsState.id)}>X</button></li>
                })}</div> : <img src={logo} alt="" width="250" height="100"/>}
                
                
            </form>
        </div>
    </div>
    );
}


export default AddUser;
