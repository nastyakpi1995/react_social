import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import NotFoundRoute from "./components/NotFoundRoute";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Auth/Login";

const  App = () => {
  return (
    <div className="app-wrapper">
            <HeaderContainer />
            <div className="content-wrapper">
                <Navbar />
                <Routes>
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path="/dialogs" element={<DialogsContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={NotFoundRoute} />
                </Routes>
            </div>
    </div>
  );
}

export default App;



