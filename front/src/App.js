import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import styles from "./index.css";




function App() {





  return (
    <div className="App">
      <Navbar />
      <Grid />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
