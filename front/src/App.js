import { Route, Routes } from "react-router-dom";
import Details from "./commons/Details/Details";
import CreateProperty from "./components/CreateProperty/CreateProperty";
import UsersGrid from "./components/UsersGrid/UsersGrid";
import Favorites from "./components/Favorites/Favorites.jsx";
import Grid from "./components/Grid/Grid";
// import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Secret from "./components/Secret/Secret";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MoreValue from "./components/MoreValue/MoreValue.jsx";
// import styles from "./componentsStyles/App.css";
import LessValue from "./components/LessValue/LessValue";
import Rooms from "./components/rooms/Rooms";
import MailForm from "./components/MailForm/MailForm";
import styles from "./index.css"
function App() {
  return (
    <div className="App">
    
        <Navbar />
      
      <div className="container-app">
        <Sidebar />
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
          <Route path="/MailForm" element={<MailForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
