import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Secret from "./components/Secret";
import styles from "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
