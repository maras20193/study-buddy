import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

import { useUsers } from 'hooks/useUsers';
import Loader from 'react-loader-spinner';
import StyledLoader from 'components/atoms/Loader/Loader';

const UsersList = () => {
  const { users, deleteUser, isLoading } = useUsers();

  const usersList = users.map((user, index) => (
    <UsersListItem
      key={index}
      index={index}
      userData={user}
      deleteUser={deleteUser}
    />
  ));

  return (
    <>
      <ViewWrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>{isLoading ? <StyledLoader /> : usersList}</StyledList>
      </ViewWrapper>
    </>
  );
};

export default UsersList;
