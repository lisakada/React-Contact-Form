import React,{useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList'; 
import TotalList from './components/TotalList';
import Header from './components/Header';



function App() {
  const[usersList,setUsersList]=useState([]);
  const[totlaList,setTotalList]=useState([])

  const addUserHandler=(uName,uState,uCity)=>{
  setUsersList((prevUsersList)=>{
    return [...prevUsersList,{name:uName,state:uState,city:uCity,id:Math.random().toString}]
  });
  }
  const addTotalUserHandler=(uName,uEmail,uPhone,uAddress,uCity,uState,uZip)=>{
    setTotalList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,email:uEmail,phone:uPhone,address:uAddress,state:uState,city:uCity,zip:uZip,id:Math.random().toString}]
    });
    }
  
  const onDeleteHandler=(id) =>{
    setUsersList([usersList.filter((usersList)=>usersList.id===id)]);
  }
  return (
    <div>
      <Header/>
     <AddUser onAddUser={addUserHandler} onTotalUser={addTotalUserHandler}/>
    <div>
     <UsersList users={usersList} onDelete={onDeleteHandler} />    {/*  */}
       </div> 
     <TotalList users={totlaList}/>
    </div>
  );
}

export default App;
