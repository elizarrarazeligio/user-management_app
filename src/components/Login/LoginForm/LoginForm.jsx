import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function LoginForm() {
  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Form className="d-md-flex flex-column w-75 mx-auto p-1">
      <Form.Group className="mb-4" id="email">
        <Form.Label className="fw-bold">Email Address:</Form.Label>
        <InputGroup>
          <InputGroup.Text id="email">
            <i className="bi bi-person-circle"></i>
          </InputGroup.Text>
          <Form.Control size="lg" type="email" placeholder="Your email" />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-5" id="password">
        <Form.Label className="fw-bold">Password: </Form.Label>
        <InputGroup>
          <InputGroup.Text id="password">
            <i className="bi bi-key-fill"></i>
          </InputGroup.Text>
          <Form.Control size="lg" type="password" placeholder="Your password" />
        </InputGroup>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="btn btn-lg"
        onClick={(evt) => handleLoginSubmit(evt)}
      >
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
