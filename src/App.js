
import { useEffect, useState } from 'react';
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Cost from './Components/Cost/Cost';
import Shoes from './Components/Shoes/Shoes';
import Users from './Components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div className="App">
      <Cost></Cost>
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <h1>Users Information</h1>
      {
        users.map(user=> <Users
        key={user.id}
        user={user}
        ></Users>)
      }
    </div>
  );
}

export default App;
