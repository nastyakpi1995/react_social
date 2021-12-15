import Header from "./Header";
import {useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUserCreator} from "../../redux/authReducer";

const HeaderContainer = ({setAuthUser, isAuth}) => {
    useEffect(() => {
        setAuthUser({})
    }, [])
    return (
        <Header isAuth={isAuth} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {setAuthUser: setAuthUserCreator})(HeaderContainer)
