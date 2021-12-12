import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = ({dispatch}) => (
    <div className={s.content}>
        <ProfileInfo />
        <MyPostsContainer dispatch={dispatch} />
    </div>
)
export default Profile;