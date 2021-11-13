import React, { useState } from 'react';
import AddUser from './conponents/Users/AddUser'
import UsersList from './conponents/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, userAge, id: Math.floor(Math.random).toString()}];
    });
  }
  return (
    <div>   
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
