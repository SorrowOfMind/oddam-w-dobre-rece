import React from 'react';
import SelectInput from './SelectInput';

const Step2 = ({values}) => {
    console.log(values);
    const options = [1,2,3,4,5];
    return (
        <div className="step-2">
           <h1 className="step__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
           <SelectInput
                label="Liczba 60l worków:"
                className="step-2__input"
                labelClass="step-2__label"
                name="bags"
                options={options}
           />
        </div>
    )
}

export default Step2;
