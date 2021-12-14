import Header from "./Header";
import {useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUserCreator} from "../../redux/authReducer";

const HeaderContainer = ({setAuthUser}) => {
    useEffect(() => {
        setAuthUser({})
    }, [])
    return (
        <Header />
    )
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {setAuthUser: setAuthUserCreator})(HeaderContainer)
