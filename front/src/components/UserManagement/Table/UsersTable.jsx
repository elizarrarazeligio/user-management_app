import UserRegisters from "./UserRegister/UserRegisters";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState, useEffect } from "react";
import api from "../../../utils/Api.js";

function UsersTable() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Hola");
    api.checkresponse().then((data) => setUsers(data));
  }, [JSON.stringify(users)]);

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
                onChange={(e) => setCheckedAll(e.currentTarget.checked)}
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
          <UserRegisters users={users} />
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;
