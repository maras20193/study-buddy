import { users as usersData } from 'data/users';
import React, { useState, createContext, useEffect } from 'react';

const mockAPI = (succes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve(usersData);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

export const UsersContext = createContext({
  users: [],
  isLoading: false,
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddUser = (value) => {
    const newUser = {
      name: value.name,
      attendence: value.attendence,
      average: value.average,
    };
    setUsers([newUser, ...users]);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <UsersContext.Provider
      value={{ users, isLoading, handleAddUser, deleteUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
