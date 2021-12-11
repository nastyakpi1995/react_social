import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useRef} from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";


const MyPosts = ({state, dispatch}) => {
    const textAreaRef = useRef(null)
    const addPost = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        const text = textAreaRef.current.value;
        dispatch(updateNewPostTextCreator(text))

    }
    console.log('dydddd',state)
    return (
        <div className={s.content}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={state.myProfile.newPostText} ref={textAreaRef}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {state.myProfile.posts.map(({text, likeCount}, idx) => (
                    <Post key={idx} message={text} likeCount={likeCount}/>
                ))}
            </div>

        </div>
    )
}

export default MyPosts;