import { useEffect, useState } from 'react';

import { users as usersData } from 'data/users';

import { Wrapper, StyledList } from './UserList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import Loader from 'react-loader-spinner';
import { theme } from 'assets/styles/theme';

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

const UsersList = () => {
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

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    console.log(`usuwam ${name}`);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };
  return (
    <Wrapper>
      <StyledList>
        {isLoading && (
          <Loader
            type="Oval"
            color={theme.colors.grey}
            height={60}
            width={60}
          />
        )}
        {users.map((userData, index) => (
          <UsersListItem
            key={index}
            index={index}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
