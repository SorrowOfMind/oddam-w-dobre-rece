import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

const validate = (values) => {
    let errors = {};
    const {name, email, msg} = values;

    if (!name) {
        errors.name = "Wymagane";
    } else if (name) {
        let checkWord = name
            .trim()
            .split(' ');
        if (checkWord.length > 1) {
            errors.name = "Imię musi być jednym słowem.";
        }
    }

    if (!email) {
        errors.email = "Wymagane";
    } else if (email) {
        const regex = /^[A-Za-z0-9_.+-]{2,}@[A-Za-z0-9-]+\.[a-z]+$/;
        if (!regex.test(email)) {
            errors.email = 'Niepoprawny e-mail.';
        }
    }

    if (!msg) {
        errors.msg = "Wymagane";
    } else if (msg.length < 120) {
        errors.msg = 'Wiadomość musi mieć, co najmniej 120 znaków.'
    }
    console.log(errors);
    return errors;
}

const ContactForm = () => {

    const postMsg = async (values) => {
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        const params = {
            name: values.name,
            email: values.email,
            msg: values.msg
        }
        const options = {
            headers: {"Content-Type": "application/json"}
        }

        let res = await axios.post(url, params, options);
        console.log(res.data);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            msg: ''
        },
        validate,
        onSubmit: values => {
            postMsg(values)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="contact-form">
            <div className="input-wrapper input-wrapper__name">
                
                <label htmlFor="name" className="contact__label">Wpisz swoje imię</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__input"
                    placeholder="Krzysztof"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name
                    ? <p className="contact__error">{formik.errors.name}</p>
                    : null}
            </div>
            <div className="input-wrapper input-wrapper__email">
               
                <label htmlFor="email" className="contact__label">Wpisz swój email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__input"
                    placeholder="abc@cos.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}/>
                     {formik.touched.email && formik.errors.email
                    ? <p className="contact__error">{formik.errors.email}</p>
                    : null}
            </div>
            <div className="textarea-wrapper">
                <label htmlFor="msg" className="contact__label">Wpisz swoją wiadomość</label>
                <textarea
                    name="msg"
                    id="msg"
                    cols="30"
                    row="10"
                    className="contact__message contact__input"
                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla eligendi aliquid doloremque, dignissimos id sequi! Deserunt delectus doloremque quae veniam animi mollitia."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msg}/>
                    {formik.touched.msg && formik.errors.msg
                    ? <p className="contact__error msg__error">{formik.errors.msg}</p>
                    : null}
            </div>
            <button type="submit" className="form__submit-btn">
                <span className="btn__text">Wyślij</span>
            </button>
        </form>
    )
}

export default ContactForm;



