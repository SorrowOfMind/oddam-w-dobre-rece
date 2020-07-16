import React from 'react';
import {useField} from 'formik';

type CheckboxInputProps = {
    label: string,
    name: string,
    className: string,
    key: string,
    value: string,
    labelclass: string,
    defaultChecked: string
}

const CheckboxInput = ({label, ...props}: CheckboxInputProps) => {
    const [field, meta] = useField(props);
    return (
        <div className="checkbox-wrapper">
            <input className={props.className} {...field} {...props} type="checkbox" />
            <label htmlFor={props.name} className={props.labelclass}>{label}</label>
        </div>
    )
}

export default CheckboxInput;
