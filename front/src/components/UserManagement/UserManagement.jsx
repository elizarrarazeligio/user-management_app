import UsersTable from "./Table/UsersTable";
import Toolbar from "./Toolbar/Toolbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import api from "../../utils/Api";
import { toast } from "react-toastify";

function UserManagement() {
  const handleStatusClick = async (status) => {
    await api
      .setUserStatus(status)
      .then((res) => toast.success(res.message))
      .catch((err) => err.then((res) => toast.error(res.message)));
  };

  const handleDeleteUser = async () => {
    await api
      .deleteUser()
      .then((res) => toast.success(res.message))
      .catch((err) => err.then((res) => toast.error(res.message)));
  };

  return (
    <div className="d-flex flex-row vh-100">
      <Container
        fluid="sm"
        className="mx-auto px-5 py-3 bg-light h-100 d-md-flex flex-column"
      >
        <Row>
          <Toolbar
            handleStatusClick={handleStatusClick}
            handleDeleteUser={handleDeleteUser}
          />
        </Row>

        <Row className="overflow-auto">
          <UsersTable
            handleStatusClick={handleStatusClick}
            handleDeleteUser={handleDeleteUser}
          />
        </Row>
      </Container>
    </div>
  );
}

export default UserManagement;
