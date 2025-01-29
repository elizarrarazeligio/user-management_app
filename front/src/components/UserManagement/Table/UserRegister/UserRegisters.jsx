import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { UsersContext } from "../../../../contexts/UsersContext";

function UserRegisters() {
  const { users, handleCheckUser } = useContext(UsersContext);

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
          <td>
            {user.status ? (
              <p className="my-1 bg-success text-white text-center w-75">
                Active
              </p>
            ) : (
              <p className="my-1 bg-danger text-white text-center w-75">
                Blocked
              </p>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}

export default UserRegisters;
