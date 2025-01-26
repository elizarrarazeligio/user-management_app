import UserRegister from "./UserRegister/UserRegister";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function UsersTable() {
  const [checkedAll, setCheckedAll] = useState(false);

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
                <i class="bi bi-caret-down-fill"></i>
              </ToggleButton>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Last seen</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 5, 6, 7, 8, 5, 3, 2, 3, 4, 1, 1, 1, 1, 11].map((user) => (
            <UserRegister />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;
