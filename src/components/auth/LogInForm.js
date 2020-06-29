import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {logIn} from '../../actions/authActions';

const LogInForm = () => {
    const [data, setData] = useState({email: '', password: ''});

    const authErr = useSelector(state => state.auth.loginError);
    const auth = useSelector(state => state.firebase.auth);
    const dispatch = useDispatch();

    const handleChange = e => {
        const {value, name} = e.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const {email, password} = data;
        if (email && password) {
            dispatch(logIn(data));
        }
    }

    if (auth.uid) return <Redirect to ='/' />

    return (
        <div className="form-wrapper">
            <div className="form-inner-container">
                <h1 className="form__title">Zaloguj się</h1>
                <form className="form" onSubmit={handleLogIn}>
                    <div className="input-wrapper">
                        <label htmlFor="email" className="form__label-1">Email</label>
                        <input
                            className="form__input"
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="form__label-2">Hasło</label>
                        <input
                            className="form__input"
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}/>
                    </div>
                    {authErr ? <div className="form__error">{authErr}</div> : null}
                    <div className="form__btns form__login_btns">
                        <Link to="/signup" className="form__link">Załóż konto</Link>
                        <button type="submit" className="form__submit-btn">
                            <span className="btn__text">Zaloguj się</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogInForm;
