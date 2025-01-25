import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./LoginForm.css";

function LoginForm() {
  return (
    <Form className="d-md-flex flex-column w-75 mx-auto p-4">
      <Form.Group className="mb-3" id="email">
        <Form.Label>Email Address:</Form.Label>
        <InputGroup>
          <InputGroup.Text id="email">
            <i className="bi bi-person-circle"></i>
          </InputGroup.Text>
          <Form.Control size="lg" type="email" placeholder="Your email" />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" id="password">
        <Form.Label>Password: </Form.Label>
        <InputGroup>
          <InputGroup.Text id="password">
            <i className="bi bi-key-fill"></i>
          </InputGroup.Text>
          <Form.Control size="lg" type="password" placeholder="Your password" />
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
