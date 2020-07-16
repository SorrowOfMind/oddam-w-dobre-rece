
import React from 'react';
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';
import TextInput from './TextInput';

type Step3Props = {
    values: Object,
    errors: Object
}

const Step3 = ({values, errors}: StepProps) => {
    const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
    const groups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];
    return (
        <div className="step-3">
            <h1 className="step__title">Lokalizacja*</h1>
            <SelectInput
                className="step-2__input"
                name="localization"
                options={options}
                values={values}
                errorclass="step-error"
                />
            <h2 className="step__subtitle">Komu chcesz pomóc?*</h2>
            <div className="checkbox-group">
                {groups.map(group => {
                    return (
                        <CheckboxInput
                            key={group}
                            name="helpGroups"
                            value={group}
                            className="step-3__checkbox"
                            label={group}
                            labelclass="step-3__group"
                            defaultChecked={values.helpGroups.includes(group)}/>
                    )
                })}
                {errors.helpGroups && <div className="step-error">{errors.helpGroups}</div>}
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
