import React from 'react'
import {useField} from 'formik';

type RadioInputProps = {
    label: string,
    labelclass: string,
    className: string,
    name: string,
    value: string,
    defaultChecked: string
}

const RadioInput = ({label, ...props}: RadioInputProps) => {
    const [field, meta] = useField(props);
    return (
        <div className="radio-wrapper">
            <input className={props.className} {...field} {...props} type="radio"/>
            <span className="checkmark"></span>
            <label htmlFor={props.name} className={props.labelclass}>{label}</label>
        </div>
    )
}

export default RadioInput;