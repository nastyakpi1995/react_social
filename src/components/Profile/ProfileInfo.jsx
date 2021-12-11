import s from './Profile.module.css';

const ProfileInfo = () => (
    <div className={s.content}>
        <div className={s.contentImg_wrap}>
            <img className={s.contentImg} src={'https://webneel.com/wallpaper/sites/default/files/images/04-2013/island-beach-scenery-wallpaper.jpg'} />
        </div>
        <div>ava + description</div>
    </div>
)
export default ProfileInfo;