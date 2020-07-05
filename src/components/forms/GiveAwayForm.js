import React, { Component } from 'react';

import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import GiveAwayNote from '../layout/GiveAwayNote';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

class GiveAwayForm extends Component {
    state = {
        step: 1,
        titles: [
            "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
            "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
            "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
            "Podaj adres oraz termin odbioru rzeczy."
        ],
    }

    incrementStep = () => {
        this.setState(prevState => {
            if (prevState.step <= 6) return {step: prevState.step + 1}
        })
    }

    decrementStep = () => {
        this.setState(prevState => {
            if (prevState.step > 1) return {step: prevState.step - 1}
        })
    }

    render() {
        const {step, titles} = this.state;
        return (
            <Formik
            initialValues={{items: "reusableClothes", bags: '', localization: '', helpGroups: ['kids'], localizationSpecific: ''}}
            // validationSchema={Yup.object({
            //     items: Yup.string()
            //         .required('Proszę wybrać jedną z opcji'),
            //     // email: Yup.string()
            //     //     .email('Email jest niepoprawny')
            //     //     .required('Wymagane'),
            //     // msg: Yup.string()
            //     //     .min(120, 'Wiadomość musi mieć, co najmniej 120 znaków.')
            //     //     .required('Wymagane')
            // })}
            onSubmit={(values, {resetForm}) => {
                console.log(values)
                resetForm(values);
            }}
        >{formik => (
            <>
            <GiveAwayNote title={titles[step-1]}/>
            <form onSubmit={formik.handleSubmit} className="giveaway-form">
                <p className="step-num">Krok {step}/4</p>
                {step === 1 && <Step1 values={formik.values} />}
                {step === 2 && <Step2 values={formik.values} />}
                {step === 3 && <Step3 values={formik.values} />}
                {step === 4 && <Step4 values={formik.values} />}
                <div className="giveaway__btns-wrapper">
                    {step !== 1 && <button type="button" className="giveaway__btn giveaway__btn_prev" onClick={this.decrementStep}>Wstecz</button>}
                    <button type="button" className="giveaway__btn giveaway__btn_next" onClick={this.incrementStep}>Dalej</button>
                </div>
            </form>
            </>
        )}
            </Formik>
        )
    }
}

export default GiveAwayForm;