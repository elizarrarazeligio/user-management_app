import Form from "react-bootstrap/Form";

function UserRegisters({ users }) {
  return (
    <>
      {users.map((user) => (
        <tr key={user.user_id}>
          <td>
            <Form>
              <Form.Check type="checkbox" id="" label="" />
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
