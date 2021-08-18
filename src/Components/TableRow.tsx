import React, { Fragment } from "react";
import { IUsersData } from "./Interfaces";

interface Props {
  user: IUsersData;
  deleteUser: (id: number) => void;
  editUser: (user: any) => void;
}

const TableRow = ({ user, deleteUser, editUser }: Props) => {
  const { id, nameField, email, select } = user;
  return (
    <Fragment>
      <tr>
        <td onClick={() => editUser(user)}>{nameField}</td>
        <td>{email}</td>
        <td>{select}</td>
        <td>
          <i
            className="fa fa-trash"
            style={{ cursor: "pointer", color: "#989898" }}
            onClick={() => deleteUser(id)}
          />
        </td>
      </tr>
    </Fragment>
  );
};
export default TableRow;
