import React from 'react'
import TextInput from './TextInput';

const Step1 = () => {
    return (
        <>
           <h1 className="step__title">Zaznacz co chcesz oddać</h1>
            <TextInput 
                label="ubrania, które nadają się do ponownego użycia"
                labelClass="step1__label"
                errorClass=""
                className="step1__input"
                name="items"
                type="radio"
                value="reusableClothes"
            />
            <TextInput 
                label="ubrania do wyrzucenia"
                labelClass="step1__label"
                errorClass=""
                className="step1__input"
                name="items"
                type="radio"
                value="nonusableClothes"
            />
            <TextInput 
                label="zabawki"
                labelClass="step1__label"
                errorClass=""
                className="step1__input"
                name="items"
                type="radio"
                value="toys"
            />
            <TextInput 
                label="książki"
                labelClass="step1__label"
                errorClass=""
                className="step1__input"
                name="items"
                type="radio"
                value="books"
            />
            <TextInput 
                label="inne"
                labelClass="step1__label"
                errorClass=""
                className="step1__input"
                name="items"
                type="radio"
            />
        </>
    )
}

export default Step1;
