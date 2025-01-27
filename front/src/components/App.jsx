import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import RegisterForm from "./Login/RegisterForm/RegisterForm";
import LoginForm from "./Login/LoginForm/LoginForm";
import UserManagement from "./UserManagement/UserManagement";
import { useState, useEffect } from "react";
import api from "../utils/Api.js";

function App() {
  const [users, setUsers] = useState([]);

  const handleUserRegister = async (data) => {
    await api
      .registerUser(data)
      .then((res) => setUsers([...users, res.response]));
  };

  useEffect(() => {
    api.getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/register"
            element={<RegisterForm onFormSubmit={handleUserRegister} />}
          />
        </Route>
        <Route path="/users" element={<UserManagement users={users} />}></Route>
      </Routes>
    </>
  );
}

export default App;
