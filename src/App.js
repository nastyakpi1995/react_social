import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import NotFoundRoute from "./components/NotFoundRoute";

const  App = ({state, dispatch}) => {
  return (
    <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Navbar />
                <Routes>
                    <Route path='/profile' element={<Profile dispatch={dispatch} state={state} />} />
                    <Route path="/dialogs" element={<Dialogs state={state} dispatch={dispatch} />} />
                    <Route path="*" element={NotFoundRoute} />
                </Routes>
            </div>
    </div>
  );
}

export default App;



