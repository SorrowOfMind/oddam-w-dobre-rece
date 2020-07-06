import React from 'react';

import TextInput from './TextInput';
import TextareaInput from './TextareaInput';

const Step4 = ({values}) => {
    console.log(values)
    return (
        <div className="step-4">
            <h1 className="step__title step-4__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
            <div className="step-4-wrapper">
                <div className="step-4__address">
                    <h2 className="step__subtitle step-4__subtitle">Adres odbioru</h2>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Ulica"
                            labelClass="step-4__label"
                            name="street"
                            type="text"
                            className="step-4__txt-input"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Miasto"
                            labelClass="step-4__label"
                            name="city"
                            type="text"
                            className="step-4__txt-input"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Kod pocztowy"
                            labelClass="step-4__label"
                            name="postCode"
                            type="text"
                            className="step-4__txt-input"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Numer teleonu"
                            labelClass="step-4__label"
                            name="phone"
                            type="text"
                            className="step-4__txt-input"/>
                    </div>
                </div>
                <div className="step-4__delivery-date">
                    <h2 className="step__subtitle step-4__subtitle">Termin odbioru</h2>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Data"
                            labelClass="step-4__label"
                            name="date"
                            type="date"
                            className="step-4__txt-input"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Godzina"
                            labelClass="step-4__label"
                            name="time"
                            type="time"
                            className="step-4__txt-input"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextareaInput
                            label="Uwagi dla kuriera"
                            labelClass="step-4__label step-4__label_last"
                            name="note"
                            className="step-4__txt-input step-4__txtarea-input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step4
