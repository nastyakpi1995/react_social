import React from "react";
import s from '../Dialogs/Dialogs.module.css';

const DialogsMessage = ({message, key}) => {
    return (
            <div key={key} className={s.message}>{message}</div>
    )
}

export default DialogsMessage;