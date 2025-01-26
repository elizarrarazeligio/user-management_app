import UserRegister from "./UserRegister/UserRegister";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function UsersTable() {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>
              <Form>
                <Form.Check type="checkbox" id="" label="" />
              </Form>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Last seen</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <UserRegister />
        </tbody>
      </Table>
    </>
  );
}

export default UsersTable;
