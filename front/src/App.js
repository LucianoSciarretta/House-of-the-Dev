import { Route, Routes } from "react-router-dom";
import Details from "./commons/Details";
import CreateProperty from "./components/AdminRoutes.js/CreateProperty";
import UsersGrid from "./components/AdminRoutes.js/UsersGrid";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Secret from "./components/Secret";
import Sidebar from "./components/Sidebar";
import styles from "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container-general">
        <Sidebar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/details" element={<Details />} />
          <Route path="/create-property"  element={<CreateProperty />} />
          <Route path="delete-user"  element={<UsersGrid />}/>
          <Route path="show-users"  element={<UsersGrid />} />
          <Route path="/" element={<Grid />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
