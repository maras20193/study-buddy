import { useEffect, useState } from 'react';

import { users as usersData } from 'data/users';

import { Wrapper, StyledList, StyledTitle } from './UserList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import Loader from 'react-loader-spinner';
import { theme } from 'assets/styles/theme';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

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

  const [formValues, setFormValues] = useState({
    name: '',
    attendence: '',
    average: '',
  });

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

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendence: formValues.attendence,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues({
      name: '',
      attendence: '',
      average: '',
    });
  };

  return (
    <>
      {/* <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label="Name"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendence"
          name="attendence"
          id="attendence"
          type="number"
          value={formValues.attendence}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          name="average"
          id="average"
          type="number"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper> */}
      <ViewWrapper>
        <StyledTitle>Students list</StyledTitle>
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
      </ViewWrapper>
    </>
  );
};

export default UsersList;
