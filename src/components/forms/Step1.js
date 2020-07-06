import React from 'react';
import { Field } from "formik";

import RadioInput from './RadioInput';

const Step1 = ({values}) => {
    return (
        <div className="step-1">
           <h1 className="step__title">Zaznacz co chcesz oddać</h1>
           <Field component="div" name="items">
            <RadioInput 
                label="ubrania, które nadają się do ponownego użycia"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="ubrania, które nadają się do ponownego użycia"
                defaultChecked={values.items === "ubrania, które nadają się do ponownego użycia"}
            />
            <RadioInput 
                label="ubrania do wyrzucenia"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="ubrania do wyrzucenia"
                defaultChecked={values.items === "ubrania do wyrzucenia"}
            />
            <RadioInput
                label="zabawki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="zabawki"
                defaultChecked={values.items === "zabawki"}
            />
            <RadioInput 
                label="książki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="książki"
                defaultChecked={values.items === "książki"}
            />
            <RadioInput 
                label="inne"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="inne"
                defaultChecked={values.items === "inne"}
            />
            </Field>
        </div>
    )
}

export default Step1;
