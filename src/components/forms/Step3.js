import React from 'react';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';
import TextInput from './TextInput';

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
                    value="dzieciom"
                    className="step-3__checkbox"
                    label="dzieciom"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("dzieciom")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="samotnym matkom"
                    className="step-3__checkbox"
                    label="samotnym matkom"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("samotnym matkom")}
                    />
                <CheckboxInput
                    name="helpGroups"
                    value="bezdomnym"
                    className="step-3__checkbox"
                    label="bezdomnym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("bezdomnym")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="hiepełnosprawnym"
                    className="step-3__checkbox"
                    label="niepełnosprawnym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("iepełnosprawnym")}/>
                <CheckboxInput
                    name="helpGroups"
                    value="osobom starszym"
                    className="step-3__checkbox"
                    label="osobom starszym"
                    labelClass="step-3__group"
                    defaultChecked={values.helpGroups.includes("osobom starszym")}/>
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
