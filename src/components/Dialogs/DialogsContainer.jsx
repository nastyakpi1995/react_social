import React, {useContext, useState} from "react";
import {addNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {MyContext} from "../../StoreContext";

const DialogsContainer = () => {
    const state = useContext(MyContext)
    debugger
    const [messageText, setMessageText] = useState('dfds')
    const onChangeMessageText = (e) => {
        const text = e.target.value
        setMessageText(text)
    }
    const onSave = () => {
        state.dispatch(addNewMessageTextCreator(messageText))
        setMessageText('')
    }

    return (
        <Dialogs state={state.getState()} onSave={onSave} onChangeMessageText={onChangeMessageText} messageText={messageText} />
    )
}

export default DialogsContainer;