import React from 'react';
import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import TextInput from './TextInput';
import TextareaInput from './TextareaInput';

const ContactForm = () => {

    const postMsg = async values => {
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        const params = {
            name: values.name,
            email: values.email,
            message: values.msg
        }
        const options = {
            headers: {"Content-Type": "application/json"}
        }

        try {
            let res = await axios.post(url, params, options);
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Formik
            initialValues={{name: '', email: '', msg: ''}}
            validationSchema={Yup.object({
                name: Yup.string()
                    .trim().matches(/^[A-Za-z]+$/, 'Imię musi być jednym słowem.')
                    .required('Wymagane'),
                email: Yup.string()
                    .email('Email jest niepoprawny')
                    .required('Wymagane'),
                msg: Yup.string()
                    .min(120, 'Wiadomość musi mieć, co najmniej 120 znaków.')
                    .required('Wymagane')
            })}
            onSubmit={(values, {resetForm}) => {
                postMsg(values);
                resetForm(values);
            }}
        >{formik => (
                <form onSubmit={formik.handleSubmit} className="contact-form">
                <div className="contact-inputs-wrapper">
                <div className="input-wrapper input-wrapper__name">
                    <TextInput 
                        label="Wpisz swoje imię"
                        labelclass="contact__label"
                        errorclass="contact__error"
                        className="contact__input"
                        name="name"
                        type="text"
                        placeholder="Krzysztof"
                    />
                </div>
                <div className="input-wrapper input-wrapper__email">
                    <TextInput 
                        label="Wpisz swój email"
                        labelclass="contact__label"
                        errorclass="contact__error"
                        className="contact__input"
                        name="email"
                        type="email"
                        placeholder="abc@cos.com"
                    />
                </div>
                </div>
                <div className="textarea-wrapper">
                    <TextareaInput 
                        label="Wpisz swoją wiadomość"
                        labelclass="contact__label"
                        name="msg"
                        className="contact__message contact__input"
                        errorclass="contact__error  msg__error"
                        cols="30"
                        row="10"
                        placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla eligendi aliquid doloremque, dignissimos id sequi! Deserunt delectus doloremque quae veniam animi. Deserunt delectus doloremque quae veniam animi."
                    />
                </div>
                <button type="submit" className="form__submit-btn">
                    <span className="btn__text">Wyślij</span>
                </button>
            </form>
            )}
        </Formik>
    )
}

export default ContactForm;



