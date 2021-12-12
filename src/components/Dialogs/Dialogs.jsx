import React from "react";
import s from '../Dialogs/Dialogs.module.css';
import DialogsItem from "./DialogsItem";
import DialogsMessage from "./DialogsMessage";

const Dialogs = ({state, onChangeMessageText, messageText, onSave}) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {state.dialogs.dialogsArray.map(({name, messages}, index) => (
                <div>
                    <DialogsItem key={index} name={name} index={index} />
                </div>
            ))}
        </div>
        <div>
            <textarea onChange={onChangeMessageText} name="textarea" value={messageText} />
            <button onClick={onSave}>save</button>
            <div className={s.messages}>
                {state.dialogs.messages.map((message, idx) => (
                    <DialogsMessage key={idx} message={message}/>
                ))}
            </div>
        </div>
    </div>
)

export default Dialogs;