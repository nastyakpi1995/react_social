import s from './Header.module.css';

const Header = ({isAuth, toggleAuth}) => {
    const onClick = () => {
        toggleAuth()
    }
    return (
        <header className={s.header}>
            <img className={s.header_img} src={'https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg'} />
            <div>
                {!isAuth ? <div onClick={onClick}>login</div> : <button onClick={onClick}>ddd</button>}
            </div>
        </header>
    )
}
export default Header
