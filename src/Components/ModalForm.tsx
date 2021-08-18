import { useState } from "react";
import Alert from "./Alert";
import { IUsersData } from "./Interfaces";

interface Props {
  clearModal: () => void;
  onFormSubmit: (user: any) => void;
  editUserDetail: boolean;
  updateUser: any;
  editUser: IUsersData;
}

const ModalForm = ({
  clearModal,
  onFormSubmit,
  editUserDetail,
  updateUser,
  editUser,
}: Props) => {
  const [alert, setAlert] = useState<null | any>(null);
  const [inputs, setInputs] = useState({
    id: editUser.id ? editUser.id : "",
    nameField: editUser.nameField ? editUser.nameField : "",
    email: editUser.email ? editUser.email : "",
    select: editUser.select ? editUser.select : "",
  });
  // const [inputs, setInputs] = useState({
  //   id: "",
  //   nameField: "",
  //   email: "",
  //   select: "",
  // });

  const handleChange = (e: any) => {
    const value = e.target.value;

    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };
  const setAlertFn = (msg: string, type: string) => {
    setAlert({ msg, type });
    // setTimeout(()=>setAlert(null),3000);
  };
  const onSubmitForm = (e: any) => {
    e.preventDefault();
    // console.log(state);
    const { nameField, email, select } = inputs;
    if (nameField === "" || email === "" || select === "") {
      setAlertFn("Field is required", "danger");
    } else {
      editUserDetail === true ? updateUser(inputs) : onFormSubmit(inputs);
      // onFormSubmit(state);
      setInputs({
        id: "",
        nameField: "",
        email: "",
        select: "",
      });
    }

    console.log(inputs, "hello");
  };

  const closeAlertFn = () => {
    setAlert(null);
  };
  return (
    <div className="modal">
      <Alert alert={alert} closeAlert={closeAlertFn} />
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="nameField"
            value={inputs.nameField}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>ROLE</label>
          <select value={inputs.select} onChange={handleChange} name="select">
            <option value=""></option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <p
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={clearModal}
        >
          Clear
        </p>
        <button className="btn btn-block">
          {editUserDetail ? "Update user" : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
