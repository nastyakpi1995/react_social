import React, {useContext, useState} from "react";
import {useRef} from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {MyContext} from "../../../StoreContext";


const MyPostsContainer = () => {
    const state = useContext(MyContext)
    const [newPostText, setNewPostText] = useState('')
    const textAreaRef = useRef(null)
    const addPost = () => {
        setNewPostText('')
        state.dispatch(addPostActionCreator(newPostText))
    }
    const onPostChange = () => {
        const text = textAreaRef.current.value;
        setNewPostText(text)
    }
    return (
       <MyPosts state={state.getState()} addPost={addPost} onPostChange={onPostChange} textAreaRef={textAreaRef} newPostText={newPostText} />
    )
}

export default MyPostsContainer;