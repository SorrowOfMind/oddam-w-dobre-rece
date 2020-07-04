import React, { Component } from 'react';

import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import Step1 from './Step1';

class GiveAwayForm extends Component {
    state = {
        step: 1,
    }
    render() {
        return (
            <Formik
            initialValues={{items: '', email: '', msg: ''}}
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
                console.log(values)
                resetForm(values);
            }}
        >{formik => (
            <form onSubmit={formik.handleSubmit} className="giveaway-form">
                <Step1 /> 
            </form>
        )}
            </Formik>
        )
    }
}

export default GiveAwayForm;