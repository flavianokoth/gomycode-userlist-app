import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; 

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="users-grid">
        {listOfUser.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;