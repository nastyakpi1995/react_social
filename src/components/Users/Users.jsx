import React, { useState} from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
const Users = ({users, toggleFollowUser, followLoaderArray, toggleFollowUserThunkCreator}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [startArray, setStartArray] = useState(0)


    const editCurrentPage = (idx) => {
        setCurrentPage(idx)
        setStartArray(idx + 3)
    }
    const followUserClick = (id) => {
        toggleFollowUserThunkCreator(id)
    }

    const paginationPage = Math.round(users.length / 3)
    return (
        <div>
            <div className={s.pagination}>
                {Array(paginationPage).fill('e').map((p, index) => (
                    <button
                        onClick={() => editCurrentPage(index)}
                        className={index === currentPage && s.paginationItem}>
                        {index + 1}
                    </button>
                ))}
            </div>
            {users.slice(startArray, startArray + 3).map((user) => (
                <div key={user.id}>
                    <NavLink to={`/profile/${user.id}`} >
                        <div className={s.image}>
                            <img src={user.img} alt=""/>
                        </div>
                    </NavLink>
                    <div>
                        {user.isFollow ? <button disabled={followLoaderArray.some(el => user.id === el)} onClick={() => followUserClick(user.id)}>unfollow</button> : <button onClick={() => toggleFollowUser(user.id)}>follow</button>}
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Users
