import UserRegisters from "./UserRegister/UserRegisters";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import api from "../../../utils/Api";
import { useEffect } from "react";

function UsersTable(props) {
  useEffect(() => {
    api.getUsers().then((data) => props.setUsers(data));
  }, [props.userChecked, props.checkedAll]);

  useEffect(() => {
    api.checkAllUsers(!props.checkedAll);
  }, [props.checkedAll]);

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
                checked={props.checkedAll}
                value="1"
                onChange={(e) => props.handleCheckAll(e)}
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
          <UserRegisters
            users={props.users}
            handleCheckUser={props.handleCheckUser}
          />
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;
