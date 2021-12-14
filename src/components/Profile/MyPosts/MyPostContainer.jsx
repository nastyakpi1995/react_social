import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'



const mapStateToProps = (state) => {
    return  ({
        posts: state.profile.posts
    })
}

const MyPostsContainer = connect(mapStateToProps, {addPost: addPostActionCreator})(MyPosts) ;

export default MyPostsContainer ;
