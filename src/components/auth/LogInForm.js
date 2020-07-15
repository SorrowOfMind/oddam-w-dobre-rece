import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Formik} from 'formik';
import {logIn} from '../../actions/authActions';
import TextInput from '../forms/TextInput';


const LogInForm = () => {
    const authErr = useSelector(state => state.auth.loginError);
    const auth = useSelector(state => state.firebase.auth);
    const dispatch = useDispatch();

    if (auth.uid) return <Redirect to ='/' />

    return (
        <div className="form-wrapper">
            <div className="form-inner-container">
                <h1 className="form__title">Zaloguj się</h1>
                <Formik
                  initialValues={{email: '', password: ''}}
                  onSubmit={(values, {resetForm}) => {
                      dispatch(logIn(values));
                      resetForm(values);
                  }}>{formik => (
                    <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="input-wrapper">
                        <TextInput 
                            label="Email"
                            labelclass="form__label-1"
                            name="email"
                            type="email"
                            className="form__input"
                        />
                    </div>
                    <div className="input-wrapper">
                        <TextInput 
                            label="Hasło"
                            labelclass="form__label-2"
                            type="password"
                            name="password"
                            className="form__input"
                        />
                    </div>
                    {authErr ? <div className="form__error">{authErr}</div> : null}
                    <div className="form__btns form__login_btns">
                        <Link to="/signup" className="form__link">Załóż konto</Link>
                        <button type="submit" className="form__submit-btn">
                            <span className="btn__text">Zaloguj się</span>
                        </button>
                    </div>
                </form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default LogInForm;
