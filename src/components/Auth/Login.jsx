import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/controlsForm/TextArea";
import {required} from "../../utils/validators";
import {setAuthUserCreator} from "../../redux/authReducer";
import {connect} from "react-redux";

let Login = (props, {setAuthUser}) => {

    const onSubmit = (values) => {
        setAuthUser(values)
        console.log(values)
    }
    return (
        <div>
            <div>
                Login
            </div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="loginField" component={Input} validate={[required]} type={"text"} placeholder={'login'} />
            </div>
            <div>
                <Field name="password" type="text" component={Input} validate={[required]} placeholder={'password'} />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" validate={[required]} component={Input} />
            </div>
            <button>submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setAuthUser: setAuthUserCreator})(Login)
