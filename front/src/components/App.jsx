import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import RegisterForm from "./Login/RegisterForm/RegisterForm";
import LoginForm from "./Login/LoginForm/LoginForm";
import UserManagement from "./UserManagement/UserManagement";
import { useEffect } from "react";
import api from "../utils/Api.js";

function App() {
  useEffect(() => {
    api().then((data) => console.log(data));
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
        <Route path="/users" element={<UserManagement />}></Route>
      </Routes>
    </>
  );
}

export default App;
