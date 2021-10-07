import UsersListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
