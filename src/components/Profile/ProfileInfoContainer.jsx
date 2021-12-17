import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {setUserProfileCreator} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {compose} from "redux";



const ProfileInfoContainer = ({setUserProfile, userProfile}) => {
    const routes = useParams()

    useEffect(() => {
        const currentUserId = routes?.id

        setUserProfile(currentUserId)
    }, [])

    return (
        <ProfileInfo userProfile={userProfile} />
    )
}

const mapStateToProps = state => ({
    userProfile: state.users.userProfile,
})

const AuthRedirectProfile = compose(
    connect(mapStateToProps, {setUserProfile: setUserProfileCreator}),
    withAuthRedirect
)(ProfileInfoContainer)

export default AuthRedirectProfile;
