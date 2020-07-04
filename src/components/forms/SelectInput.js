import React from 'react';
import {useField} from 'formik';

const SelectInput = ({label, options, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="select-wrapper">
            <label htmlFor={props.name} className={props.labelClass}>{label}</label>
            <select className={props.className} {...field} {...props}>
                <option>--wybierz--</option>
                {options.map(option => <option>{option}</option>)}
            </select>
        </div>
    )
}

export default SelectInput
