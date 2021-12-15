import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {setUserProfileCreator} from "../../redux/usersReducer";
import React, {useEffect} from "react";

const ProfileInfoContainer = ({setUserProfile, userProfile, isAuth}) => {
    const routes = useParams()

    useEffect(() => {
        const currentUserId = routes?.id

        setUserProfile(currentUserId)
    }, [])
    if (isAuth) return (<Navigate to={'/login'} />)

    return (
        <ProfileInfo userProfile={userProfile} />
    )
}

const mapStateToProps = state => ({
        userProfile: state.users.userProfile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserProfile: setUserProfileCreator})(ProfileInfoContainer);
