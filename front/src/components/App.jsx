import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login";
import RegisterForm from "./Login/RegisterForm/RegisterForm";
import LoginForm from "./Login/LoginForm/LoginForm";
import UserManagement from "./UserManagement/UserManagement";
import { UsersContext } from "../contexts/UsersContext.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/Api.js";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userChecked, setUserChecked] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const navigate = useNavigate();

  const handleCheckAll = async (e) => {
    await api
      .checkAllUsers(!e.currentTarget.checked)
      .then(() => setCheckedAll(!checkedAll));
  };

  const handleCheckUser = async (e) => {
    await api.checkUser(e.currentTarget.id).then(() => {
      setUserChecked(!userChecked);
    });
  };

  const handleUserRegister = async (data) => {
    await api
      .registerUser(data)
      .then((res) => {
        setUsers([...users, res.response]);
        toast.success(res.message);
      })
      .then(() => navigate("/"))
      .catch((err) => err.then((res) => toast.error(res.message)));
  };

  const handleUserLogin = async (data) => {
    await api
      .loginUser(data)
      .then((res) => {
        setCurrentUser(res.response);
        toast.success(res.message);
      })
      .then(() => navigate("/users"))
      .catch((err) => err.then((res) => toast.error(res.message)));
  };

  return (
    <>
      <UsersContext.Provider
        value={{
          users,
          checkedAll,
          userChecked,
          setUsers,
          handleCheckUser,
          handleCheckAll,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />}>
            <Route
              path="/"
              element={<LoginForm onLoginSubmit={handleUserLogin} />}
            />
            <Route
              path="/register"
              element={<RegisterForm onFormSubmit={handleUserRegister} />}
            />
          </Route>
          <Route path="/users" element={<UserManagement />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          closeOnClick
          theme="colored"
        />
      </UsersContext.Provider>
    </>
  );
}

export default App;
