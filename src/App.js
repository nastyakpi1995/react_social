import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import NotFoundRoute from "./components/NotFoundRoute";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const  App = () => {
  return (
    <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Navbar />
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path="/dialogs" element={<DialogsContainer />} />
                    <Route path="*" element={NotFoundRoute} />
                </Routes>
            </div>
    </div>
  );
}

export default App;



