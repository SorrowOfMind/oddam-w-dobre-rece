import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import GiveAwayNote from '../layout/GiveAwayNote';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import GiveAwaySummary from './GiveAwaySummary';
import GiveAwayThanks from '../layout/GiveAwayThanks';
import { giveAway } from '../../actions/giveawayActions';

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

    Step1Schema = Yup.object().shape({
        items: Yup.string().required('Wymagane')
    });

    Step2Schema = Yup.object().shape({
        bags: Yup.string().required('Wymagane')
    });

    Step3Schema = Yup.object().shape({
        localizationSpecific: Yup.string(),
        helpGroups: Yup.array().min(1, 'Wymagana co najmniej 1 grupa').required('Wymagane'),
        localization: Yup.string().when('localizationSpecific', function(val) {if (val == null) return this.required('Wymagane miasto lub organizacja')})
    });

    Step4Schema = Yup.object().shape({
        street: Yup.string().min(2, 'Nazwa niepoprawna').required('Wymagane'),
        city: Yup.string().min(2, 'Nazwa niepoprawna').required('Wymagane'),
        postCode: Yup.string()
                .matches(/^[0-9]{2}-[0-9]{3}$/, 'Kod pocztowy w formacie xx-xxx')
                .required('Wymagane'),
        phone: Yup.string()
                .matches(/[0-1]{9}/, '9 cyfr')
                .required('Wymagane'),
        date: Yup.string().required('Wymagane'),
        time: Yup.string().required('Wymagane')
    });

    schemaArray = [this.Step1Schema, this.Step2Schema, this.Step3Schema, this.Step4Schema]

    render() {
        const {step, titles} = this.state;
        return (
            <Formik
            initialValues={{
                items: "ubrania, które nadają się do ponownego użycia", 
                bags: '', 
                localization: '', 
                helpGroups: ['dzieciom'], 
                localizationSpecific: '', 
                street: '',
                city: '',
                postCode: '',
                phone: '',
                date: '',
                time: '',
                note: ''
            }}
            validationSchema={this.schemaArray[step-1]}
            onSubmit={async (values, {resetForm}) => {
                if (step === 5) {
                    await this.props.giveAway(values, this.props.uid);
                    if (this.props.giveawayStatus) {
                        this.incrementStep();
                        resetForm(values);
                    }
                } else {
                    this.incrementStep()
                }
            }}
        >{formik => (
            <>
            {step <=4 && <GiveAwayNote title={titles[step-1]}/>}
            <form onSubmit={formik.handleSubmit} className="giveaway-form">
                {step <= 4 && <p className="step-num">Krok {step}/4</p>}
                {step === 1 && <Step1 values={formik.values} />}
                {step === 2 && <Step2 values={formik.values} />}
                {step === 3 && <Step3 values={formik.values} errors={formik.errors}/>}
                {step === 4 && <Step4 />}
                {step === 5 && <GiveAwaySummary values={formik.values} />}
                {step === 6 && <GiveAwayThanks />}
                <div className="giveaway__btns-wrapper">
                    {(step !== 1 && step <= 5) && <button type="button" className="giveaway__btn giveaway__btn_prev" onClick={this.decrementStep}>Wstecz</button>}
                    {step <= 5 && <button type="submit" className="giveaway__btn giveaway__btn_next">{step === 5 ? "Potwierdź" : "Dalej"}</button>}
                </div>
            </form>
            </>
        )}
            </Formik>
        )
    }
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid,
        giveawayStatus: state.giveaway.giveawaySuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        giveAway: (data, uid) => dispatch(giveAway(data, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiveAwayForm);