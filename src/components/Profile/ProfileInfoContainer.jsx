import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {setUserProfileCreator} from "../../redux/usersReducer";
import {useEffect} from "react";

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
        userProfile: state.users.userProfile
})

export default connect(mapStateToProps, {setUserProfile: setUserProfileCreator})(ProfileInfoContainer);
