import React from 'react'
import RadioInput from './RadioInput';

const Step1 = () => {
    return (
        <div className="step-1">
           <h1 className="step__title">Zaznacz co chcesz oddać</h1>
            <RadioInput 
                label="ubrania, które nadają się do ponownego użycia"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="reusableClothes"
            />
            <RadioInput 
                label="ubrania do wyrzucenia"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="nonusableClothes"
            />
            <RadioInput
                label="zabawki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="toys"
            />
            <RadioInput 
                label="książki"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
                value="books"
            />
            <RadioInput 
                label="inne"
                labelClass="step-1__label"
                className="step-1__input"
                name="items"
            />
        </div>
    )
}

export default Step1;
