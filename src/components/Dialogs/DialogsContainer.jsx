import React from "react";
import {addNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    dialogs: state.message
})

const DialogsContainer =  connect(mapStateToProps, {onSave: addNewMessageTextCreator})(Dialogs);

export default DialogsContainer
