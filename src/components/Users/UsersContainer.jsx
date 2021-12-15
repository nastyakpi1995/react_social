import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserCreator,
    setUsersCreator,
    toggleFollowUserCreator,
    toggleFollowUserThunkCreator
} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    followLoaderArray: state.users.followLoaderArray
})

const UsersContainer = ({setUsers, toggleFollowUser, users, followLoaderArray, followUser, toggleFollowUserThunk}) => {
    useEffect(() => {
        setUsers()
    }, [])
    return (
        <Users toggleFollowUser={toggleFollowUser}
               users={users}
               toggleFollowUserThunkCreator={toggleFollowUserThunk}
               followLoaderArray={followLoaderArray}/>
    )
}
export default connect(mapStateToProps, {setUsers: setUsersCreator, toggleFollowUserThunk: toggleFollowUserThunkCreator, toggleFollowUser: toggleFollowUserCreator, followUser: followUserCreator})(UsersContainer);
