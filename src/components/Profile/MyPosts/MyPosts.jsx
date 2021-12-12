import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = ({state, onPostChange, addPost, textAreaRef, newPostText}) => {
    return (
        <div className={s.content}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={newPostText} ref={textAreaRef}/>
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