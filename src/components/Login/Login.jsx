// import "../../blocks/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import LoginForm from "./LoginForm/LoginForm";
import loginLogo from "../../assets/login_logo.png";

function Login() {
  return (
    <>
      <div className="d-flex flex-row vh-100">
        <Container
          fluid="sm"
          className="mx-auto p-5 rounded-3 bg-light w-50 d-md-flex flex-column align-self-center"
        >
          <Row className="h-25 mb-4" sm={3}>
            <img
              src={loginLogo}
              alt="login-logo"
              className="object-fit-contain mx-auto"
            />
          </Row>
          <Row className="justify-content-md-center h-10" md="auto">
            <h1>Sign In</h1>
          </Row>
          <Row className="h-50">
            <LoginForm />
          </Row>
          <Row className="w-25 h-25 mx-auto pt-3">
            <ButtonGroup className="p-0">
              <Button variant="dark" type="button" className="btn btn-sm">
                Register
              </Button>
              <Button variant="secondary" type="button" className="btn btn-sm">
                Sign In
              </Button>
            </ButtonGroup>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
