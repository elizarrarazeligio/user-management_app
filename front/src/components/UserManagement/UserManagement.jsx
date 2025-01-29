import UsersTable from "./Table/UsersTable";
import Toolbar from "./Toolbar/Toolbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function UserManagement(props) {
  return (
    <div className="d-flex flex-row vh-100">
      <Container
        fluid="sm"
        className="mx-auto px-5 py-3 bg-light h-100 d-md-flex flex-column"
      >
        <Row>
          <Toolbar users={props.users} />
        </Row>

        <Row className="overflow-auto">
          <UsersTable
            users={props.users}
            userChecked={props.userChecked}
            checkedAll={props.checkedAll}
            handleCheckUser={props.handleCheckUser}
            handleCheckAll={props.handleCheckAll}
            setUsers={props.setUsers}
          />
        </Row>
      </Container>
    </div>
  );
}

export default UserManagement;
