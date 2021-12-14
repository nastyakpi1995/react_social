import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = ({posts, addPost}) => {
    const [newPostText, setNewPostText] = useState('')

    const addPostClick = () => {
        setNewPostText('')
        addPost(newPostText)
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        setNewPostText(text)
    }
    return (
        <div className={s.content}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={newPostText}/>
                <button onClick={addPostClick}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts.map(({text, likeCount}, idx) => (
                    <Post key={idx} message={text} likeCount={likeCount}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts;
