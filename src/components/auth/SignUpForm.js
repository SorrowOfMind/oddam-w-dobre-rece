import React, {useState, useRef, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {signUp} from '../../actions/authActions';

const SignUpForm = () => {
    const [data, setData] = useState({email: '', password: ''});
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const authErr = useSelector(state => state.auth.signupError);
    const auth = useSelector(state => state.firebase.auth);

    const emailInput = useRef(null);
    const pswdInput = useRef(null);
    const pswd2Input = useRef(null);

    useEffect(() => {
        emailInput.current.focus();
    }, []);

    const onFirstEnter = e => {
        if (e.key === 'Enter') e.preventDefault();
        if (e.keyCode === 13 && data.email) {
            pswdInput.current.focus();
        }
    }

    const onSecondEnter = e => {
        if (e.key === 'Enter') e.preventDefault();
        if (e.keyCode === 13 && data.password) {
            pswd2Input.current.focus();
        }
    }

    
    const onThirdEnter = e => {
        if (e.key === 'Enter') e.preventDefault();
        if (e.keyCode === 13 && password2) {
            handleSubmit();
        }
    }

    const handleChange = e => {
        const {value, name} = e.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const validateData = () => {
        let errors = {};
        let isValid = true;

        const {email, password} = data;

        if (!email || !password || !password2) {
            isValid = false;
            errors.empty = 'Pola nie mogą być puste.';
        }

        if (email) {
            const regex = /^[A-Za-z0-9_.+-]{2,}@[A-Za-z0-9-]+\.[a-z]+$/;
            if (!regex.test(email)) {
                isValid = false;
                errors.email = 'Niepoprawny e-mail.';
            }
        }

        if (password) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            if (!regex.test(password)) {
                isValid = false;
                errors.password = 'Hasło musi mieć 6 znaków';
            }
        }

        if (password2 !== password) {
            isValid = false;
            errors.password2 = 'Hasła nie mogą się różnić.'
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateData()) {
            dispatch(signUp(data));
        }
    }

    if (auth.uid) return <Redirect to='/' />
    
    return (
        <div className="form-wrapper">
            <div className="form-inner-container">
                <h1 className="form__title">Załóż konto</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email" className="form__label-1">Email</label>
                        <input
                            className="form__input"
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            ref={emailInput}
                            onKeyDown={onFirstEnter}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="form__label-2">Hasło</label>
                        <input
                            className="form__input"
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            ref={pswdInput}
                            onKeyDown={onSecondEnter}
                            />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password2" className="form__label-3">Powtórz hasło</label>
                        <input
                            className="form__input form__input_last"
                            type="password"
                            id="password2"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            ref={pswd2Input}
                            onKeyDown={onThirdEnter}/>
                    </div>
                    <p className="form__error">{errors.empty}</p>
                    <p className="form__error">{errors.email}</p>
                    <p className="form__error">{errors.password}</p>
                    <p className="form__error">{errors.password2}</p>
                    {authErr ? <div className="form__error">{authErr}</div> : null}
                    <div className="form__btns">
                        <Link to="/login" className="form__link">Zaloguj się</Link>
                        <button type="submit" className="form__submit-btn">
                            <span className="btn__text">Załóż konto</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm;