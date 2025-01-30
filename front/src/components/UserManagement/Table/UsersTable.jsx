import UserRegisters from "./UserRegister/UserRegisters";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import api from "../../../utils/Api";
import { useEffect, useContext } from "react";
import { UsersContext } from "../../../contexts/UsersContext";

function UsersTable() {
  const {
    checkedAll,
    handleCheckAll,
    status,
    deleteUser,
    userChecked,
    setUsers,
  } = useContext(UsersContext);

  useEffect(() => {
    api.getUsers().then((data) => setUsers(data));
  }, [userChecked, checkedAll, status, deleteUser]);

  useEffect(() => {
    api.checkAllUsers(!checkedAll);
  }, [checkedAll]);

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>
              <ToggleButton
                className="btn btn-sm m-0 px-1 py-0"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checkedAll}
                value="1"
                onChange={(e) => handleCheckAll(e)}
              >
                <i className="bi bi-caret-down-fill"></i>
              </ToggleButton>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Last seen</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <UserRegisters />
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;
