import React from 'react';
import SelectInput from './SelectInput';

const Step2 = ({values, errors}) => {
    const options = [1,2,3,4,5];
    return (
        <div className="step-2">
           <h1 className="step__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
           <h2 className="step-2__label">Liczba 60l worków: </h2>
           <SelectInput
                className="step-2__input"
                name="bags"
                options={options}
                values={values}
                errorclass="step-error"
                errors={errors.bags}
           />
        </div>
    )
}

export default Step2;
