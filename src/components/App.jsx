import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
// import "../blocks/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
