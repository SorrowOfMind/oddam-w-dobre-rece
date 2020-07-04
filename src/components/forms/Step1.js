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
                value="reusableClothes"
                defaultChecked={values.items === "reusableClothes"}
            />
            <RadioInput 
                label="ubrania do wyrzucenia"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="nonusableClothes"
                defaultChecked={values.items === "nonusableClothes"}
            />
            <RadioInput
                label="zabawki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="toys"
                defaultChecked={values.items === "toys"}
            />
            <RadioInput 
                label="książki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="books"
                defaultChecked={values.items === "books"}
            />
            <RadioInput 
                label="inne"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="others"
                defaultChecked={values.items === "others"}
            />
            </Field>
        </div>
    )
}

export default Step1;
