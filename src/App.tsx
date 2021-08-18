import React, { useState } from "react";
import Header from "./Components/Header";
import Users from "./Components/Users";
import ModalForm from "./Components/ModalForm";
import Backdrop from "./Components/Backdrop";
import { IUsersData } from "./Components/Interfaces";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<IUsersData | any>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [usersData, setUsersData] = useState<IUsersData[]>([
    {
      id: 1,
      nameField: "Adeleke Naheemah",
      email: "a@yahoo.com",
      select: "Admin",
    },
    {
      id: 2,
      nameField: "William chuku",
      email: "willie@yahoo.com",
      select: "user",
    },
  ]);

  const onModalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const createNewUser = (user: IUsersData) => {
    //create an id for user
    const id: number = Math.floor(Math.random() * 1000) + 1;

    const newUser = { ...user, id };
    console.log(id);
    console.log(newUser);

    setUsersData([...usersData, newUser]);

    setOpenModal(false);
    // setEditing(false);
    // console.log(usersData);
    // alert("success");
  };

  const deleteUserFn = (id: number) => {
    setUsersData(
      usersData.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const editUserFn = (user: IUsersData) => {
    setOpenModal(true);
    setEditing(true);
    // console.log(user);
    // const selectedUser = usersData.find((user) => user.id === id);
    // console.log(selectedUser);
    // setUsersData(selectedUser.nameField);
    setEditUser(user);
    console.log(editUser);
  };

  const updateUserFunction = (user: IUsersData, index?: number) => {
    let modifiedData = usersData.map((userItem, index) => {
      if (userItem.id === user.id) {
        console.log(userItem.id);
        console.log(user.id);
        return user;
      }
      return userItem;
    });
    // console.log(user);
    // console.log(usersData);

    setUsersData(modifiedData);
    setEditing(false);
    setOpenModal(false);
  };

  return (
    <div className="container">
      <Header title="Users" modalOpen={onModalOpen} />

      {usersData.length > 0 ? (
        <Users
          users={usersData}
          deleteUser={deleteUserFn}
          editAUser={editUserFn}
        />
      ) : (
        "No User Available"
      )}

      {openModal ? (
        <ModalForm
          clearModal={closeModal}
          onFormSubmit={createNewUser}
          editUserDetail={editing}
          editUser={editUser}
          updateUser={updateUserFunction}
        />
      ) : null}
      {openModal ? <Backdrop onClick={closeModal} /> : null}
    </div>
  );
};

export default App;
