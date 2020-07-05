import React from 'react';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';
import TextInput from './TextInput';
import {Field} from 'formik';

const Step3 = ({values}) => {
    const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]
    return (
        <div className="step-3">
            <h1 className="step__title">Lokalizacja:</h1>
            <SelectInput
                className="step-2__input"
                name="localization"
                options={options}
                values={values}/>
            <h2 className="step__subtitle">Komu chcesz pomóc?</h2>
            <div className="checkbox-group">
                <CheckboxInput
                    name="helpGroups"
                    value="kids"
                    className="step-3__checkbox"
                    label="dzieciom"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("kids")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="single moms"
                    className="step-3__checkbox"
                    label="samotnym matkom"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("single moms")}
                    />
                <CheckboxInput
                    name="helpGroups"
                    value="homeless"
                    className="step-3__checkbox"
                    label="bezdomnym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("homeless")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="handicapped"
                    className="step-3__checkbox"
                    label="niepełnosprawnym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("handicapped")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="elders"
                    className="step-3__checkbox"
                    label="osobom starszym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("elders")}/>
            </div>
            <h2 className="step__subtitle">Wpisz nazwę konkretnej organizacji? (opcjonalnie)</h2>
            <TextInput 
                name="localizationSpecific"
                className="step-3__txt-input"
                />
        </div>
    )
}

export default Step3;
