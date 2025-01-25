import { Routes, Route } from "react-router-dom";
import ReactInterface from "./Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReactInterface />} />
      </Routes>
    </>
  );
}

export default App;
