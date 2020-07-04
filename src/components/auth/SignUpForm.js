import React from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {signUp} from '../../actions/authActions';

import TextInput from '../forms/TextInput';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const authErr = useSelector(state => state.auth.signupError);
    const auth = useSelector(state => state.firebase.auth);

    if (auth.uid) return <Redirect to='/' />
    
    return (
        <>
        <div className="form-wrapper">
            <div className="form-inner-container">
                <h1 className="form__title">Załóż konto</h1>
                <Formik
                    initialValues={{email: '', password: '', password2: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Email jest niepoprawny')
                            .required('Wymagane'),
                        password: Yup.string()
                            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Hasło musi mieć 6 znaków')
                            .required('Wymagane'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Hasła nie mogą się różnić.')
                            .required('Wymagane')
                    })}
                    onSubmit={(values, {resetForm}) => {
                        dispatch(signUp(values))
                        resetForm(values);
                    }}
                >{formik => (
                    <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="input-wrapper">
                        <TextInput 
                            label="Email"
                            labelClass="form__label-1"
                            className="form__input"
                            type="email"
                            name="email"
                            errorClass="form__error form__error-signup"
                            autoFocus
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextInput 
                            label="Hasło"
                            labelClass="form__label-2"
                            className="form__input"
                            type="password"
                            name="password"
                            errorClass="form__error form__error-signup"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextInput 
                            label="Powtórz hasło"
                            labelClass="form__label-3"
                            className="form__input"
                            type="password"
                            name="password2"
                            errorClass="form__error form__error-signup"
                        />
                    </div>
                    {authErr ? <div className="form__error">{authErr}</div> : null}
                    <div className="form__btns">
                        <Link to="/login" className="form__link">Zaloguj się</Link>
                        <button type="submit" className="form__submit-btn">
                            <span className="btn__text">Załóż konto</span>
                        </button>
                    </div>
                </form>
                )}
                </Formik>
            </div>
        </div>
        </>
    )
}

export default SignUpForm;