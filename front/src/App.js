import { Route, Routes } from "react-router-dom";
import Details from "./commons/Details";
import CreateProperty from "./components/Admin.js/CreateProperty";
import UsersGrid from "./components/Admin.js/UsersGrid";
import Favorites from "./components/Favorites";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Search from "./components/Search";
import Secret from "./components/Secret";
import Sidebar from "./components/Sidebar";
import MoreValue from "./components/MoreValue/MoreValue.jsx"
import styles from "./index.css";
import LessValue from "./components/LessValue/LessValue";
import Rooms from "./components/rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container-general">
        <Sidebar />
        {/* <Grid /> */}
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/details" element={<Details />} />
          <Route path="/create-property" element={<CreateProperty />} />
          <Route path="/delete-user" element={<UsersGrid />} />
          <Route path="/show-users" element={<UsersGrid />} />
          <Route path="Search-Component" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/EditProperty/:id" element={<CreateProperty />} />
          <Route path="/moreValue" element={<MoreValue />} />
          <Route path="/lessValue" element={<LessValue />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
