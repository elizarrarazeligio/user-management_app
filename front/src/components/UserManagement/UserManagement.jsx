import UsersTable from "./Table/UsersTable";
import Toolbar from "./Toolbar/Toolbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import api from "../../utils/Api";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserManagement() {
  const { setCurrentUser, currentUser, users } = useContext(UsersContext);
  const navigate = useNavigate();

  const getData = async () => {
    const userInfo = await JSON.parse(sessionStorage.getItem("userInfo"));
    if (!userInfo.data.status || !userInfo) {
      sessionStorage.clear();
      setCurrentUser(null);
      navigate("/");
      toast.error("Access no longer available.");
    }
  };

  useEffect(() => {
    getData();
  }, [currentUser]);

  useEffect(() => {
    api
      .getUserFromToken()
      .then((res) => {
        setCurrentUser(res.response);
        let userInfo = {
          isLogged: true,
          data: res.response,
        };
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((err) => err.then((res) => console.log(res)));
  }, [users]);

  return (
    <div className="d-flex flex-row vh-100">
      <Container
        fluid="sm"
        className="mx-auto px-5 py-3 bg-light h-100 d-md-flex flex-column"
      >
        <Row>
          <Toolbar />
        </Row>

        <Row className="overflow-auto">
          <UsersTable />
        </Row>
      </Container>
    </div>
  );
}

export default UserManagement;
