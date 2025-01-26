import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import RegisterForm from "./Login/RegisterForm/RegisterForm";
import LoginForm from "./Login/LoginForm/LoginForm";
import UserManagement from "./UserManagement/UserManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user-management_app" element={<Login />}>
          <Route path="/user-management_app" element={<LoginForm />} />
          <Route
            path="/user-management_app/register"
            element={<RegisterForm />}
          />
        </Route>
        <Route
          path="/user-management_app/users"
          element={<UserManagement />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
