import Header from "./Header";
import {connect} from "react-redux";
import { toggleAuthCreator} from "../../redux/authReducer";

const HeaderContainer = ({ isAuth, toggleAuth}) => {

    return (
        <Header isAuth={isAuth} toggleAuth={toggleAuth} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { toggleAuth: toggleAuthCreator})(HeaderContainer)
