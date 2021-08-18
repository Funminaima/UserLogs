import { IUsersData } from "./Interfaces";
import TableRow from "./TableRow";

interface Props {
  users: IUsersData[];
  deleteUser: (id: number) => void;
  editAUser: (user: IUsersData) => void;
}
const Users = ({ users, deleteUser, editAUser }: Props) => {
  return (
    <div>
      <table className="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Email <i className="fa fa-caret-down fa-1x"></i>
            </th>
            <th>
              Role <i className="fa fa-caret-down fa-1x"></i>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                editUser={editAUser}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
