import React, {useState} from "react";
import s from '../Dialogs/Dialogs.module.css';
import DialogsItem from "./DialogsItem";
import DialogsMessage from "./DialogsMessage";
import {Navigate} from "react-router-dom";

const Dialogs = ({dialogs, onSave, isAuth}) => {
    const [messageText, setMessageText] = useState('')
    const changeMessageText = (e) => {
        const text = e.target.value
        setMessageText(text)
    }
    const saveClick = () => {
        onSave(messageText)
        setMessageText('')
    }
    if (isAuth) return (<Navigate to={'/login'} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.dialogsArray.map(({name, messages}, index) => (
                    <div>
                        <DialogsItem key={index} name={name} index={index} />
                    </div>
                ))}
            </div>
            <div>
                <textarea onChange={changeMessageText} name="textarea" value={messageText} />
                <button onClick={saveClick}>save</button>
                <div className={s.messages}>
                    {dialogs.messages.map((message, idx) => (
                        <DialogsMessage key={idx} message={message}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
