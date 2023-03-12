import { Users } from 'components/data/Users';
import UserListItem from 'components/UsersListItem/UserListItem';

const UserList = () => (
  <div>
    <ul>
      {Users.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UserList;
