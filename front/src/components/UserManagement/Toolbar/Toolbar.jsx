import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UsersContext } from "../../../contexts/UsersContext";

function Toolbar() {
  const { handleStatusClick, handleDeleteUser } = useContext(UsersContext);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-secondary border-secondary border border-3 px-2 py-1 d-flex justify-content-between rounded-2"
      >
        <div className="d-flex">
          <Button
            className="btn btn-light btn-lg d-flex align-items-center px-1 py-1 me-1"
            type="button"
            onClick={() => handleStatusClick(0)}
          >
            <i className="bi bi-lock-fill fs-6 text-secondary px-1"></i>
            <p className="fs-6 m-0 pl-1 me-2 text-secondary">Block</p>
          </Button>
          <Button
            className="btn btn-light btn-lg d-flex align-items-center px-1 py-1 me-1"
            type="button"
            onClick={() => handleStatusClick(1)}
          >
            <i className="bi bi-unlock-fill fs-6 text-secondary px-1"></i>
          </Button>
          <Button
            className="btn btn-light btn-lg d-flex align-items-center px-1 py-1"
            type="button"
            onClick={() => handleDeleteUser()}
          >
            <i className="bi bi-trash-fill fs-6 text-danger px-1"></i>
          </Button>
        </div>

        <Form.Control
          type="search"
          placeholder="Filter"
          className="me-2 w-25"
          aria-label="Search"
        />
      </Navbar>
    </>
  );
}

export default Toolbar;
