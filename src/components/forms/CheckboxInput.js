import React from 'react';
import {useField} from 'formik';

const CheckboxInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="checkbox-wrapper">
            <input className={props.className} {...field} {...props} type="checkbox" />
            <label htmlFor={props.name} className={props.labelClass}>{label}</label>
        </div>
    )
}

export default CheckboxInput;
