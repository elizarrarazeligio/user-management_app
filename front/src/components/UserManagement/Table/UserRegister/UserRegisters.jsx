import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import api from "../../../../utils/Api";

function UserRegisters({ users, handleCheckUser }) {
  return (
    <>
      {users.map((user) => (
        <tr key={user.user_id}>
          <td>
            <Form>
              <Form.Check
                type="checkbox"
                id={user.user_id}
                checked={user.checked}
                onChange={(e) => handleCheckUser(e)}
              />
            </Form>
          </td>
          <td>
            {user.last_name}, {user.first_name}
          </td>
          <td>{user.email}</td>
          <td>{user.last_seen}</td>
          <td>{user.user_id}</td>
        </tr>
      ))}
    </>
  );
}

export default UserRegisters;
