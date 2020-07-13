import React from 'react';

import TextInput from './TextInput';
import TextareaInput from './TextareaInput';

const Step4 = () => {
    const addressData = [
        {label: 'Ulica', name: "street"},
        {label: 'Miast', name: "city"},
        {label: 'Kod pocztowy', name: "postCode"},
        {label: 'Numer telefonu', name: "phone"},
    ]
    return (
        <div className="step-4">
            <h1 className="step__title step-4__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
            <div className="step-4-wrapper">
                <div className="step-4__address">
                    <h2 className="step__subtitle step-4__subtitle">Adres odbioru</h2>
                    {addressData.map(input => {
                        return (
                        <div className="step-4-input-wrapper" key={input.name}>
                            <TextInput
                                label={input.label}
                                labelClass="step-4__label"
                                name={input.name}
                                type="text"
                                className="step-4__txt-input"
                                errorClass="step-error"/>
                        </div>)
                    })}
                </div>
                <div className="step-4__delivery-date">
                    <h2 className="step__subtitle step-4__subtitle">Termin odbioru</h2>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Data"
                            labelClass="step-4__label"
                            name="date"
                            type="date"
                            className="step-4__txt-input"
                            errorClass="step-error"/>
                    </div>
                    <div className="step-4-input-wrapper">
                        <TextInput
                            label="Godzina"
                            labelClass="step-4__label"
                            name="time"
                            type="time"
                            className="step-4__txt-input"
                            errorClass="step-error"/>
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
