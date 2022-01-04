
import React, {useState} from 'react';
import AddUser from './UserDir/AddUser';
import UserList from './UserDir/UserList'
let INITIAL_USER_DATA = [];
const App = () => {
  let [userData, setUserData] = useState(INITIAL_USER_DATA);
  const AddUserHandler = (data) => {
    setUserData((prevState) => {
      return [...prevState, {name: data.name, age: data.age, id: data.id}];
    });
    
  }
  return (
    <React.Fragment>
      <AddUser AddUserHandler={AddUserHandler}></AddUser>
      <UserList userData={userData}></UserList>
    </React.Fragment>
  );
}

export default App;
