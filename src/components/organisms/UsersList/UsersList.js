import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserList.styles';
import { users } from 'data/users';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
