import React, { Component } from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';

import GiveAwayNote from '../layout/GiveAwayNote';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import GiveAwaySummary from './GiveAwaySummary';

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
            initialValues={{
                items: "reusableClothes", 
                bags: '', 
                localization: '', 
                helpGroups: ['kids'], 
                localizationSpecific: '', 
                street: '',
                city: '',
                postCode: '',
                phone: '',
                date: '',
                time: '',
                note: ''
            }}
            validationSchema={Yup.object({
                items: Yup.string()
                    .required('Proszę wybrać jedną z opcji'),
                bags: Yup.string()
                    .required('Wymagane'),
                localization: Yup.string()
                    .required('Wymagane')
            })}
            onSubmit={(values, {resetForm}) => {
                console.log(values)
                resetForm(values);
            }}
        >{formik => (
            <>
            {step <=4 && <GiveAwayNote title={titles[step-1]}/>}
            <form onSubmit={formik.handleSubmit} className="giveaway-form">
                {step <= 4 && <p className="step-num">Krok {step}/4</p>}
                {step === 1 && <Step1 values={formik.values} />}
                {step === 2 && <Step2 values={formik.values} />}
                {step === 3 && <Step3 values={formik.values} />}
                {step === 4 && <Step4 values={formik.values} />}
                {step === 5 && <GiveAwaySummary values={formik.values}/>}
                <div className="giveaway__btns-wrapper">
                    {step !== 1 && <button type="button" className="giveaway__btn giveaway__btn_prev" onClick={this.decrementStep}>Wstecz</button>}
                    {step <= 4 && <button type="button" className="giveaway__btn giveaway__btn_next" onClick={this.incrementStep}>Dalej</button>}
                    {step === 5 && <button type="submit" className="giveaway__btn giveaway__btn_submit" onClick={this.incrementStep}>Potwierdzam</button>}
                </div>
            </form>
            </>
        )}
            </Formik>
        )
    }
}

export default GiveAwayForm;