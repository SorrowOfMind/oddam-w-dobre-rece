import React from 'react'
import {useField} from 'formik';

const RadioInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="radio-wrapper">
            <input className={props.className} {...field} {...props} type="radio"/>
            <span className="checkmark"></span>
            <label htmlFor={props.name} className={props.labelClass}>{label}</label>
        </div>
    )
}

export default RadioInput;