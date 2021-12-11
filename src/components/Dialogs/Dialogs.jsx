import React, {useState} from "react";
import s from '../Dialogs/Dialogs.module.css';
import DialogsItem from "./DialogsItem";
import DialogsMessage from "./DialogsMessage";
import {addNewMessageTextCreator} from "../../redux/messageReducer";



const Dialogs = ({state, dispatch}) => {
    const [messageText, setMessageText] = useState('dfds')
    const onChangeMessageText = (e) => {
        const text = e.target.value
        setMessageText(text)
    }
    const onSave = () => {
        dispatch(addNewMessageTextCreator(messageText))
        setMessageText('')
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogsArray.map(({name, messages}, index) => (
                    <div>
                        <DialogsItem key={index} name={name} index={index} />
                    </div>
                ))}
            </div>
            <div>
                <textarea onChange={onChangeMessageText} name="textarea" value={messageText} />
                <button onClick={onSave}>save</button>
                <div className={s.messages}>
                    {state.messages.map((message, idx) => (
                        <DialogsMessage key={idx} message={message}/>
                    ))}
                </div>      
            </div>
          
        </div>
    )
}

export default Dialogs;