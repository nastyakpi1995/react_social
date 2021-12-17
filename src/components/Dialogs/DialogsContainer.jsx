import React from "react";
import {addNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogs: state.message,
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {onSave: addNewMessageTextCreator})
)(Dialogs)
