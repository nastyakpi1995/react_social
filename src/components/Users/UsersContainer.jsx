import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followUserCreator, setUsersCreator, toggleFollowUserCreator} from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    followLoaderArray: state.users.followLoaderArray
})

const UsersContainer = ({setUsers, toggleFollowUser, users, followLoaderArray, followUser}) => {
    useEffect(() => {
        setUsers()
    }, [])
    return (
        <Users toggleFollowUser={toggleFollowUser} setUsers={setUsers} users={users} followLoaderArray={followLoaderArray} followUser={followUser} />
    )
}
export default connect(mapStateToProps, {setUsers: setUsersCreator, toggleFollowUser: toggleFollowUserCreator, followUser: followUserCreator})(UsersContainer);
