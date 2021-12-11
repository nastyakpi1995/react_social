import React from "react";
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = ({name, index, key}) => {
    return (
        <NavLink key={key} to={`/dialogs/${index + 1}`} className={s.dialog}>{name}</NavLink>
    )
}

export default DialogsItem;